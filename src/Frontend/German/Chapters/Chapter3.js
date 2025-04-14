  import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter3 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 3 of your German course! In this chapter, we'll learn about articles, pronouns, and basic sentence structure in German.</p>
      
      <h3 className="mt-4">Definite Articles (The)</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>In German, there are three grammatical genders: masculine, feminine, and neuter. Each gender has its own definite article.</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Gender</th>
                <th>Definite Article (The)</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Masculine</td>
                <td><strong>der</strong></td>
                <td>der Mann (the man)</td>
              </tr>
              <tr>
                <td>Feminine</td>
                <td><strong>die</strong></td>
                <td>die Frau (the woman)</td>
              </tr>
              <tr>
                <td>Neuter</td>
                <td><strong>das</strong></td>
                <td>das Kind (the child)</td>
              </tr>
              <tr>
                <td>Plural (all genders)</td>
                <td><strong>die</strong></td>
                <td>die Kinder (the children)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Indefinite Articles (A/An)</h3>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Gender</th>
                <th>Indefinite Article (A/An)</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Masculine</td>
                <td><strong>ein</strong></td>
                <td>ein Mann (a man)</td>
              </tr>
              <tr>
                <td>Feminine</td>
                <td><strong>eine</strong></td>
                <td>eine Frau (a woman)</td>
              </tr>
              <tr>
                <td>Neuter</td>
                <td><strong>ein</strong></td>
                <td>ein Kind (a child)</td>
              </tr>
              <tr>
                <td>Plural (all genders)</td>
                <td><strong>-</strong></td>
                <td>Kinder (children)</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-3 small">Note: There is no indefinite article for plural nouns in German, just like in English.</p>
        </div>
      </div>
      
      <h3 className="mt-4">Personal Pronouns</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>ich</strong> - I</p>
              <p><strong>du</strong> - you (informal singular)</p>
              <p><strong>er</strong> - he</p>
              <p><strong>sie</strong> - she</p>
              <p><strong>es</strong> - it</p>
            </div>
            <div className="col-md-6">
              <p><strong>wir</strong> - we</p>
              <p><strong>ihr</strong> - you (informal plural)</p>
              <p><strong>sie</strong> - they</p>
              <p><strong>Sie</strong> - you (formal singular and plural)</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Basic Sentence Structure</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>German follows a Subject-Verb-Object (SVO) word order in simple statements, similar to English:</p>
          
          <p><strong>Example:</strong></p>
          <p><strong>Ich lese ein Buch.</strong> - I read a book.</p>
          <p className="small text-muted">Subject (Ich) + Verb (lese) + Object (ein Buch)</p>
          
          <div className="mt-4">
            <p><strong>Important Note:</strong> In German, the verb is always in the second position in a simple statement.</p>
            <p>However, if you start the sentence with something other than the subject, the verb still comes second, and the subject moves to the third position:</p>
            
            <p><strong>Example:</strong></p>
            <p><strong>Heute lese ich ein Buch.</strong> - Today I read a book.</p>
            <p className="small text-muted">Time (Heute) + Verb (lese) + Subject (ich) + Object (ein Buch)</p>
          </div>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Cultural Note</h4>
        <p>In German, all nouns are capitalized, regardless of whether they're proper nouns or not. This is a distinct feature of German orthography.</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Complete the following sentences with the correct definite or indefinite article:</p>
          <ol>
            <li>_____ Buch ist interessant. (The book is interesting.)</li>
            <li>Ich habe _____ Auto. (I have a car.)</li>
            <li>_____ Frau spricht Deutsch. (The woman speaks German.)</li>
            <li>Das ist _____ Tisch. (That is a table.)</li>
            <li>_____ Kinder spielen im Garten. (The children play in the garden.)</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={3}
      title="Articles and Basic Sentence Structure"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter3;
