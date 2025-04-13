import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter3 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 3! In this chapter, we'll learn about numbers and counting in Chinese.</p>
      
      <h3 className="mt-4">Basic Numbers 1-10</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>一 (Yī)</strong> - One</p>
              <p><strong>二 (Èr)</strong> - Two</p>
              <p><strong>三 (Sān)</strong> - Three</p>
              <p><strong>四 (Sì)</strong> - Four</p>
              <p><strong>五 (Wǔ)</strong> - Five</p>
            </div>
            <div className="col-md-6">
              <p><strong>六 (Liù)</strong> - Six</p>
              <p><strong>七 (Qī)</strong> - Seven</p>
              <p><strong>八 (Bā)</strong> - Eight</p>
              <p><strong>九 (Jiǔ)</strong> - Nine</p>
              <p><strong>十 (Shí)</strong> - Ten</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Counting Beyond 10</h3>
      <p>Chinese has a very logical number system. Once you know 1-10, you can easily count to 99:</p>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>十一 (Shí yī)</strong> - Eleven (literally "ten one")</p>
          <p><strong>十二 (Shí èr)</strong> - Twelve (literally "ten two")</p>
          <p><strong>二十 (Èr shí)</strong> - Twenty (literally "two ten")</p>
          <p><strong>二十一 (Èr shí yī)</strong> - Twenty-one (literally "two ten one")</p>
          <p><strong>五十八 (Wǔ shí bā)</strong> - Fifty-eight (literally "five ten eight")</p>
        </div>
      </div>
      
      <h3 className="mt-4">Practical Usage</h3>
      <div className="alert alert-info">
        <h4>Phone Numbers</h4>
        <p>In Chinese, phone numbers are typically read digit by digit.</p>
        <p>Example: 123-4567 would be read as:</p>
        <p><strong>一二三，四五六七</strong> (Yī èr sān, sì wǔ liù qī)</p>
      </div>

      <h3 className="mt-4">Practice Exercise</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Try counting from 1 to 20 in Chinese, saying each number out loud.</p>
          <p>Then try to say these numbers:</p>
          <ul>
            <li>25 (Èr shí wǔ)</li>
            <li>37 (Sān shí qī)</li>
            <li>42 (Sì shí èr)</li>
            <li>56 (Wǔ shí liù)</li>
            <li>99 (Jiǔ shí jiǔ)</li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={3}
      title="Numbers and Counting"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter3;
