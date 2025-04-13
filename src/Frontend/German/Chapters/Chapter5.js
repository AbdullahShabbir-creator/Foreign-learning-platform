import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter5 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 5 of your German course! In this chapter, we'll learn about irregular verbs in German, including some of the most common ones you'll need in everyday conversation.</p>
      
      <h3 className="mt-4">Irregular Verbs</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Unlike regular verbs, irregular verbs change their stem vowel when conjugated. These are also called "strong verbs" in German.</p>
          
          <h5 className="mt-3">Example: fahren (to drive/go)</h5>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Subject</th>
                <th>Conjugation</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ich</td>
                <td><strong>fahre</strong></td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>du</td>
                <td><strong>fährst</strong></td>
                <td>a → ä</td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td><strong>fährt</strong></td>
                <td>a → ä</td>
              </tr>
              <tr>
                <td>wir</td>
                <td><strong>fahren</strong></td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>ihr</td>
                <td><strong>fahrt</strong></td>
                <td>Regular</td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td><strong>fahren</strong></td>
                <td>Regular</td>
              </tr>
            </tbody>
          </table>
          <p className="small mt-2">Note: The vowel change only happens in the 'du' and 'er/sie/es' forms.</p>
        </div>
      </div>

      <h3 className="mt-4">Common Irregular Verbs</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h5>sein (to be)</h5>
          <table className="table table-bordered mb-4">
            <tbody>
              <tr>
                <td>ich</td>
                <td><strong>bin</strong></td>
              </tr>
              <tr>
                <td>du</td>
                <td><strong>bist</strong></td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td><strong>ist</strong></td>
              </tr>
              <tr>
                <td>wir</td>
                <td><strong>sind</strong></td>
              </tr>
              <tr>
                <td>ihr</td>
                <td><strong>seid</strong></td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td><strong>sind</strong></td>
              </tr>
            </tbody>
          </table>

          <h5>haben (to have)</h5>
          <table className="table table-bordered mb-4">
            <tbody>
              <tr>
                <td>ich</td>
                <td><strong>habe</strong></td>
              </tr>
              <tr>
                <td>du</td>
                <td><strong>hast</strong></td>
              </tr>
              <tr>
                <td>er/sie/es</td>
                <td><strong>hat</strong></td>
              </tr>
              <tr>
                <td>wir</td>
                <td><strong>haben</strong></td>
              </tr>
              <tr>
                <td>ihr</td>
                <td><strong>habt</strong></td>
              </tr>
              <tr>
                <td>sie/Sie</td>
                <td><strong>haben</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h3 className="mt-4">More Irregular Verbs with Vowel Changes</h3>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Infinitive</th>
                <th>Meaning</th>
                <th>du form</th>
                <th>er/sie/es form</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>lesen</td>
                <td>to read</td>
                <td>du li<strong>e</strong>st</td>
                <td>er/sie/es li<strong>e</strong>st</td>
              </tr>
              <tr>
                <td>geben</td>
                <td>to give</td>
                <td>du g<strong>i</strong>bst</td>
                <td>er/sie/es g<strong>i</strong>bt</td>
              </tr>
              <tr>
                <td>nehmen</td>
                <td>to take</td>
                <td>du n<strong>i</strong>mmst</td>
                <td>er/sie/es n<strong>i</strong>mmt</td>
              </tr>
              <tr>
                <td>sprechen</td>
                <td>to speak</td>
                <td>du spr<strong>i</strong>chst</td>
                <td>er/sie/es spr<strong>i</strong>cht</td>
              </tr>
              <tr>
                <td>essen</td>
                <td>to eat</td>
                <td>du <strong>i</strong>sst</td>
                <td>er/sie/es <strong>i</strong>sst</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Modal Verbs</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Modal verbs are a special category of irregular verbs that modify the meaning of another verb.</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Verb</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>können</td>
                <td>can, to be able to</td>
                <td>Ich kann schwimmen. (I can swim.)</td>
              </tr>
              <tr>
                <td>müssen</td>
                <td>must, to have to</td>
                <td>Ich muss arbeiten. (I have to work.)</td>
              </tr>
              <tr>
                <td>wollen</td>
                <td>to want</td>
                <td>Ich will lernen. (I want to learn.)</td>
              </tr>
              <tr>
                <td>sollen</td>
                <td>should, ought to</td>
                <td>Ich soll studieren. (I should study.)</td>
              </tr>
              <tr>
                <td>dürfen</td>
                <td>may, to be allowed to</td>
                <td>Ich darf gehen. (I am allowed to go.)</td>
              </tr>
              <tr>
                <td>mögen</td>
                <td>to like</td>
                <td>Ich mag Kaffee. (I like coffee.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="alert alert-warning mt-4">
        <h4>Important Note</h4>
        <p>When using modal verbs with another verb, the second verb goes to the end of the sentence in its infinitive form:</p>
        <p><strong>Ich kann gut Deutsch sprechen.</strong> (I can speak German well.)</p>
        <p><strong>Er muss heute arbeiten.</strong> (He has to work today.)</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Fill in the blanks with the correct form of the verb:</p>
          <ol>
            <li>Ich _____ in Berlin. (sein - to be)</li>
            <li>Du _____ einen Bruder. (haben - to have)</li>
            <li>Er _____ ein Buch. (lesen - to read)</li>
            <li>Wir _____ nach Hause. (fahren - to drive/go)</li>
            <li>_____ du Deutsch? (sprechen - to speak)</li>
          </ol>
          
          <p className="mt-3">Translate the following sentences:</p>
          <ol>
            <li>I can speak German.</li>
            <li>She wants to go to Berlin.</li>
            <li>We must study today.</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={5}
      title="Irregular Verbs"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter5;
