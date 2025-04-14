import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter7 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 7 of your IELTS preparation! In this chapter, we'll focus on developing your grammar skills for the IELTS test.</p>
      
      <h3 className="mt-4">The Importance of Grammar in IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Grammar is directly assessed in the Writing and Speaking sections of IELTS as "Grammatical Range and Accuracy." To achieve a high band score, you need to:</p>
          <ul>
            <li>Use a wide range of grammatical structures</li>
            <li>Use these structures accurately with minimal errors</li>
            <li>Form complex sentences that are clear and coherent</li>
            <li>Show flexibility in how you express ideas grammatically</li>
          </ul>
          <p>Good grammar also helps you in the Listening and Reading sections by allowing you to understand the structure and meaning of complex sentences.</p>
        </div>
      </div>

      <h3 className="mt-4">Essential Grammar for IELTS</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Verb Tenses</h5>
          <p>You should be comfortable using all these tenses appropriately:</p>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Tense</th>
                <th>Example</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Present Simple</td>
                <td>Water boils at 100°C.</td>
                <td>Facts, habits, general truths</td>
              </tr>
              <tr>
                <td>Present Continuous</td>
                <td>I am studying for my IELTS exam.</td>
                <td>Current actions, temporary situations</td>
              </tr>
              <tr>
                <td>Past Simple</td>
                <td>I visited London last year.</td>
                <td>Completed actions in the past</td>
              </tr>
              <tr>
                <td>Past Continuous</td>
                <td>I was working when you called.</td>
                <td>Actions in progress in the past</td>
              </tr>
              <tr>
                <td>Present Perfect</td>
                <td>I have lived here for five years.</td>
                <td>Past actions with present relevance</td>
              </tr>
              <tr>
                <td>Present Perfect Continuous</td>
                <td>I have been studying English since 2018.</td>
                <td>Ongoing actions from past to present</td>
              </tr>
              <tr>
                <td>Future with will</td>
                <td>I will take the exam next month.</td>
                <td>Future predictions or decisions</td>
              </tr>
              <tr>
                <td>Future with going to</td>
                <td>I am going to prepare tonight.</td>
                <td>Planned future actions</td>
              </tr>
            </tbody>
          </table>
          
          <h5 className="mt-3">2. Conditional Sentences</h5>
          <p>Different types of conditionals allow you to express hypothetical situations:</p>
          <ul>
            <li><strong>Zero Conditional:</strong> If water reaches 0°C, it freezes. (general truths)</li>
            <li><strong>First Conditional:</strong> If I study hard, I will pass the exam. (possible future)</li>
            <li><strong>Second Conditional:</strong> If I had more time, I would travel more. (hypothetical present/future)</li>
            <li><strong>Third Conditional:</strong> If I had studied harder, I would have passed the exam. (hypothetical past)</li>
            <li><strong>Mixed Conditional:</strong> If I had studied medicine, I would be a doctor now. (hypothetical past affecting present)</li>
          </ul>
          
          <h5 className="mt-3">3. Passive Voice</h5>
          <p>Useful for academic writing and when the focus is on the action rather than who performs it:</p>
          <ul>
            <li><strong>Active:</strong> Scientists conduct experiments in laboratories.</li>
            <li><strong>Passive:</strong> Experiments are conducted in laboratories.</li>
          </ul>
          <p>Passive structures across tenses:</p>
          <ul>
            <li>Present Simple: The environment is affected by pollution.</li>
            <li>Present Perfect: The system has been upgraded recently.</li>
            <li>Past Simple: The bridge was built in 1995.</li>
            <li>Future: New regulations will be implemented next year.</li>
          </ul>
          
          <h5 className="mt-3">4. Relative Clauses</h5>
          <p>Used to give additional information about a noun:</p>
          <ul>
            <li><strong>Defining:</strong> The book <em>that I borrowed from the library</em> was very helpful. (essential information)</li>
            <li><strong>Non-defining:</strong> My teacher, <em>who is from Australia</em>, has been teaching for 20 years. (additional information)</li>
          </ul>
          <p>Relative pronouns:</p>
          <ul>
            <li><strong>who</strong> (for people): The woman who called yesterday is my teacher.</li>
            <li><strong>which</strong> (for things): The car which is parked outside is mine.</li>
            <li><strong>that</strong> (for people and things in defining clauses): The book that I read was interesting.</li>
            <li><strong>whose</strong> (for possession): The man whose car broke down is waiting for help.</li>
            <li><strong>where</strong> (for places): The university where I studied is in London.</li>
            <li><strong>when</strong> (for times): I remember the day when we first met.</li>
          </ul>
        </div>
      </div>
      
      <h3 className="mt-4">More Advanced Grammar for Higher Band Scores</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>1. Complex Sentence Structures</h5>
          <p>Combine simple sentences using various connectors:</p>
          <ul>
            <li><strong>Coordinating conjunctions</strong> (and, but, or, so): I wanted to study abroad, <em>but</em> I couldn't afford it.</li>
            <li><strong>Subordinating conjunctions</strong> (because, although, since, while): <em>Although</em> technology has benefits, it also causes problems.</li>
            <li><strong>Correlative conjunctions</strong> (not only...but also, either...or): <em>Not only</em> did he pass the exam, <em>but also</em> he received the highest grade.</li>
          </ul>
          
          <h5 className="mt-3">2. Participle Clauses</h5>
          <p>Condense information and create sophisticated sentences:</p>
          <ul>
            <li><strong>Present participle (-ing):</strong> <em>Walking along the beach</em>, I found a beautiful seashell.</li>
            <li><strong>Past participle (-ed):</strong> <em>Exhausted from the long journey</em>, the travelers fell asleep immediately.</li>
            <li><strong>Perfect participle (having + past participle):</strong> <em>Having finished the project</em>, I took a well-deserved break.</li>
          </ul>
          
          <h5 className="mt-3">3. Reported Speech</h5>
          <p>Useful for reporting what someone said without quoting directly:</p>
          <ul>
            <li><strong>Direct:</strong> She said, "I will take the IELTS test next week."</li>
            <li><strong>Reported:</strong> She said (that) she would take the IELTS test the following week.</li>
          </ul>
          <p>Note the changes in tenses, pronouns, and time expressions.</p>
          
          <h5 className="mt-3">4. Inversion</h5>
          <p>Adds emphasis or formality to your writing:</p>
          <ul>
            <li><strong>After negative adverbials:</strong> <em>Never before</em> have I seen such a beautiful sunset.</li>
            <li><strong>With "only":</strong> <em>Only then</em> did I realize the importance of education.</li>
            <li><strong>With "not only...but also":</strong> <em>Not only</em> is exercise good for physical health, <em>but also</em> it improves mental wellbeing.</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Common Grammar Errors to Avoid</h3>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Error Type</th>
                <th>Incorrect</th>
                <th>Correct</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subject-verb agreement</td>
                <td>The number of students <em>are</em> increasing.</td>
                <td>The number of students <em>is</em> increasing.</td>
              </tr>
              <tr>
                <td>Article usage</td>
                <td>I'm studying <em>the</em> English to pass IELTS.</td>
                <td>I'm studying English to pass IELTS.</td>
              </tr>
              <tr>
                <td>Preposition errors</td>
                <td>We discussed <em>about</em> the problem.</td>
                <td>We discussed the problem.</td>
              </tr>
              <tr>
                <td>Verb tense consistency</td>
                <td>When I arrived, she <em>leaves</em> the house.</td>
                <td>When I arrived, she <em>left</em> the house.</td>
              </tr>
              <tr>
                <td>Run-on sentences</td>
                <td>I like coffee I drink it every day.</td>
                <td>I like coffee, <em>so</em> I drink it every day.</td>
              </tr>
              <tr>
                <td>Comma splices</td>
                <td>The weather was cold<em>,</em> we decided to stay home.</td>
                <td>The weather was cold<em>, so</em> we decided to stay home.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Tips for Improving Grammar</h4>
        <ul>
          <li><strong>Analyze model answers:</strong> Study high-scoring IELTS essays and identify the grammar structures used</li>
          <li><strong>Keep a grammar notebook:</strong> Note down new structures you learn with examples</li>
          <li><strong>Practice writing complex sentences:</strong> Take simple sentences and combine them using different connectors</li>
          <li><strong>Read widely:</strong> Expose yourself to well-written English texts to absorb grammatical patterns</li>
          <li><strong>Get feedback:</strong> Have a teacher or proficient English speaker check your writing for grammar errors</li>
          <li><strong>Use grammar checkers:</strong> Tools like Grammarly can help identify many common errors</li>
          <li><strong>Review your work:</strong> Always proofread your writing, paying special attention to grammar</li>
        </ul>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Rewrite the following sentences using the grammatical structure indicated in brackets:</p>
          <ol>
            <li>The government built the bridge last year. (passive voice)</li>
            <li>I study hard. I want to get a high score. (use "because")</li>
            <li>If I have enough money, I will travel abroad. (second conditional)</li>
            <li>We arrived at the airport. The flight had already departed. (past perfect tense)</li>
            <li>John failed the exam. He didn't study enough. (participle clause)</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={7}
      title="Grammar for IELTS"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter7;
