function fn(weatherData, lifeData, content, imgurl, lovingDays, logDays) {
  const { daily: weatherDataDaily } = weatherData;
  const { daily } = lifeData;

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <div>
        <!-- 天数 -->

        <div>
          <!--<p>今天是我们在一起的第 ${lovingDays} 天</p>-->
          <p>今天是我们在一起的第 0 天</p>
          <p>开始每日邮件的第${logDays}天</p>
        </div>
       
        <!-- 图片 -->
        <div>
          <img
            style="width: 100%; max-width: 768px"
            src="${imgurl}"
            alt="图片"
          />
        </div>
        <!-- 每日一句 -->
        <div>
          <p style="font-size: 14px; font-style: italic;">
            ${content}
          </p>
        </div>
        <!-- 天气 -->
        <div>
          <p>
            <b>今日气温:</b>
            <span>${weatherDataDaily[0].tempMin}°C - ${weatherDataDaily[0].tempMax}°C</span>
          </p>
          <ul>
            <li style="margin-bottom: 10px">
              ${daily[1].name}(${daily[1].category}):
              ${daily[1].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[2].name}(${daily[2].category}):
              ${daily[2].text}
            </li>
            <li style="margin-bottom: 10px">
              ${daily[0].name}(${daily[0].category}):
              ${daily[0].text}
            </li>
            <li style="margin-bottom: 10px">
              贴心小提示：可以边听歌，边看冰墩墩哦，点击下方链接，然后返回邮件界面再点击冰墩墩链接就可以啦！冰墩墩界面可以进行放大缩小哦~
            </li>
            <li style="margin-bottom: 10px">
              <a href="https://c.y.qq.com/base/fcgi-bin/u?__=O2YYdqov4tMP">点这儿来听听今天给你分享的音乐哦~</a>
            </li>
            <li style="margin-bottom: 10px">
              <a href="http://www.zhangzhiyu.live:8900/3d/">冰墩墩这么火，别人有的你当然也要有，才不会让你羡慕别人呢~断货买不到就送你一个代码冰墩墩好啦~</a>
            </li>
            <li style="margin-bottom: 10px">
              情。。emmmm(￣ε(#￣)算了不说了，怕你说我，节日快乐！秋涵，我爱你哦~
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `;
}

module.exports = fn;
