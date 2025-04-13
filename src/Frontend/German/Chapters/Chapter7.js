import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter7 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 7 of your German course! In this chapter, we'll learn about cases in German grammar - a fundamental aspect of the language.</p>
      
      <h3 className="mt-4">The Four Cases in German</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>German has four grammatical cases that indicate the function of nouns and pronouns in a sentence:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Case</th>
                <th>Function</th>
                <th>Question Words</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nominative</strong></td>
                <td>Subject of the sentence</td>
                <td>Wer? (Who?)</td>
              </tr>
              <tr>
                <td><strong>Accusative</strong></td>
                <td>Direct object</td>
                <td>Wen? (Whom?)</td>
              </tr>
              <tr>
                <td><strong>Dative</strong></td>
                <td>Indirect object</td>
                <td>Wem? (To whom?)</td>
              </tr>
              <tr>
                <td><strong>Genitive</strong></td>
                <td>Possession</td>
                <td>Wessen? (Whose?)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Nominative Case</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The nominative case is used for the subject of a sentence - the person or thing performing the action.</p>
          
          <h5 className="mt-3">Definite Articles in Nominative Case:</h5>
          <p><strong>Masculine:</strong> der</p>
          <p><strong>Feminine:</strong> die</p>
          <p><strong>Neuter:</strong> das</p>
          <p><strong>Plural:</strong> die</p>
          
          <div className="mt-3">
            <p><strong>Example:</strong></p>
            <p><strong>Der Mann</strong> liest ein Buch. (<strong>The man</strong> reads a book.)</p>
            <p><strong>Die Frau</strong> trinkt Kaffee. (<strong>The woman</strong> drinks coffee.)</p>
            <p><strong>Das Kind</strong> spielt. (<strong>The child</strong> plays.)</p>
            <p><strong>Die Kinder</strong> laufen. (<strong>The children</strong> run.)</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Accusative Case</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The accusative case is used for the direct object of a sentence - the person or thing directly receiving the action of the verb.</p>
          
          <h5 className="mt-3">Definite Articles in Accusative Case:</h5>
          <p><strong>Masculine:</strong> den (changes from der)</p>
          <p><strong>Feminine:</strong> die (unchanged)</p>
          <p><strong>Neuter:</strong> das (unchanged)</p>
          <p><strong>Plural:</strong> die (unchanged)</p>
          
          <div className="mt-3">
            <p><strong>Example:</strong></p>
            <p>Ich sehe <strong>den Mann</strong>. (I see <strong>the man</strong>.)</p>
            <p>Ich sehe <strong>die Frau</strong>. (I see <strong>the woman</strong>.)</p>
            <p>Ich sehe <strong>das Kind</strong>. (I see <strong>the child</strong>.)</p>
            <p>Ich sehe <strong>die Kinder</strong>. (I see <strong>the children</strong>.)</p>
          </div>
          
          <h5 className="mt-4">Common Accusative Verbs:</h5>
          <p>These verbs take a direct object in the accusative case:</p>
          <ul>
            <li>haben (to have)</li>
            <li>sehen (to see)</li>
            <li>kaufen (to buy)</li>
            <li>lieben (to love)</li>
            <li>brauchen (to need)</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Dative Case</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The dative case is used for the indirect object of a sentence - the person or thing indirectly affected by the action of the verb.</p>
          
          <h5 className="mt-3">Definite Articles in Dative Case:</h5>
          <p><strong>Masculine:</strong> dem (changes from der)</p>
          <p><strong>Feminine:</strong> der (changes from die)</p>
          <p><strong>Neuter:</strong> dem (changes from das)</p>
          <p><strong>Plural:</strong> den + n (changes from die)</p>
          
          <div className="mt-3">
            <p><strong>Example:</strong></p>
            <p>Ich gebe <strong>dem Mann</strong> ein Buch. (I give <strong>the man</strong> a book.)</p>
            <p>Ich gebe <strong>der Frau</strong> einen Kaffee. (I give <strong>the woman</strong> a coffee.)</p>
            <p>Ich gebe <strong>dem Kind</strong> ein Spielzeug. (I give <strong>the child</strong> a toy.)</p>
            <p>Ich gebe <strong>den Kindern</strong> Süßigkeiten. (I give <strong>the children</strong> sweets.)</p>
          </div>
          
          <h5 className="mt-4">Common Dative Verbs:</h5>
          <p>These verbs take an object in the dative case:</p>
          <ul>
            <li>helfen (to help)</li>
            <li>danken (to thank)</li>
            <li>antworten (to answer)</li>
            <li>folgen (to follow)</li>
            <li>gehören (to belong)</li>
          </ul>
          
          <p className="mt-3"><strong>Example:</strong> Ich helfe <strong>dem Mann</strong>. (I help <strong>the man</strong>.)</p>
        </div>
      </div>

      <div className="alert alert-warning mt-4">
        <h4>Important Note</h4>
        <p>Some German prepositions always take a specific case. For example:</p>
        <ul>
          <li><strong>Accusative prepositions:</strong> durch (through), für (for), gegen (against), ohne (without)</li>
          <li><strong>Dative prepositions:</strong> aus (out of), bei (at), mit (with), nach (after), von (from), zu (to)</li>
        </ul>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Fill in the blanks with the correct article in the appropriate case:</p>
          <ol>
            <li>_____ Mann liest ein Buch. (The man reads a book.)</li>
            <li>Ich sehe _____ Frau. (I see the woman.)</li>
            <li>Er gibt _____ Kind einen Ball. (He gives the child a ball.)</li>
            <li>Ich helfe _____ Kindern. (I help the children.)</li>
            <li>_____ Lehrer erklärt die Grammatik. (The teacher explains the grammar.)</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={7}
      title="German Cases"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter7;
