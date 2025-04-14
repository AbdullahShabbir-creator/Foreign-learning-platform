import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter6 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 6! In this chapter, we'll learn about time expressions and scheduling in Chinese.</p>
      
      <h3 className="mt-4">Days of the Week</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>星期一 (Xīngqī yī)</strong> - Monday</p>
          <p><strong>星期二 (Xīngqī èr)</strong> - Tuesday</p>
          <p><strong>星期三 (Xīngqī sān)</strong> - Wednesday</p>
          <p><strong>星期四 (Xīngqī sì)</strong> - Thursday</p>
          <p><strong>星期五 (Xīngqī wǔ)</strong> - Friday</p>
          <p><strong>星期六 (Xīngqī liù)</strong> - Saturday</p>
          <p><strong>星期日/星期天 (Xīngqī rì/Xīngqī tiān)</strong> - Sunday</p>
        </div>
      </div>

      <h3 className="mt-4">Telling Time</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>...点 (...diǎn)</strong> - ... o'clock</p>
          <p><strong>...分 (...fēn)</strong> - ... minutes</p>
          <p><strong>上午 (Shàngwǔ)</strong> - Morning (AM)</p>
          <p><strong>下午 (Xiàwǔ)</strong> - Afternoon (PM)</p>
          <p><strong>晚上 (Wǎnshang)</strong> - Evening/Night</p>
          <p><strong>半 (bàn)</strong> - Half</p>
        </div>
      </div>
      
      <h3 className="mt-4">Example Time Expressions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>上午八点 (Shàngwǔ bā diǎn)</strong> - 8:00 AM</p>
          <p><strong>下午三点 (Xiàwǔ sān diǎn)</strong> - 3:00 PM</p>
          <p><strong>下午三点十五分 (Xiàwǔ sān diǎn shíwǔ fēn)</strong> - 3:15 PM</p>
          <p><strong>下午三点半 (Xiàwǔ sān diǎn bàn)</strong> - 3:30 PM</p>
          <p><strong>晚上十点四十五分 (Wǎnshang shí diǎn sìshíwǔ fēn)</strong> - 10:45 PM</p>
        </div>
      </div>

      <h3 className="mt-4">Months and Dates</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>一月 (Yīyuè)</strong> - January</p>
          <p><strong>二月 (Èryuè)</strong> - February</p>
          <p><strong>三月 (Sānyuè)</strong> - March</p>
          <p><strong>...</strong></p>
          <p><strong>十二月 (Shí'èryuè)</strong> - December</p>
          <p><strong>日/号 (Rì/Hào)</strong> - Day (of the month)</p>
          <p><strong>Example: 三月五日/号 (Sānyuè wǔ rì/hào)</strong> - March 5th</p>
        </div>
      </div>
      
      <h3 className="mt-4">Practice Dialogue: Making an Appointment</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>A: 我们什么时候见面？ (Wǒmen shénme shíhou jiànmiàn?)</strong> - When shall we meet?</p>
          <p><strong>B: 星期三下午三点，可以吗？ (Xīngqīsān xiàwǔ sān diǎn, kěyǐ ma?)</strong> - Wednesday at 3 PM, is that OK?</p>
          <p><strong>A: 不好意思，星期三我很忙。星期四怎么样？ (Bù hǎoyìsi, xīngqīsān wǒ hěn máng. Xīngqīsì zěnmeyàng?)</strong> - I'm sorry, I'm busy on Wednesday. How about Thursday?</p>
          <p><strong>B: 星期四上午十点可以。 (Xīngqīsì shàngwǔ shí diǎn kěyǐ.)</strong> - Thursday at 10 AM works for me.</p>
          <p><strong>A: 好的，星期四上午十点见！ (Hǎo de, xīngqīsì shàngwǔ shí diǎn jiàn!)</strong> - OK, see you Thursday at 10 AM!</p>
        </div>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={6}
      title="Time and Scheduling"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter6;
