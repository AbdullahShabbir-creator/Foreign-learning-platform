import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter2 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 2 of your Chinese learning journey! In this chapter, we'll learn about introductions and basic conversation.</p>
      
      <h3 className="mt-4">Self Introduction</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>我叫... (Wǒ jiào...)</strong> - My name is...</p>
          <p><strong>我是... (Wǒ shì...)</strong> - I am...</p>
          <p><strong>很高兴认识你 (Hěn gāoxìng rènshí nǐ)</strong> - Nice to meet you</p>
          <p><strong>请问，你叫什么名字？ (Qǐngwèn, nǐ jiào shénme míngzì?)</strong> - May I ask, what is your name?</p>
        </div>
      </div>

      <h3 className="mt-4">Basic Conversation</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>A: 你好！(Nǐ hǎo!)</strong> - Hello!</p>
          <p><strong>B: 你好！(Nǐ hǎo!)</strong> - Hello!</p>
          <p><strong>A: 我叫李明。你叫什么名字？(Wǒ jiào Lǐ Míng. Nǐ jiào shénme míngzì?)</strong> - My name is Li Ming. What's your name?</p>
          <p><strong>B: 我叫王红。很高兴认识你！(Wǒ jiào Wáng Hóng. Hěn gāoxìng rènshí nǐ!)</strong> - My name is Wang Hong. Nice to meet you!</p>
          <p><strong>A: 我也很高兴认识你！(Wǒ yě hěn gāoxìng rènshí nǐ!)</strong> - I'm also pleased to meet you!</p>
        </div>
      </div>
      
      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>In Chinese culture, it's common to state your surname first, followed by your given name. For example, in the name "Wang Hong," "Wang" is the surname and "Hong" is the given name.</p>
      </div>

      <h3 className="mt-4">Key Vocabulary</h3>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Chinese</th>
            <th>Pinyin</th>
            <th>English</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>名字</td>
            <td>míngzì</td>
            <td>name</td>
          </tr>
          <tr>
            <td>认识</td>
            <td>rènshí</td>
            <td>to know, to meet</td>
          </tr>
          <tr>
            <td>高兴</td>
            <td>gāoxìng</td>
            <td>happy</td>
          </tr>
          <tr>
            <td>请问</td>
            <td>qǐngwèn</td>
            <td>may I ask (polite form to ask a question)</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={2}
      title="Introductions and Basic Conversation"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter2;
