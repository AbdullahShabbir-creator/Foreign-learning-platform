import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter1 = () => {
  const chapterContent = (
    <>
      <p>Welcome to your Chinese language learning journey! In this chapter, we'll introduce you to the basics of Mandarin Chinese and its pronunciation system.</p>
      
      <h3 className="mt-4">Introduction to Chinese Characters and Pinyin</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Chinese uses a character-based writing system, but we'll start with <strong>Pinyin</strong> - the official romanization system that uses the Latin alphabet to represent Chinese sounds.</p>
          
          <div className="alert alert-info">
            <h5>Key Concepts</h5>
            <ul>
              <li><strong>Characters (汉字 / Hànzì)</strong> - The written symbols of Chinese</li>
              <li><strong>Pinyin</strong> - The romanization system that helps with pronunciation</li>
              <li><strong>Tones</strong> - Chinese is a tonal language with four main tones plus a neutral tone</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="mt-4">The Four Tones of Mandarin</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p>Tones are essential in Chinese as they change the meaning of words:</p>
          <table className="table">
            <thead>
              <tr>
                <th>Tone</th>
                <th>Mark</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st Tone</td>
                <td>ˉ (mā)</td>
                <td>High and level</td>
                <td>妈 (mā) - mother</td>
              </tr>
              <tr>
                <td>2nd Tone</td>
                <td>ˊ (má)</td>
                <td>Rising</td>
                <td>麻 (má) - hemp</td>
              </tr>
              <tr>
                <td>3rd Tone</td>
                <td>ˇ (mǎ)</td>
                <td>Falling then rising</td>
                <td>马 (mǎ) - horse</td>
              </tr>
              <tr>
                <td>4th Tone</td>
                <td>ˋ (mà)</td>
                <td>Falling</td>
                <td>骂 (mà) - scold</td>
              </tr>
              <tr>
                <td>Neutral Tone</td>
                <td>(ma)</td>
                <td>Light and short</td>
                <td>吗 (ma) - question particle</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <h3 className="mt-4">Basic Greetings and Introductions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Chinese Characters</th>
                <th>Pinyin</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>你好</td>
                <td>Nǐ hǎo</td>
                <td>Hello</td>
              </tr>
              <tr>
                <td>早上好</td>
                <td>Zǎoshang hǎo</td>
                <td>Good morning</td>
              </tr>
              <tr>
                <td>下午好</td>
                <td>Xiàwǔ hǎo</td>
                <td>Good afternoon</td>
              </tr>
              <tr>
                <td>晚上好</td>
                <td>Wǎnshang hǎo</td>
                <td>Good evening</td>
              </tr>
              <tr>
                <td>再见</td>
                <td>Zàijiàn</td>
                <td>Goodbye</td>
              </tr>
              <tr>
                <td>谢谢</td>
                <td>Xièxie</td>
                <td>Thank you</td>
              </tr>
              <tr>
                <td>不客气</td>
                <td>Bú kèqi</td>
                <td>You're welcome</td>
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
            <li><strong>我叫...</strong> (Wǒ jiào...) - My name is...</li>
            <li><strong>我是...</strong> (Wǒ shì...) - I am...</li>
            <li><strong>你叫什么名字?</strong> (Nǐ jiào shénme míngzi?) - What is your name?</li>
            <li><strong>你是哪国人?</strong> (Nǐ shì nǎ guó rén?) - What country are you from?</li>
            <li><strong>我是美国人</strong> (Wǒ shì Měiguó rén) - I am American</li>
            <li><strong>认识你很高兴</strong> (Rènshi nǐ hěn gāoxìng) - Nice to meet you</li>
          </ul>
          
          <div className="alert alert-success mt-3">
            <h5>Example Conversation</h5>
            <p><strong>Person A:</strong> 你好! 我叫李明。你叫什么名字?<br />
            <strong>Person B:</strong> 你好! 我叫安娜。认识你很高兴!<br />
            <strong>Person A:</strong> 你是哪国人?<br />
            <strong>Person B:</strong> 我是美国人。你呢?<br />
            <strong>Person A:</strong> 我是中国人。</p>
          </div>
        </div>
      </div>
      
      <div className="alert alert-primary mt-5">
        <h4>Chapter Summary</h4>
        <p>In this chapter, you've learned:</p>
        <ul>
          <li>The basics of Chinese characters and Pinyin</li>
          <li>The four tones of Mandarin Chinese</li>
          <li>Basic greetings and introductions</li>
          <li>How to introduce yourself</li>
        </ul>
        <p>Continue to Chapter 2 to learn about basic Chinese grammar and sentence structure.</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={1}
      title="Introduction to Chinese"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter1;
