import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter4 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 4 of your German course! In this chapter, we'll learn about regular verbs in German and their conjugation.</p>
      
      <h3 className="mt-4">Present Tense Verb Conjugation</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>In German, verbs change their form depending on the subject. The basic process is to take the infinitive form (which ends in -en), remove the -en, and add the appropriate ending.</p>
          
          <h5 className="mt-3">Example: spielen (to play)</h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Subject</th>
                <th>Conjugation</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ich</td>
                <td>spiel<strong>e</strong></td>
                <td>I play</td>
              </tr>
              <tr>
                <td>du</td>
                <td>spiel<strong>st</strong></td>
                <td>you play (informal singular)</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td>spiel<strong>t</strong></td>
                <td>he/she/it plays</td>
              </tr>
              <tr>
                <td>wir</td>
                <td>spiel<strong>en</strong></td>
                <td>we play</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td>spiel<strong>t</strong></td>
                <td>you play (informal plural)</td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td>spiel<strong>en</strong></td>
                <td>they play / you play (formal)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Common Regular Verbs</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>arbeiten</strong> - to work</p>
              <p><strong>kaufen</strong> - to buy</p>
              <p><strong>kochen</strong> - to cook</p>
              <p><strong>lernen</strong> - to learn</p>
              <p><strong>machen</strong> - to make/do</p>
            </div>
            <div className="col-md-6">
              <p><strong>sagen</strong> - to say</p>
              <p><strong>trinken</strong> - to drink</p>
              <p><strong>wohnen</strong> - to live</p>
              <p><strong>fragen</strong> - to ask</p>
              <p><strong>hören</strong> - to hear/listen</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Special Cases</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Some verbs with stems ending in -t, -d, -chn, -ffn, -tm, or -dm need an extra 'e' before the ending for 'du' and 'er/sie/es':</p>
          
          <h5 className="mt-3">Example: arbeiten (to work)</h5>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>ich</td>
                <td>arbeit<strong>e</strong></td>
              </tr>
              <tr>
                <td>du</td>
                <td>arbeit<strong>est</strong> (not arbeitst)</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td>arbeit<strong>et</strong> (not arbeitt)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Sentence Formation</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>Ich lerne Deutsch.</strong> - I learn German.</p>
          <p><strong>Du arbeitest viel.</strong> - You work a lot.</p>
          <p><strong>Er spielt Fußball.</strong> - He plays soccer.</p>
          <p><strong>Wir kochen zusammen.</strong> - We cook together.</p>
          <p><strong>Ihr trinkt Kaffee.</strong> - You drink coffee.</p>
          <p><strong>Sie kaufen ein Auto.</strong> - They buy a car.</p>
        </div>
      </div>

      <h3 className="mt-4">Question Formation</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>To form a yes/no question in German, simply put the verb before the subject:</p>
          <p><strong>Statement:</strong> Du spielst Tennis. (You play tennis.)</p>
          <p><strong>Question:</strong> Spielst du Tennis? (Do you play tennis?)</p>
          
          <p className="mt-3"><strong>Statement:</strong> Ihr lernt Deutsch. (You learn German.)</p>
          <p><strong>Question:</strong> Lernt ihr Deutsch? (Do you learn German?)</p>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Note</h4>
        <p>In German, we don't use auxiliary verbs like "do" for questions as in English. Instead, we simply invert the word order.</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Conjugate the following verbs for the given subject:</p>
          <ol>
            <li>machen (ihr) - _______</li>
            <li>lernen (ich) - _______</li>
            <li>arbeiten (du) - _______</li>
            <li>spielen (er) - _______</li>
            <li>wohnen (wir) - _______</li>
          </ol>
          
          <p className="mt-3">Create questions from the following statements:</p>
          <ol>
            <li>Du trinkst Wasser. (You drink water.) → _______?</li>
            <li>Sie kochen Abendessen. (They cook dinner.) → _______?</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={4}
      title="Regular Verbs"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter4;
