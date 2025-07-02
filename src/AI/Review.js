export const AI_REVIEW_PROMPT = ({ listening, reading, writing }) => {
  return `
You are a preparation expert. Based on the student's performance, provide a paragraph of constructive feedback and improvement suggestions for their language skills. The student's scores are:

- Listening: ${listening}%
- Reading: ${reading}%
- Writing: ${writing}%

Summarize their performance, highlight strengths and weaknesses, and offer advice for improvement in each area. Do not return JSON. Write in a human, encouraging tone.
  `
};
