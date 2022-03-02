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
              贴心小提示：冰墩墩和雪融融没法缩放哦~觉得视角小可以用平板观看
            </li>
            <li style="margin-bottom: 10px">
              <a href="https://music.163.com/song?id=1383927243&userid=616425958">在这个快餐时代，我遇见了小火慢炖的粥</a>
            </li>
            <li style="margin-bottom: 10px">
              <a href="https://dragonir.github.io/3d/#/olympic">冰墩墩和雪融融~</a>
            </li>
            <li style="margin-bottom: 10px">
              秋涵，我爱你，我对你会做到周秉义一心一意的不离不弃，和周秉昆傻里傻气的义无反顾，你要去支教我支持你，我会和你一起的，我担心你自己不安全，昨天晚上用室友手机打电话吵到你睡觉了，我很抱歉，对不起
            </li>
          </ul>
        </div>
      </div>
    </body>
  </html>
  `;
}

module.exports = fn;
