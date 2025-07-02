export const IELTS_READING_PROMPT = `
You are an IELTS reading practice test generator.

✅ Generate 3 short reading passages (each 30–50 words, academic/general topics such as environment, technology, education, etc., written in clear English).
✅ For each passage, create 2 open-ended comprehension questions in English (NOT multiple choice).
✅ For each question, include a simple placeholder for user response like "Your answer...".

✅ Return ONLY valid JSON in this format:
{
  "passages": [
    {
      "text": "Your English passage here.",
      "questions": [
        { "q": "Your English question here", "placeholder": "Your answer..." },
        { "q": "Your English question here", "placeholder": "Your answer..." }
      ]
    },
    {
      "text": "Your English passage here.",
      "questions": [
        { "q": "Your English question here", "placeholder": "Your answer..." },
        { "q": "Your English question here", "placeholder": "Your answer..." }
      ]
    },
    {
      "text": "Your English passage here.",
      "questions": [
        { "q": "Your English question here", "placeholder": "Your answer..." },
        { "q": "Your English question here", "placeholder": "Your answer..." }
      ]
    }
  ]
}

No extra text before or after the JSON.
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


export const CHINESE_READING_PROMPT = `
You are a Chinese-language reading test generator.

✅ Generate 3 short passages (30–50 Chinese characters each) on general topics like environment, technology, health, or daily life.

✅ For each passage, provide 2 open-ended questions (in Chinese), each with a placeholder like "你的回答…"

✅ Return ONLY valid JSON in this format:
{
  "passages": [
    {
      "text": "你的中文短文在这里。",
      "questions": [
        { "q": "你的中文问题在这里", "placeholder": "你的回答…" },
        { "q": "你的中文问题在这里", "placeholder": "你的回答…" }
      ]
    },
    {
      "text": "你的中文短文在这里。",
      "questions": [
        { "q": "你的中文问题在这里", "placeholder": "你的回答…" },
        { "q": "你的中文问题在这里", "placeholder": "你的回答…" }
      ]
    },
    {
      "text": "你的中文短文在这里。",
      "questions": [
        { "q": "你的中文问题在这里", "placeholder": "你的回答…" },
        { "q": "你的中文问题在这里", "placeholder": "你的回答…" }
      ]
    }
  ]
}
No extra text before or after the JSON.
`;



export const CHINESE_WRITING_PROMPT = `
You are a Chinese writing test generator. Create 3 short writing tasks for a Chinese writing practice test.

✅ Each task should be an object with:
- "title" (short Chinese title, e.g. "网络与生活")
- "description" (writing instruction, e.g. "请写一篇短文（80–100字）讨论...")
- "placeholder" (e.g. "你的作文…")

✅ Each task should:
- Ask for a short essay (80–100 Chinese characters)
- Cover common topics such as environment, technology, education, health, or daily life
- Avoid any charts, graphs, or images

✅ Return ONLY valid JSON like:
{
  "prompts": [
    {
      "title": "网络与生活",
      "description": "请写一篇短文（80–100字）讨论网络对人们生活的影响。可以举例说明它的好处或坏处。",
      "placeholder": "你的作文…"
    },
    {
      "title": "健康饮食",
      "description": "请写一篇短文（80–100字）说明健康饮食的重要性。你可以谈谈蔬菜、水果和锻炼的作用。",
      "placeholder": "你的作文…"
    }
  ]
}
No extra text before or after the JSON.
`;

