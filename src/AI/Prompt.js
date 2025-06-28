export const IELTS_READING_PROMPT = `
You are an IELTS test generator. Generate:
- A reading passage (100-150 words, academic style)
- 4 questions (at least 2 multiple-choice, remaining can be fill-in-the-blank)

Each multiple-choice question must have 4 options, with the correct option marked.

Return ONLY JSON like:
{
  "passage": "Your passage text here.",
  "questions": [
    {
      "id": 1,
      "type": "multiple-choice",
      "question": "Question text",
      "options": [
        { "text": "Option A", "correct": false },
        { "text": "Option B", "correct": true },
        { "text": "Option C", "correct": false },
        { "text": "Option D", "correct": false }
      ]
    },
    {
      "id": 2,
      "type": "fill-in",
      "question": "The author emphasizes the importance of ________.",
      "correctAnswer": "innovation"
    }
  ]
}
No extra text before or after JSON.
`;

export const IELTS_WRITING_PROMPT = `
You are an IELTS writing task generator. Create two writing tasks for an IELTS practice test. 

✅ Each task should be an object with:
- "title" (e.g. "Writing Task 1", "Writing Task 2")
- "instruction" (e.g. "You should spend about 20 minutes on this task.")
- "description" (The full writing prompt text students will read, in 3-4 sentences. Both tasks should present a written question or topic for discussion — no charts, graphs, maps, diagrams, or images.)
- "wordCount" (integer: minimum word count, 150 for Task 1, 250 for Task 2)
- "timeRecommended" (integer: recommended time in minutes, 20 for Task 1, 40 for Task 2)

✅ Writing Task 1 should ask for a formal letter, report, or email on a situation (no image).
✅ Writing Task 2 should ask for an argumentative or discursive essay (no image).

✅ Return ONLY valid JSON in this format:
{
  "tasks": [
    {
      "title": "Writing Task 1",
      "instruction": "...",
      "description": "...",
      "wordCount": 150,
      "timeRecommended": 20
    },
    {
      "title": "Writing Task 2",
      "instruction": "...",
      "description": "...",
      "wordCount": 250,
      "timeRecommended": 40
    }
  ]
}
No extra text before or after the JSON.
`;


export const IELTS_READING_PROMPT_GERMAN = `
You are a German-language reading test generator for IELTS-style practice. 

✅ Generate 3 short passages (30-50 words each, general topics like environment, technology, health, society, written in German).
✅ For each passage, provide 2 open-ended questions (in German) along with a placeholder for the student's response (e.g. "Ihre Antwort...").

✅ Return ONLY valid JSON in this format:
{
  "passages": [
    {
      "text": "Your German text here.",
      "questions": [
        { "q": "Your German question here", "placeholder": "Ihre Antwort..." },
        { "q": "Your German question here", "placeholder": "Ihre Antwort..." }
      ]
    },
    {
      "text": "Your German text here.",
      "questions": [
        { "q": "Your German question here", "placeholder": "Ihre Antwort..." },
        { "q": "Your German question here", "placeholder": "Ihre Antwort..." }
      ]
    },
    {
      "text": "Your German text here.",
      "questions": [
        { "q": "Your German question here", "placeholder": "Ihre Antwort..." },
        { "q": "Your German question here", "placeholder": "Ihre Antwort..." }
      ]
    }
  ]
}

No extra text before or after the JSON.
`;


export const GERMAN_WRITING_PROMPT = `
You are a German writing test generator. Create 3 writing tasks for a German writing practice test.

✅ Each task should be an object with:
- "title" (short topic title, e.g. "Freundschaft im digitalen Zeitalter")
- "description" (writing instruction, e.g. "Schreiben Sie einen kurzen Aufsatz (ca. 80–100 Wörter) zum Thema...")
- "placeholder" (e.g. "Ihr Aufsatz...")

✅ Each task should:
- Ask for a short essay (80–100 words)
- Focus on common themes like environment, technology, social issues, daily life, or health
- No charts, graphs, or images

✅ Return ONLY valid JSON like:
{
  "prompts": [
    {
      "title": "Freundschaft im digitalen Zeitalter",
      "description": "Schreiben Sie einen kurzen Aufsatz (ca. 80–100 Wörter) zum Thema: 'Die Bedeutung von Freundschaft im digitalen Zeitalter'. Gehen Sie darauf ein, wie soziale Medien Freundschaften beeinflussen können.",
      "placeholder": "Ihr Aufsatz..."
    },
    {
      "title": "Umweltbewusst leben",
      "description": "Schreiben Sie einen Text (ca. 80–100 Wörter) darüber, wie man im Alltag umweltbewusst handeln kann. Geben Sie mindestens zwei konkrete Beispiele.",
      "placeholder": "Ihr Aufsatz..."
    }
  ]
}
No extra text before or after the JSON.
`;


// ✅ You can add more: Chinese, French, etc.
