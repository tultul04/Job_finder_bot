// This is an an AI-powered interview simulator that asks contextually relevant questions based on the user's stated career goals.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InterviewSimulatorInputSchema = z.object({
  careerGoal: z.string().describe("The user's stated career goal."),
  technicalSkills: z.string().describe("The user's technical skills."),
});
export type InterviewSimulatorInput = z.infer<typeof InterviewSimulatorInputSchema>;

const InterviewSimulatorOutputSchema = z.object({
  question: z
    .string()
    .describe("An interview question tailored to the user's career goals and skills."),
  justification: z.string().describe("A justification for why this question was asked, given the user's profile."),
});
export type InterviewSimulatorOutput = z.infer<typeof InterviewSimulatorOutputSchema>;

export async function getInterviewQuestion(input: InterviewSimulatorInput): Promise<InterviewSimulatorOutput> {
  return interviewSimulatorFlow(input);
}

const interviewQuestionPrompt = ai.definePrompt({
  name: 'interviewQuestionPrompt',
  input: {schema: InterviewSimulatorInputSchema},
  output: {schema: InterviewSimulatorOutputSchema},
  prompt: `You are an AI interview simulator designed to ask contextually relevant questions to help users practice for job interviews.

  Based on the user's stated career goals and technical skills, generate an interview question that is relevant to their profile.
  Also provide a brief justification for why this question was asked, given the user's profile.

  Career Goal: {{{careerGoal}}}
  Technical Skills: {{{technicalSkills}}}
  `,
});

const interviewSimulatorFlow = ai.defineFlow(
  {
    name: 'interviewSimulatorFlow',
    inputSchema: InterviewSimulatorInputSchema,
    outputSchema: InterviewSimulatorOutputSchema,
  },
  async input => {
    const {output} = await interviewQuestionPrompt(input);
    return output!;
  }
);
