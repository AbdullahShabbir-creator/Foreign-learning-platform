import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter2 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 2 of your German language course! In this chapter, we'll learn about numbers and counting in German.</p>
      
      <h3 className="mt-4">Basic Numbers 1-20</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>1</strong> - eins</p>
              <p><strong>2</strong> - zwei</p>
              <p><strong>3</strong> - drei</p>
              <p><strong>4</strong> - vier</p>
              <p><strong>5</strong> - fünf</p>
              <p><strong>6</strong> - sechs</p>
              <p><strong>7</strong> - sieben</p>
              <p><strong>8</strong> - acht</p>
              <p><strong>9</strong> - neun</p>
              <p><strong>10</strong> - zehn</p>
            </div>
            <div className="col-md-6">
              <p><strong>11</strong> - elf</p>
              <p><strong>12</strong> - zwölf</p>
              <p><strong>13</strong> - dreizehn</p>
              <p><strong>14</strong> - vierzehn</p>
              <p><strong>15</strong> - fünfzehn</p>
              <p><strong>16</strong> - sechzehn</p>
              <p><strong>17</strong> - siebzehn</p>
              <p><strong>18</strong> - achtzehn</p>
              <p><strong>19</strong> - neunzehn</p>
              <p><strong>20</strong> - zwanzig</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Numbers 21-100</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>In German, the order of numbers is reversed for numbers from 21 to 99. The ones digit comes first, followed by "und" (and), and then the tens digit.</p>
          
          <div className="mt-3">
            <p><strong>21</strong> - einundzwanzig (literally "one and twenty")</p>
            <p><strong>32</strong> - zweiunddreißig (literally "two and thirty")</p>
            <p><strong>45</strong> - fünfundvierzig (literally "five and forty")</p>
            <p><strong>67</strong> - siebenundsechzig (literally "seven and sixty")</p>
            <p><strong>99</strong> - neunundneunzig (literally "nine and ninety")</p>
          </div>
          
          <p className="mt-3">For multiples of 10:</p>
          <div className="row">
            <div className="col-md-6">
              <p><strong>30</strong> - dreißig</p>
              <p><strong>40</strong> - vierzig</p>
              <p><strong>50</strong> - fünfzig</p>
            </div>
            <div className="col-md-6">
              <p><strong>60</strong> - sechzig</p>
              <p><strong>70</strong> - siebzig</p>
              <p><strong>80</strong> - achtzig</p>
              <p><strong>90</strong> - neunzig</p>
            </div>
          </div>
          
          <p className="mt-3"><strong>100</strong> - (ein)hundert</p>
        </div>
      </div>
      
      <h3 className="mt-4">Ordinal Numbers</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Ordinal numbers (first, second, third, etc.) are formed by adding "-te" to the numbers 1-19 and "-ste" to numbers 20 and above.</p>
          
          <div className="row">
            <div className="col-md-6">
              <p><strong>1st</strong> - erste</p>
              <p><strong>2nd</strong> - zweite</p>
              <p><strong>3rd</strong> - dritte</p>
              <p><strong>4th</strong> - vierte</p>
              <p><strong>5th</strong> - fünfte</p>
            </div>
            <div className="col-md-6">
              <p><strong>20th</strong> - zwanzigste</p>
              <p><strong>21st</strong> - einundzwanzigste</p>
              <p><strong>30th</strong> - dreißigste</p>
              <p><strong>100th</strong> - hundertste</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Practical Usage</h3>
      <div className="card mb-4">
        <div className="card-body">
          <h4>Telling Time</h4>
          <p><strong>Es ist ein Uhr.</strong> - It's 1 o'clock.</p>
          <p><strong>Es ist zwei Uhr.</strong> - It's 2 o'clock.</p>
          <p><strong>Es ist halb zwei.</strong> - It's half past one. (Literally "half two")</p>
          <p><strong>Es ist Viertel vor drei.</strong> - It's quarter to three.</p>
          <p><strong>Es ist Viertel nach vier.</strong> - It's quarter past four.</p>
          
          <h4 className="mt-3">Prices</h4>
          <p><strong>Das kostet fünf Euro.</strong> - That costs five euros.</p>
          <p><strong>Das kostet zwei Euro fünfzig.</strong> - That costs €2.50.</p>
        </div>
      </div>

      <div className="alert alert-info mt-4">
        <h4>Cultural Note</h4>
        <p>In German-speaking countries, when indicating numbers with fingers, start counting with your thumb as 1, rather than the index finger as in English-speaking countries.</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="alert alert-success">
        <p>Practice saying the following in German:</p>
        <ol>
          <li>Your age</li>
          <li>Your phone number</li>
          <li>Your birthday (day and month)</li>
          <li>The current time</li>
          <li>The price of something you bought recently</li>
        </ol>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={2}
      title="Numbers and Counting"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter2;
