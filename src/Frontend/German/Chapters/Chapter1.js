import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter1 = () => {
  const chapterContent = (
    <>
      <p>Welcome to your German language learning journey! In this chapter, we'll introduce you to the basics of German language and pronunciation.</p>
      
      <h3 className="mt-4">German Alphabet and Pronunciation</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>The German alphabet is similar to English but includes additional characters:</p>
          <ul>
            <li><strong>Umlauts</strong>: ä, ö, ü - These modify the pronunciation of vowels</li>
            <li><strong>Eszett</strong>: ß - A special character that represents a double 's' sound</li>
          </ul>
          <div className="alert alert-info">
            <h5>Pronunciation Tips</h5>
            <ul>
              <li><strong>ch</strong> - Pronounced like the 'h' in 'huge' or the Scottish 'ch' in 'loch'</li>
              <li><strong>r</strong> - Often rolled or pronounced from the back of the throat</li>
              <li><strong>w</strong> - Pronounced like an English 'v'</li>
              <li><strong>v</strong> - Often pronounced like an English 'f'</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Basic Greetings and Introductions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>German</th>
                <th>English</th>
                <th>Pronunciation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hallo</td>
                <td>Hello</td>
                <td>HAH-loh</td>
              </tr>
              <tr>
                <td>Guten Morgen</td>
                <td>Good morning</td>
                <td>GOO-ten MOR-gen</td>
              </tr>
              <tr>
                <td>Guten Tag</td>
                <td>Good day</td>
                <td>GOO-ten tahk</td>
              </tr>
              <tr>
                <td>Guten Abend</td>
                <td>Good evening</td>
                <td>GOO-ten AH-bent</td>
              </tr>
              <tr>
                <td>Auf Wiedersehen</td>
                <td>Goodbye</td>
                <td>owf VEE-der-zay-en</td>
              </tr>
              <tr>
                <td>Tschüss</td>
                <td>Bye (informal)</td>
                <td>chüss</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h3 className="mt-4">Introducing Yourself</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Here are some essential phrases for introducing yourself:</p>
          <ul>
            <li><strong>Ich heiße...</strong> - My name is...</li>
            <li><strong>Ich bin...</strong> - I am...</li>
            <li><strong>Wie heißen Sie?</strong> - What is your name? (formal)</li>
            <li><strong>Wie heißt du?</strong> - What is your name? (informal)</li>
            <li><strong>Woher kommen Sie?</strong> - Where are you from? (formal)</li>
            <li><strong>Woher kommst du?</strong> - Where are you from? (informal)</li>
            <li><strong>Ich komme aus...</strong> - I am from...</li>
          </ul>
          
          <div className="alert alert-success mt-3">
            <h5>Example Conversation</h5>
            <p><strong>Person A:</strong> Guten Tag! Ich heiße Maria. Wie heißen Sie?<br />
            <strong>Person B:</strong> Hallo Maria! Ich bin Thomas. Woher kommen Sie?<br />
            <strong>Person A:</strong> Ich komme aus den USA. Und Sie?<br />
            <strong>Person B:</strong> Ich komme aus Deutschland.</p>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Numbers 1-20</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li><strong>1</strong> - eins (eyns)</li>
                <li><strong>2</strong> - zwei (tsvey)</li>
                <li><strong>3</strong> - drei (dry)</li>
                <li><strong>4</strong> - vier (feer)</li>
                <li><strong>5</strong> - fünf (fuenf)</li>
                <li><strong>6</strong> - sechs (zeks)</li>
                <li><strong>7</strong> - sieben (ZEE-ben)</li>
                <li><strong>8</strong> - acht (ahkt)</li>
                <li><strong>9</strong> - neun (noyn)</li>
                <li><strong>10</strong> - zehn (tsayn)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li><strong>11</strong> - elf (elf)</li>
                <li><strong>12</strong> - zwölf (tsvolf)</li>
                <li><strong>13</strong> - dreizehn (DRY-tsayn)</li>
                <li><strong>14</strong> - vierzehn (FEER-tsayn)</li>
                <li><strong>15</strong> - fünfzehn (FUENF-tsayn)</li>
                <li><strong>16</strong> - sechzehn (ZEKH-tsayn)</li>
                <li><strong>17</strong> - siebzehn (ZEEP-tsayn)</li>
                <li><strong>18</strong> - achtzehn (AHKT-tsayn)</li>
                <li><strong>19</strong> - neunzehn (NOYN-tsayn)</li>
                <li><strong>20</strong> - zwanzig (TSVAN-tsikh)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="alert alert-primary mt-5">
        <h4>Chapter Summary</h4>
        <p>In this chapter, you've learned:</p>
        <ul>
          <li>The German alphabet and special characters</li>
          <li>Basic greetings and farewells</li>
          <li>How to introduce yourself</li>
          <li>Numbers from 1 to 20</li>
        </ul>
        <p>Continue to Chapter 2 to learn about German articles, nouns, and basic sentence structure.</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={1}
      title="Introduction to German"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter1;
