import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter9 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 9 of your German course! In this chapter, we'll learn about forming the past tense in German.</p>
      
      <h3 className="mt-4">Past Tenses in German</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>German has two main past tenses:</p>
          <ol>
            <li><strong>Perfekt</strong> (present perfect) - primarily used in spoken German and informal writing</li>
            <li><strong>Präteritum</strong> (simple past/imperfect) - primarily used in formal writing and storytelling</li>
          </ol>
          <p>For everyday conversation, the Perfekt tense is most commonly used to describe past events.</p>
        </div>
      </div>

      <h3 className="mt-4">Perfekt Tense</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The Perfekt tense is formed with two parts:</p>
          <ol>
            <li>A conjugated form of the auxiliary verb <strong>haben</strong> (to have) or <strong>sein</strong> (to be)</li>
            <li>The past participle of the main verb, which usually goes at the end of the sentence</li>
          </ol>
          
          <h5 className="mt-3">Past Participle Formation:</h5>
          
          <p><strong>Regular verbs:</strong> ge + verb stem + t</p>
          <p>Example: spielen (to play) → ge + spiel + t = <strong>gespielt</strong></p>
          
          <div className="mt-3">
            <p><strong>Examples with haben:</strong></p>
            <p>Ich habe Tennis <strong>gespielt</strong>. (I played tennis.)</p>
            <p>Du hast ein Buch <strong>gekauft</strong>. (You bought a book.)</p>
            <p>Er hat Deutsch <strong>gelernt</strong>. (He learned German.)</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">When to Use 'haben' or 'sein'</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Most verbs form the Perfekt with <strong>haben</strong>, but some use <strong>sein</strong>:</p>
          
          <h5 className="mt-3">Verbs that use <strong>sein</strong>:</h5>
          <ol>
            <li>Verbs of motion or change of state (e.g., gehen, fahren, fliegen, laufen)</li>
            <li>Verbs that express a change of condition (e.g., sterben, einschlafen, aufwachen)</li>
            <li>The verbs sein, werden, and bleiben</li>
          </ol>
          
          <div className="mt-3">
            <p><strong>Examples with sein:</strong></p>
            <p>Ich bin nach Berlin <strong>gefahren</strong>. (I drove/went to Berlin.)</p>
            <p>Sie ist <strong>aufgestanden</strong>. (She stood up.)</p>
            <p>Wir sind spät <strong>angekommen</strong>. (We arrived late.)</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Irregular Past Participles</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Many common German verbs have irregular past participles:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Infinitive</th>
                <th>Meaning</th>
                <th>Past Participle</th>
                <th>Auxiliary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sein</td>
                <td>to be</td>
                <td>gewesen</td>
                <td>sein</td>
              </tr>
              <tr>
                <td>haben</td>
                <td>to have</td>
                <td>gehabt</td>
                <td>haben</td>
              </tr>
              <tr>
                <td>gehen</td>
                <td>to go</td>
                <td>gegangen</td>
                <td>sein</td>
              </tr>
              <tr>
                <td>kommen</td>
                <td>to come</td>
                <td>gekommen</td>
                <td>sein</td>
              </tr>
              <tr>
                <td>trinken</td>
                <td>to drink</td>
                <td>getrunken</td>
                <td>haben</td>
              </tr>
              <tr>
                <td>essen</td>
                <td>to eat</td>
                <td>gegessen</td>
                <td>haben</td>
              </tr>
              <tr>
                <td>sprechen</td>
                <td>to speak</td>
                <td>gesprochen</td>
                <td>haben</td>
              </tr>
              <tr>
                <td>sehen</td>
                <td>to see</td>
                <td>gesehen</td>
                <td>haben</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Präteritum Tense</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The Präteritum (simple past) is mainly used in written German, formal speech, and storytelling.</p>
          
          <h5 className="mt-3">Common Verbs in Präteritum</h5>
          <p>These auxiliary and modal verbs are commonly used in Präteritum even in spoken German:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Infinitive</th>
                <th>Präteritum (ich)</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>sein</td>
                <td>war</td>
                <td>was</td>
              </tr>
              <tr>
                <td>haben</td>
                <td>hatte</td>
                <td>had</td>
              </tr>
              <tr>
                <td>können</td>
                <td>konnte</td>
                <td>could</td>
              </tr>
              <tr>
                <td>wollen</td>
                <td>wollte</td>
                <td>wanted</td>
              </tr>
              <tr>
                <td>müssen</td>
                <td>musste</td>
                <td>had to</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-3">
            <p><strong>Examples:</strong></p>
            <p>Ich <strong>war</strong> gestern zu Hause. (I was at home yesterday.)</p>
            <p>Er <strong>hatte</strong> kein Geld. (He had no money.)</p>
            <p>Sie <strong>konnte</strong> nicht kommen. (She could not come.)</p>
          </div>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Cultural Note</h4>
        <p>When telling stories or recounting events in German, it's common to use the Perfekt tense in conversation, even though English might use simple past. For example, if someone asks what you did yesterday, you'd typically answer in Perfekt: "Ich habe einen Film gesehen" (I saw a movie) rather than in Präteritum.</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Complete the sentences using the Perfekt tense:</p>
          <ol>
            <li>Ich _____ gestern Tennis _____ (spielen).</li>
            <li>Er _____ nach Berlin _____ (fahren).</li>
            <li>Wir _____ im Restaurant _____ (essen).</li>
            <li>Sie _____ spät _____ (kommen).</li>
            <li>_____ du den Film _____ (sehen)?</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={9}
      title="Past Tense"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter9;
