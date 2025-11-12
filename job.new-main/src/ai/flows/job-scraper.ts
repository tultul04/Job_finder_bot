'use server';
/**
 * @fileOverview A job scraping AI agent.
 *
 * - scrapeJobs - A function that handles the job scraping process.
 * - ScrapeJobsInput - The input type for the scrapeJobs function.
 * - ScrapeJobsOutput - The return type for the scrapeJobs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const JobSchema = z.object({
  title: z.string().describe('The job title.'),
  company: z.string().describe('The company name.'),
  location: z.string().describe('The job location.'),
  salary: z.string().describe('The estimated job salary or salary range. It can also be "Competitive" or "Not Disclosed".'),
  source: z.string().describe('The source platform of the job listing (e.g., LinkedIn).'),
  logo: z.string().describe('A URL for the company logo.'),
  dataAiHint: z.string().describe('An AI hint for the logo image.'),
});

const ScrapeJobsInputSchema = z.object({
  query: z.string().describe('The user\'s job search query.'),
});
export type ScrapeJobsInput = z.infer<typeof ScrapeJobsInputSchema>;

const ScrapeJobsOutputSchema = z.object({
  jobs: z.array(JobSchema).describe('A list of scraped jobs.'),
});
export type ScrapeJobsOutput = z.infer<typeof ScrapeJobsOutputSchema>;

export async function scrapeJobs(input: ScrapeJobsInput): Promise<ScrapeJobsOutput> {
  return scrapeJobsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scrapeJobsPrompt',
  input: {schema: ScrapeJobsInputSchema},
  output: {schema: ScrapeJobsOutputSchema},
  prompt: `You are an expert job scraping agent. Based on the user's query, find and return 6 relevant job listings.

  For each job, provide a title, company, location, salary, source, a placeholder logo URL from placehold.co, and a data-ai-hint for the logo. Ensure the salary is realistic for the role, and can be a range (e.g., '$120,000 - $150,000'), a single value, 'Competitive Stipend', or 'Not Disclosed'.

  Query: {{{query}}}
  `,
});

const scrapeJobsFlow = ai.defineFlow(
  {
    name: 'scrapeJobsFlow',
    inputSchema: ScrapeJobsInputSchema,
    outputSchema: ScrapeJobsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
