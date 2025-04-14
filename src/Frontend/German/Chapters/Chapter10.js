import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter10 = () => {
  const chapterContent = (
    <>
      <p>Welcome to the final chapter of your German course! In Chapter 10, we'll explore future tense and complex sentence structures in German.</p>
      
      <h3 className="mt-4">Future Tense</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>There are two ways to express the future in German:</p>
          
          <h5>1. Using the present tense with a future time expression</h5>
          <p>This is the most common way to express future actions in everyday German:</p>
          <p><strong>Ich gehe morgen ins Kino.</strong> (I'm going to the cinema tomorrow.)</p>
          <p><strong>Nächste Woche fahre ich nach Berlin.</strong> (Next week I'm going to Berlin.)</p>
          
          <h5 className="mt-3">2. Using the future tense (Futur I)</h5>
          <p>The future tense is formed with the conjugated form of <strong>werden</strong> + the infinitive verb at the end of the sentence:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Subject</th>
                <th>werden</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ich</td>
                <td>werde</td>
                <td>Ich <strong>werde</strong> Deutsch lernen. (I will learn German.)</td>
              </tr>
              <tr>
                <td>du</td>
                <td>wirst</td>
                <td>Du <strong>wirst</strong> nach Berlin fahren. (You will go to Berlin.)</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td>wird</td>
                <td>Er <strong>wird</strong> uns besuchen. (He will visit us.)</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>werden</td>
                <td>Wir <strong>werden</strong> ein Haus kaufen. (We will buy a house.)</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>werdet</td>
                <td>Ihr <strong>werdet</strong> viel Spaß haben. (You will have a lot of fun.)</td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td>werden</td>
                <td>Sie <strong>werden</strong> zufrieden sein. (They/You will be satisfied.)</td>
              </tr>
            </tbody>
          </table>
          <p className="small mt-2">Note: The Futur I is less common in spoken German and is often used to express predictions or assumptions about the future.</p>
        </div>
      </div>
      
      <h3 className="mt-4">Complex Sentences with Conjunctions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>In German, complex sentences are formed by connecting clauses with conjunctions. The word order in the second clause depends on the type of conjunction used:</p>
          
          <h5 className="mt-3">Coordinating Conjunctions (No change in word order)</h5>
          <p>These conjunctions connect two independent clauses and do not change the word order:</p>
          <ul>
            <li><strong>und</strong> (and)</li>
            <li><strong>aber</strong> (but)</li>
            <li><strong>oder</strong> (or)</li>
            <li><strong>denn</strong> (because, for)</li>
            <li><strong>sondern</strong> (but rather, but instead)</li>
          </ul>
          
          <div className="mt-3">
            <p><strong>Examples:</strong></p>
            <p>Ich lerne Deutsch <strong>und</strong> ich spreche jeden Tag. (I learn German and I speak every day.)</p>
            <p>Sie will nach Deutschland fahren, <strong>aber</strong> sie hat kein Geld. (She wants to go to Germany, but she has no money.)</p>
          </div>
          
          <h5 className="mt-4">Subordinating Conjunctions (Verb at the end)</h5>
          <p>These conjunctions introduce a dependent clause and send the conjugated verb to the end of the clause:</p>
          <ul>
            <li><strong>weil</strong> (because)</li>
            <li><strong>dass</strong> (that)</li>
            <li><strong>wenn</strong> (if, when)</li>
            <li><strong>obwohl</strong> (although)</li>
            <li><strong>als</strong> (when - for single events in the past)</li>
            <li><strong>während</strong> (while, during)</li>
            <li><strong>bis</strong> (until)</li>
          </ul>
          
          <div className="mt-3">
            <p><strong>Examples:</strong></p>
            <p>Ich lerne Deutsch, <strong>weil</strong> ich nach Deutschland reisen <strong>will</strong>. (I'm learning German because I want to travel to Germany.)</p>
            <p>Er weiß, <strong>dass</strong> ich morgen <strong>komme</strong>. (He knows that I'm coming tomorrow.)</p>
            <p><strong>Wenn</strong> ich Zeit <strong>habe</strong>, lese ich deutsche Bücher. (When I have time, I read German books.)</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Relative Clauses</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Relative clauses provide additional information about a noun and are introduced by relative pronouns:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Case</th>
                <th>Masculine</th>
                <th>Feminine</th>
                <th>Neuter</th>
                <th>Plural</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nominative</td>
                <td>der</td>
                <td>die</td>
                <td>das</td>
                <td>die</td>
              </tr>
              <tr>
                <td>Accusative</td>
                <td>den</td>
                <td>die</td>
                <td>das</td>
                <td>die</td>
              </tr>
              <tr>
                <td>Dative</td>
                <td>dem</td>
                <td>der</td>
                <td>dem</td>
                <td>denen</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-3">
            <p><strong>Examples:</strong></p>
            <p>Der Mann, <strong>der</strong> dort steht, ist mein Lehrer. (The man who is standing there is my teacher.) - masculine nominative</p>
            <p>Das Buch, <strong>das</strong> ich lese, ist interessant. (The book that I'm reading is interesting.) - neuter accusative</p>
            <p>Die Frau, <strong>der</strong> ich helfe, heißt Maria. (The woman whom I'm helping is called Maria.) - feminine dative</p>
          </div>
          <p className="mt-3">Note: In relative clauses, the verb goes to the end of the clause.</p>
        </div>
      </div>

      <div className="alert alert-success mt-4">
        <h4>Congratulations!</h4>
        <p>You've completed all ten chapters of your German course! You now have a solid foundation in German grammar and vocabulary.</p>
        <p>To continue improving your German skills:</p>
        <ul>
          <li>Practice speaking German regularly</li>
          <li>Listen to German music and podcasts</li>
          <li>Watch German movies and TV shows</li>
          <li>Read German books, newspapers, and websites</li>
          <li>Find a language exchange partner</li>
          <li>Consider visiting a German-speaking country</li>
        </ul>
        <p>Viel Erfolg und viel Spaß beim Deutschlernen! (Good luck and have fun learning German!)</p>
      </div>

      <h3 className="mt-4">Final Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Translate the following sentences into German:</p>
          <ol>
            <li>I will visit Berlin next year.</li>
            <li>She is learning German because she wants to study in Germany.</li>
            <li>The book that I'm reading is very interesting.</li>
            <li>When I have time, I like to watch German movies.</li>
            <li>He knows that we will come tomorrow.</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={10}
      title="Future Tense and Complex Sentences"
      content={chapterContent}
      hasNextChapter={false}
    />
  );
};

export default Chapter10;
