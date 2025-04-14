import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter6 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 6 of your IELTS preparation! In this chapter, we'll focus on building your vocabulary for the IELTS test.</p>
      
      <h3 className="mt-4">The Importance of Vocabulary in IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Vocabulary is directly assessed in all four sections of the IELTS test:</p>
          <ul>
            <li><strong>Listening:</strong> Understanding a wide range of words is crucial for comprehension</li>
            <li><strong>Reading:</strong> You need to understand academic vocabulary and subject-specific terms</li>
            <li><strong>Writing:</strong> Using varied and precise vocabulary improves your score in the Lexical Resource criterion</li>
            <li><strong>Speaking:</strong> A broad vocabulary helps you express ideas clearly and precisely</li>
          </ul>
          <p>Having a rich vocabulary allows you to:</p>
          <ul>
            <li>Understand complex texts and conversations</li>
            <li>Express yourself precisely</li>
            <li>Avoid repetition</li>
            <li>Show sophistication in your language use</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Types of Vocabulary for IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Academic Vocabulary</h5>
          <p>Commonly used in academic texts, journals, and lectures:</p>
          <div className="row">
            <div className="col-md-4">
              <ul>
                <li>analyze</li>
                <li>significant</li>
                <li>theory</li>
                <li>research</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>evaluate</li>
                <li>methodology</li>
                <li>framework</li>
                <li>consequence</li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul>
                <li>implement</li>
                <li>hypothesis</li>
                <li>perspective</li>
                <li>phenomenon</li>
              </ul>
            </div>
          </div>
          
          <h5 className="mt-3">2. Topic-specific Vocabulary</h5>
          <p>Words related to common IELTS topics:</p>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Topic</th>
                <th>Key Vocabulary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Environment</td>
                <td>sustainability, pollution, climate change, biodiversity, conservation</td>
              </tr>
              <tr>
                <td>Technology</td>
                <td>innovation, automation, artificial intelligence, digital divide, cybersecurity</td>
              </tr>
              <tr>
                <td>Education</td>
                <td>curriculum, assessment, pedagogy, literacy, vocational training</td>
              </tr>
              <tr>
                <td>Health</td>
                <td>well-being, preventive care, epidemic, obesity, mental health</td>
              </tr>
              <tr>
                <td>Urbanization</td>
                <td>infrastructure, congestion, suburban, metropolis, gentrification</td>
              </tr>
            </tbody>
          </table>
          
          <h5 className="mt-3">3. Collocations</h5>
          <p>Common word combinations that sound natural to native speakers:</p>
          <ul>
            <li>make a decision (not "do a decision")</li>
            <li>heavy traffic (not "strong traffic")</li>
            <li>conduct research (not "do research")</li>
            <li>reach a conclusion (not "arrive at a conclusion")</li>
            <li>raise awareness (not "lift awareness")</li>
          </ul>
          
          <h5 className="mt-3">4. Phrasal Verbs</h5>
          <p>Combinations of verbs and prepositions that have specific meanings:</p>
          <ul>
            <li>bring up (raise a child or mention a topic)</li>
            <li>carry out (perform a task)</li>
            <li>look into (investigate)</li>
            <li>come up with (think of or suggest)</li>
            <li>break down (fail to function or analyze in detail)</li>
          </ul>
        </div>
      </div>
      
      <h3 className="mt-4">Strategies for Vocabulary Development</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Contextual Learning</h5>
          <p>Learn words in context rather than in isolation:</p>
          <ul>
            <li>Read authentic materials (newspapers, academic journals, novels)</li>
            <li>Listen to podcasts, TED Talks, and documentaries</li>
            <li>Note how words are used in different contexts</li>
          </ul>
          
          <h5 className="mt-3">2. Word Families</h5>
          <p>Learn different forms of the same word:</p>
          <div className="border p-3 mb-3">
            <p><strong>Base word:</strong> Economy</p>
            <p><strong>Noun:</strong> economy, economist, economics</p>
            <p><strong>Adjective:</strong> economic, economical</p>
            <p><strong>Verb:</strong> economize</p>
            <p><strong>Adverb:</strong> economically</p>
          </div>
          
          <h5 className="mt-3">3. Word Maps</h5>
          <p>Create visual connections between related words:</p>
          <div className="border p-3 mb-3">
            <p className="text-center"><strong>EDUCATION</strong></p>
            <div className="row">
              <div className="col-md-4">
                <p><strong>Related nouns:</strong></p>
                <p>school, university, teacher, student, curriculum, degree</p>
              </div>
              <div className="col-md-4">
                <p><strong>Related verbs:</strong></p>
                <p>learn, study, teach, graduate, educate</p>
              </div>
              <div className="col-md-4">
                <p><strong>Related adjectives:</strong></p>
                <p>academic, educated, scholarly, literate</p>
              </div>
            </div>
          </div>
          
          <h5 className="mt-3">4. Vocabulary Notebook</h5>
          <p>Keep a systematic record of new vocabulary:</p>
          <ul>
            <li>Write the word and its definition</li>
            <li>Include an example sentence showing the word in context</li>
            <li>Note collocations or phrases containing the word</li>
            <li>Include synonyms and antonyms</li>
            <li>Review regularly using spaced repetition</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Using Vocabulary Effectively in IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Using Synonyms</h5>
          <p>Avoid repetition by using a variety of words with similar meanings:</p>
          <ul>
            <li>important → significant, crucial, essential, vital</li>
            <li>problem → issue, challenge, difficulty, obstacle</li>
            <li>good → beneficial, advantageous, favorable, positive</li>
            <li>bad → detrimental, unfavorable, negative, harmful</li>
          </ul>
          
          <h5 className="mt-3">2. Using Precise Vocabulary</h5>
          <p>Choose specific words rather than general ones:</p>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>General</th>
                <th>Precise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nice</td>
                <td>delightful, pleasant, charming, agreeable</td>
              </tr>
              <tr>
                <td>big</td>
                <td>enormous, substantial, considerable, massive</td>
              </tr>
              <tr>
                <td>small</td>
                <td>tiny, minimal, slight, insignificant</td>
              </tr>
              <tr>
                <td>happy</td>
                <td>elated, content, joyful, satisfied</td>
              </tr>
            </tbody>
          </table>
          
          <h5 className="mt-3">3. Using Idiomatic Expressions</h5>
          <p>Include natural expressions to demonstrate fluency (but don't overuse them):</p>
          <ul>
            <li>to kill two birds with one stone (achieve two goals with one action)</li>
            <li>a double-edged sword (something with both advantages and disadvantages)</li>
            <li>the tip of the iceberg (a small, visible part of a much larger issue)</li>
            <li>to take something with a grain of salt (to be skeptical about something)</li>
          </ul>
        </div>
      </div>

      <div className="alert alert-warning mt-4">
        <h4>Common Vocabulary Mistakes in IELTS</h4>
        <ul>
          <li><strong>Using memorized lists of "advanced" words</strong> that you don't fully understand</li>
          <li><strong>Overusing complex vocabulary</strong> without considering naturalness and context</li>
          <li><strong>Using words with similar sounds but different meanings</strong> (e.g., affect/effect, principal/principle)</li>
          <li><strong>Incorrect collocations</strong> (e.g., "do a mistake" instead of "make a mistake")</li>
          <li><strong>Confusing words with similar meanings</strong> (e.g., opportunity/possibility, increase/rise)</li>
        </ul>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>For each of the following sentences, replace the underlined word with a more precise or sophisticated alternative:</p>
          <ol>
            <li>Environmental pollution has <u>bad</u> effects on human health.</li>
            <li>The study showed a <u>big</u> difference between the two groups.</li>
            <li>Many students find it <u>hard</u> to balance work and study.</li>
            <li>The new policy will <u>help</u> to reduce unemployment.</li>
            <li>People today <u>use</u> smartphones for almost everything.</li>
          </ol>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Resources for Vocabulary Building</h4>
        <ul>
          <li><a href="https://www.oxfordlearnersdictionaries.com/" target="_blank" rel="noopener noreferrer">Oxford Learner's Dictionary</a> - Provides definitions and example sentences</li>
          <li><a href="https://www.thesaurus.com/" target="_blank" rel="noopener noreferrer">Thesaurus.com</a> - Helps find synonyms and antonyms</li>
          <li><a href="https://www.academicwordlist.org/" target="_blank" rel="noopener noreferrer">Academic Word List</a> - Essential vocabulary for academic English</li>
          <li><a href="https://www.collinsdictionary.com/" target="_blank" rel="noopener noreferrer">Collins Dictionary</a> - Includes collocations and usage examples</li>
          <li><a href="https://quizlet.com/" target="_blank" rel="noopener noreferrer">Quizlet</a> - Create flashcards for vocabulary practice</li>
        </ul>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={6}
      title="Vocabulary Building for IELTS"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter6;
