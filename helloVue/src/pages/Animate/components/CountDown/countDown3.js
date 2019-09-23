/* eslint-disable */
/**
 * 小时级倒计时动画
 * @param  {String} time [服务器时间戳]
 * @param  {String} timesNum [倒计时截至时间]
 */
export function _timeAnimation (time, timesNum) {
  var times = (timesNum - time), // 目标时间和服务器时间的差值
    timeTemp, // 临时时间
    remain_sec = 0, // 秒
    remain_minute = 0, // 分钟
    remain_hour = 0, // 小时
    remain_day = 0, // 天数
    timetag = Date.now(), // 上一帧的时间
    hour = 0, // 最终显示小时
    min = 0, // 最终显示分钟
    sec = 0, // 最终显示秒
    doms = document.querySelector('.times') // 需要渲染的DOM元素

  timeTemp = parseInt(times / 1000)
  // 秒数
  remain_sec = timeTemp % 60
  timeTemp = parseInt(timeTemp / 60)
  // 分数
  remain_minute = timeTemp % 60
  timeTemp = parseInt(timeTemp / 60)
  // 小时数
  remain_hour = timeTemp % 24
  timeTemp = parseInt(timeTemp / 24)

  remain_day = timeTemp

  function begin () {
    if ((Date.now() - timetag) >= 1000) {
      times = timesNum - Date.now()

      timeTemp = parseInt(times / 1000)
      // 秒数
      remain_sec = timeTemp % 60
      timeTemp = parseInt(timeTemp / 60)
      // 分数
      remain_minute = timeTemp % 60
      timeTemp = parseInt(timeTemp / 60)
      // 小时数
      remain_hour = timeTemp % 24
      timeTemp = parseInt(timeTemp / 24)
 
      remain_day = timeTemp

      //   当时间结束后倒计时停止
      if ((remain_day <= 0) && (remain_minute <= 0) && (remain_sec <= 0) && (remain_hour <= 0)) {
        remain_day = remain_minute = remain_sec = remain_hour = 0
        return
      }

      timetag = Date.now()
    }

    // 以下部分做为时间显示时补零
    if (remain_hour < 10) {
      hour = '0' + remain_hour
    } else {
      hour = remain_hour
    }
    if (remain_minute < 10) {
      min = '0' + remain_minute
    } else {
      min = remain_minute
    }
    if (remain_sec < 10) {
      sec = '0' + remain_sec
    } else {
      sec = remain_sec
    }
    doms.innerHTML = remain_day + '天  ' + hour + ':' + min + ':' + sec
    window.requestAnimationFrame(begin)
  }
  window.requestAnimationFrame(begin)
}
