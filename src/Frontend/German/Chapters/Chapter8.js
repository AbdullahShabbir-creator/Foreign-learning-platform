import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter8 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 8 of your German course! In this chapter, we'll learn about prepositions in German and their uses with different cases.</p>
      
      <h3 className="mt-4">Types of Prepositions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>German prepositions can be categorized by the grammatical case they require:</p>
          <ul>
            <li>Accusative prepositions</li>
            <li>Dative prepositions</li>
            <li>Two-way prepositions (can take accusative or dative)</li>
            <li>Genitive prepositions</li>
          </ul>
        </div>
      </div>

      <h3 className="mt-4">Accusative Prepositions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>These prepositions are always followed by a noun or pronoun in the accusative case:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Preposition</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>durch</td>
                <td>through</td>
                <td>Ich gehe durch den Park. (I walk through the park.)</td>
              </tr>
              <tr>
                <td>für</td>
                <td>for</td>
                <td>Das ist für dich. (This is for you.)</td>
              </tr>
              <tr>
                <td>gegen</td>
                <td>against</td>
                <td>Er lehnt gegen die Wand. (He leans against the wall.)</td>
              </tr>
              <tr>
                <td>ohne</td>
                <td>without</td>
                <td>Ich gehe ohne meinen Freund. (I go without my friend.)</td>
              </tr>
              <tr>
                <td>um</td>
                <td>around</td>
                <td>Wir laufen um den See. (We run around the lake.)</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-3">
            <p>Remember, in the accusative case, only the masculine article changes:</p>
            <p><strong>Masculine:</strong> der → den</p>
            <p><strong>Feminine:</strong> die → die (no change)</p>
            <p><strong>Neuter:</strong> das → das (no change)</p>
            <p><strong>Plural:</strong> die → die (no change)</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Dative Prepositions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>These prepositions are always followed by a noun or pronoun in the dative case:</p>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Preposition</th>
                <th>Meaning</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>aus</td>
                <td>from, out of</td>
                <td>Ich komme aus Deutschland. (I come from Germany.)</td>
              </tr>
              <tr>
                <td>bei</td>
                <td>at, with</td>
                <td>Ich wohne bei meinen Eltern. (I live with my parents.)</td>
              </tr>
              <tr>
                <td>mit</td>
                <td>with</td>
                <td>Ich fahre mit dem Bus. (I travel by bus.)</td>
              </tr>
              <tr>
                <td>nach</td>
                <td>after, to (for places)</td>
                <td>Ich fahre nach Berlin. (I go to Berlin.)</td>
              </tr>
              <tr>
                <td>von</td>
                <td>from, by</td>
                <td>Das ist ein Geschenk von meiner Mutter. (That's a gift from my mother.)</td>
              </tr>
              <tr>
                <td>zu</td>
                <td>to</td>
                <td>Ich gehe zu meinem Freund. (I go to my friend's.)</td>
              </tr>
              <tr>
                <td>seit</td>
                <td>since, for</td>
                <td>Ich lerne seit drei Jahren Deutsch. (I've been learning German for three years.)</td>
              </tr>
            </tbody>
          </table>
          
          <div className="mt-3">
            <p>Remember the dative case changes:</p>
            <p><strong>Masculine:</strong> der → dem</p>
            <p><strong>Feminine:</strong> die → der</p>
            <p><strong>Neuter:</strong> das → dem</p>
            <p><strong>Plural:</strong> die → den + n (add -n to plural nouns)</p>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Two-way Prepositions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>These prepositions can take either the accusative or dative case, depending on the context:</p>
          <ul>
            <li>Use the <strong>accusative</strong> case when indicating <strong>motion or direction</strong> (answering the question "where to?")</li>
            <li>Use the <strong>dative</strong> case when indicating <strong>location or position</strong> (answering the question "where?")</li>
          </ul>
          
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Preposition</th>
                <th>Meaning</th>
                <th>Accusative Example (Motion)</th>
                <th>Dative Example (Location)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>an</td>
                <td>at, on, to</td>
                <td>Ich hänge das Bild an die Wand. <br/>(I hang the picture on the wall.)</td>
                <td>Das Bild hängt an der Wand. <br/>(The picture hangs on the wall.)</td>
              </tr>
              <tr>
                <td>auf</td>
                <td>on, onto</td>
                <td>Ich lege das Buch auf den Tisch. <br/>(I put the book onto the table.)</td>
                <td>Das Buch liegt auf dem Tisch. <br/>(The book is on the table.)</td>
              </tr>
              <tr>
                <td>in</td>
                <td>in, into</td>
                <td>Ich gehe in die Stadt. <br/>(I go into the city.)</td>
                <td>Ich bin in der Stadt. <br/>(I am in the city.)</td>
              </tr>
              <tr>
                <td>hinter</td>
                <td>behind</td>
                <td>Der Hund läuft hinter den Baum. <br/>(The dog runs behind the tree.)</td>
                <td>Der Hund sitzt hinter dem Baum. <br/>(The dog sits behind the tree.)</td>
              </tr>
              <tr>
                <td>über</td>
                <td>over, above</td>
                <td>Ich hänge die Lampe über den Tisch. <br/>(I hang the lamp above the table.)</td>
                <td>Die Lampe hängt über dem Tisch. <br/>(The lamp hangs above the table.)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Memory Tip</h4>
        <p>Remember this mnemonic for the two-way prepositions: <strong>WODAN</strong> - Wo = where (dative for location), Wohin = where to (accusative for motion)</p>
        <p>Or you can remember it this way: If there is action/movement, use the accusative. If it's just describing position, use the dative.</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Fill in the blanks with the correct preposition and article:</p>
          <ol>
            <li>Ich fahre _____ _____ Bahnhof. (I drive to the train station.) (zu, dem)</li>
            <li>Das Bild hängt _____ _____ Wand. (The picture hangs on the wall.) (an, der)</li>
            <li>Sie geht _____ _____ Park. (She goes into the park.) (in, den)</li>
            <li>Die Katze springt _____ _____ Tisch. (The cat jumps onto the table.) (auf, den)</li>
            <li>Er kommt _____ _____ Schweiz. (He comes from Switzerland.) (aus, der)</li>
          </ol>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={8}
      title="Prepositions"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter8;
