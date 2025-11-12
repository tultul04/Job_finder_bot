'use server';
/**
 * @fileOverview An AI agent for generating personalized developer roadmaps.
 *
 * - generateRoadmap - A function that creates a roadmap based on a career goal.
 * - GenerateRoadmapInput - The input type for the generateRoadmap function.
 * - GenerateRoadmapOutput - The return type for the generateRoadmap function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RoadmapStepSchema = z.object({
  title: z.string().describe('The title of the roadmap step.'),
  description: z.string().describe('A detailed description of the roadmap step.'),
  status: z.enum(['completed', 'in_progress', 'todo']).describe('The current status of the step.'),
});

const GenerateRoadmapInputSchema = z.object({
  careerGoal: z.string().describe("The user's stated career goal."),
});
export type GenerateRoadmapInput = z.infer<typeof GenerateRoadmapInputSchema>;

const GenerateRoadmapOutputSchema = z.object({
  steps: z.array(RoadmapStepSchema).describe('A list of personalized roadmap steps.'),
});
export type GenerateRoadmapOutput = z.infer<typeof GenerateRoadmapOutputSchema>;

export async function generateRoadmap(input: GenerateRoadmapInput): Promise<GenerateRoadmapOutput> {
  return generateRoadmapFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRoadmapPrompt',
  input: {schema: GenerateRoadmapInputSchema},
  output: {schema: GenerateRoadmapOutputSchema},
  prompt: `You are an expert career counselor for software developers. Based on the user's stated career goal, create a detailed, step-by-step roadmap with 5 steps to help them achieve it.

  The first step should be 'in_progress' and the rest should be 'todo'.

  Career Goal: {{{careerGoal}}}
  `,
});

const generateRoadmapFlow = ai.defineFlow(
  {
    name: 'generateRoadmapFlow',
    inputSchema: GenerateRoadmapInputSchema,
    outputSchema: GenerateRoadmapOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
