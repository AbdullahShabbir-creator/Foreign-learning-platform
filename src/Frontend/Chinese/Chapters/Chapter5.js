import React from "react";
import ChapterTemplate from "../ChapterTemplate";

const Chapter5 = () => {
  const chapterContent = (
    <>
      <p>Welcome to Chapter 5! In this chapter, we'll learn about food and dining in Chinese.</p>
      
      <h3 className="mt-4">Common Food Items</h3>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>米饭 (Mǐfàn)</strong> - Rice</p>
              <p><strong>面条 (Miàntiáo)</strong> - Noodles</p>
              <p><strong>饺子 (Jiǎozi)</strong> - Dumplings</p>
              <p><strong>包子 (Bāozi)</strong> - Steamed buns</p>
              <p><strong>鸡肉 (Jīròu)</strong> - Chicken</p>
            </div>
            <div className="col-md-6">
              <p><strong>牛肉 (Niúròu)</strong> - Beef</p>
              <p><strong>猪肉 (Zhūròu)</strong> - Pork</p>
              <p><strong>鱼 (Yú)</strong> - Fish</p>
              <p><strong>蔬菜 (Shūcài)</strong> - Vegetables</p>
              <p><strong>水果 (Shuǐguǒ)</strong> - Fruits</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-4">Restaurant Phrases</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>菜单 (Càidān)</strong> - Menu</p>
          <p><strong>服务员 (Fúwùyuán)</strong> - Waiter/Waitress</p>
          <p><strong>我想点菜 (Wǒ xiǎng diǎn cài)</strong> - I would like to order</p>
          <p><strong>请给我... (Qǐng gěi wǒ...)</strong> - Please give me...</p>
          <p><strong>账单 (Zhàngdān)</strong> - Bill</p>
          <p><strong>付款 (Fùkuǎn)</strong> - To pay</p>
        </div>
      </div>
      
      <h3 className="mt-4">Cultural Note</h3>
      <div className="alert alert-info">
        <p>In Chinese dining culture, dishes are typically shared among everyone at the table. It's common to order a variety of dishes that everyone can enjoy together, rather than individual meals for each person.</p>
      </div>

      <h3 className="mt-4">Practice Dialogue: At a Restaurant</h3>
      <div className="card mb-4">
        <div className="card-body">
          <p><strong>服务员: 您好，需要点什么？ (Nín hǎo, xūyào diǎn shénme?)</strong> - Hello, what would you like to order?</p>
          <p><strong>顾客: 我要一份炒饭和一碗汤。 (Wǒ yào yí fèn chǎofàn hé yì wǎn tāng.)</strong> - I want an order of fried rice and a bowl of soup.</p>
          <p><strong>服务员: 好的，还需要别的吗？ (Hǎo de, hái xūyào bié de ma?)</strong> - OK, do you need anything else?</p>
          <p><strong>顾客: 不用了，谢谢。 (Bùyòng le, xièxie.)</strong> - No, thank you.</p>
        </div>
      </div>

      <h3 className="mt-4">Common Measure Words for Food</h3>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Measure Word</th>
            <th>Pinyin</th>
            <th>Used For</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>碗</td>
            <td>wǎn</td>
            <td>bowl of food</td>
            <td>一碗米饭 (yì wǎn mǐfàn) - a bowl of rice</td>
          </tr>
          <tr>
            <td>盘</td>
            <td>pán</td>
            <td>plate/dish of food</td>
            <td>一盘菜 (yì pán cài) - a plate of food</td>
          </tr>
          <tr>
            <td>杯</td>
            <td>bēi</td>
            <td>cup/glass of drink</td>
            <td>一杯茶 (yì bēi chá) - a cup of tea</td>
          </tr>
        </tbody>
      </table>
    </>
  );

  return (
    <ChapterTemplate
      chapterNumber={5}
      title="Food and Dining"
      content={chapterContent}
      hasNextChapter={true}
    />
  );
};

export default Chapter5;
