import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter7 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 7! In this chapter, we'll learn about directions and transportation in Chinese.</p>
      
      <h3 className="mt-4">Direction Words</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>东 (Dōng)</strong> - East</p>
              <p><strong>南 (Nán)</strong> - South</p>
              <p><strong>西 (Xī)</strong> - West</p>
              <p><strong>北 (Běi)</strong> - North</p>
              <p><strong>左边 (Zuǒbiān)</strong> - Left side</p>
            </div>
            <div className="col-md-6">
              <p><strong>右边 (Yòubiān)</strong> - Right side</p>
              <p><strong>前面 (Qiánmiàn)</strong> - In front</p>
              <p><strong>后面 (Hòumiàn)</strong> - Behind</p>
              <p><strong>上面 (Shàngmiàn)</strong> - Above</p>
              <p><strong>下面 (Xiàmiàn)</strong> - Below</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Transportation Vocabulary</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>公共汽车 (Gōnggòng qìchē)</strong> - Bus</p>
              <p><strong>公交车站 (Gōngjiāo chēzhàn)</strong> - Bus stop</p>
              <p><strong>地铁 (Dìtiě)</strong> - Subway</p>
              <p><strong>地铁站 (Dìtiě zhàn)</strong> - Subway station</p>
              <p><strong>火车 (Huǒchē)</strong> - Train</p>
            </div>
            <div className="col-md-6">
              <p><strong>火车站 (Huǒchē zhàn)</strong> - Train station</p>
              <p><strong>出租车 (Chūzū chē)</strong> - Taxi</p>
              <p><strong>飞机 (Fēijī)</strong> - Airplane</p>
              <p><strong>机场 (Jīchǎng)</strong> - Airport</p>
              <p><strong>自行车 (Zìxíngchē)</strong> - Bicycle</p>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="mt-4">Asking for Directions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>请问... (Qǐngwèn...)</strong> - Excuse me, may I ask... (polite way to begin a question)</p>
          <p><strong>...在哪里？ (...zài nǎlǐ?)</strong> - Where is...?</p>
          <p><strong>怎么去...？ (Zěnme qù...?)</strong> - How do I get to...?</p>
          <p><strong>我迷路了。 (Wǒ mílù le.)</strong> - I'm lost.</p>
          <p><strong>直走 (Zhí zǒu)</strong> - Go straight</p>
          <p><strong>往左/右拐 (Wǎng zuǒ/yòu guǎi)</strong> - Turn left/right</p>
        </div>
      </div>

      <h3 className="mt-4">Practice Dialogue: Asking for Directions</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>A: 请问，地铁站在哪里？ (Qǐngwèn, dìtiě zhàn zài nǎlǐ?)</strong> - Excuse me, where is the subway station?</p>
          <p><strong>B: 地铁站在前面。直走，然后往右拐。 (Dìtiě zhàn zài qiánmiàn. Zhí zǒu, ránhòu wǎng yòu guǎi.)</strong> - The subway station is ahead. Go straight, then turn right.</p>
          <p><strong>A: 远吗？ (Yuǎn ma?)</strong> - Is it far?</p>
          <p><strong>B: 不远，大约五分钟步行。 (Bù yuǎn, dàyuē wǔ fēnzhōng bùxíng.)</strong> - Not far, about a 5-minute walk.</p>
          <p><strong>A: 谢谢！ (Xièxiè!)</strong> - Thank you!</p>
          <p><strong>B: 不客气。 (Bù kèqì.)</strong> - You're welcome.</p>
        </div>
      </div>

      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>Public transportation is very developed in most Chinese cities, especially the subway systems. Many Chinese people use apps like Baidu Maps or Gaode Maps for navigation, which provide real-time public transportation information.</p>
      </div>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={7}
      title="Directions and Transportation"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter7;
