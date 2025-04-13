import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter6 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 6 of your German course! In this chapter, we'll learn about adjectives and adverbs in German.</p>
      
      <h3 className="mt-4">Adjectives in German</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Adjectives are words that describe or modify nouns. In German, adjectives have different forms depending on:</p>
          <ul>
            <li>Gender of the noun (masculine, feminine, neuter)</li>
            <li>Case (nominative, accusative, dative, genitive)</li>
            <li>Whether they follow a definite article, indefinite article, or no article</li>
          </ul>
          
          <h5 className="mt-3">Common Adjectives</h5>
          <div className="row">
            <div className="col-md-4">
              <p><strong>groß</strong> - big, tall</p>
              <p><strong>klein</strong> - small</p>
              <p><strong>alt</strong> - old</p>
              <p><strong>jung</strong> - young</p>
            </div>
            <div className="col-md-4">
              <p><strong>schön</strong> - beautiful</p>
              <p><strong>hässlich</strong> - ugly</p>
              <p><strong>gut</strong> - good</p>
              <p><strong>schlecht</strong> - bad</p>
            </div>
            <div className="col-md-4">
              <p><strong>neu</strong> - new</p>
              <p><strong>interessant</strong> - interesting</p>
              <p><strong>langweilig</strong> - boring</p>
              <p><strong>schwer</strong> - difficult</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Predicative Adjectives</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Predicative adjectives come after the verb (often after forms of "sein" - to be) and do not change their form:</p>
          
          <p><strong>Das Haus ist groß.</strong> - The house is big.</p>
          <p><strong>Die Frau ist schön.</strong> - The woman is beautiful.</p>
          <p><strong>Der Film ist interessant.</strong> - The movie is interesting.</p>
          <p><strong>Die Kinder sind klein.</strong> - The children are small.</p>
        </div>
      </div>
      
      <h3 className="mt-4">Attributive Adjectives with Definite Articles</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>When adjectives come before a noun (attributive use) and follow a definite article (der, die, das, die), they take these endings in the nominative case:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Gender</th>
                <th>Definite Article</th>
                <th>Adjective Ending</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Masculine</td>
                <td>der</td>
                <td>-e</td>
                <td>der gut<strong>e</strong> Mann</td>
              </tr>
              <tr>
                <td>Feminine</td>
                <td>die</td>
                <td>-e</td>
                <td>die schön<strong>e</strong> Frau</td>
              </tr>
              <tr>
                <td>Neuter</td>
                <td>das</td>
                <td>-e</td>
                <td>das groß<strong>e</strong> Haus</td>
              </tr>
              <tr>
                <td>Plural</td>
                <td>die</td>
                <td>-en</td>
                <td>die klein<strong>en</strong> Kinder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Attributive Adjectives with Indefinite Articles</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>When adjectives come before a noun and follow an indefinite article (ein, eine) or possessive pronoun (mein, dein, etc.), they take these endings in the nominative case:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Gender</th>
                <th>Indefinite Article</th>
                <th>Adjective Ending</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Masculine</td>
                <td>ein</td>
                <td>-er</td>
                <td>ein gut<strong>er</strong> Mann</td>
              </tr>
              <tr>
                <td>Feminine</td>
                <td>eine</td>
                <td>-e</td>
                <td>eine schön<strong>e</strong> Frau</td>
              </tr>
              <tr>
                <td>Neuter</td>
                <td>ein</td>
                <td>-es</td>
                <td>ein groß<strong>es</strong> Haus</td>
              </tr>
              <tr>
                <td>Plural</td>
                <td>(keine)</td>
                <td>-en</td>
                <td>keine klein<strong>en</strong> Kinder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="mt-4">Adverbs</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>In German, adverbs describe verbs, adjectives, or other adverbs. Unlike in English, German adverbs have the same form as adjectives:</p>
          
          <p><strong>Er spricht schnell.</strong> - He speaks quickly.</p>
          <p><strong>Sie singt schön.</strong> - She sings beautifully.</p>
          <p><strong>Das Kind läuft langsam.</strong> - The child runs slowly.</p>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Cultural Note</h4>
        <p>In German culture, directness is valued, and this is reflected in language use. Germans often use adjectives in a more straightforward manner than English speakers might be used to. While in English, you might soften criticism with qualifiers, German speakers might be more direct in their descriptions.</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Add the correct adjective endings in these sentences:</p>
          <ol>
            <li>Das ist ein groß___ Haus. (This is a big house.)</li>
            <li>Der alt___ Mann liest ein Buch. (The old man reads a book.)</li>
            <li>Ich habe eine neu___ Tasche. (I have a new bag.)</li>
            <li>Die klein___ Kinder spielen im Garten. (The small children play in the garden.)</li>
            <li>Wir haben ein interessant___ Buch gelesen. (We read an interesting book.)</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={6}
      title="Adjectives and Adverbs"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter6;
