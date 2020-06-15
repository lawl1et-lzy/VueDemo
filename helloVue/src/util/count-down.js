/**
 * @param {number} startTime 服务器开始时间戳
 * @param {number} endTime 服务器倒计时结束时间戳
 * @param {String} format 格式化 '{h}:{i}:{s}' 只支持[时:分:秒]
 * @param {Function} fn 回调函数 具体数值看 __emit
 */

class TimeAnimation {
  constructor({ startTime, endTime, format, fn }) {
    this.hour = 0;
    this.min = 0;
    this.second = 0;

    this.startTime = startTime;
    this.endTime = endTime;
    this.format = format; // 格式化
    this.fn = fn;

    this.timeDiff = Math.floor((this.endTime - Date.now()) / 1000); // 时间差/s
    this.leftTime = 0; // 用于计算的剩余时间戳
    this.lastFrame = Date.now(); // 上一帧的时间
    this.currFrame = 0; // 当前帧的时间
    this.formula = {
      hour: 60 * 60,
      min: 60
    };
  }
  start() {
    if (this.startTime > this.endTime) {
      this.fn({
        response: {
          errorCode: 422,
          hintMessage: '参数有误，开始时间大于结束时间'
        }
      });
      return false;
    }
    this.__countDown();
  }

  stop() {
    cancelAnimationFrame(this.__countDown);
  }

  // @private
  __countDown() {
    if (!this.timeDiff || this.timeDiff <= 0) {
      cancelAnimationFrame(this.__countDown);
      this.fn({
        response: {
          errorCode: 100,
          hintMessage: '倒计时已结束'
        }
      });
      return false;
    }

    this.currFrame = Date.now();
    if (this.currFrame - this.lastFrame >= 1000) {
      // 防止进程停留时倒计时结束，此时requestAnimationFrame依然执行
      this.timeDiff = this.endTime - Date.now() > 0 ? Math.floor((this.endTime - Date.now()) / 1000) : 0;
      this.hour = Math.floor(this.timeDiff / this.formula.hour);
      this.leftTime = this.timeDiff % this.formula.hour;

      this.min = Math.floor(this.leftTime / this.formula.min);
      this.leftTime = this.leftTime % this.formula.min;

      this.second = Math.floor(this.leftTime);

      this.lastFrame = Date.now();

      this.__emit(); // 内容分发
    }
    requestAnimationFrame(this.__countDown.bind(this));
  }

  // @private
  __emit() {
    let data;
    if (this.format) {
      data = this.__formatTime();
    } else {
      data = {
        hour: this.hour,
        min: this.min,
        second: this.second
      };
    }
    this.fn({
      response: {
        errorCode: 0,
        hintMessage: ''
      },
      data
    });
  }

  // @private
  __formatTime() {
    const formatObj = {
      h: this.hour,
      m: this.min,
      s: this.second
    };
    const timeStr = this.format.replace(/{(h|m|s)+}/g, (result, key) => {
      let value = formatObj[key];
      if (result.length > 0 && value < 10) {
        value = `0${value}`;
      }
      return value || 0;
    });
    return timeStr;
  }

  // @private
  __parseTime(time) {
    let outtime = time;
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      outtime = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      outtime = time * 1000;
    }
    return outtime;
  }
}
// 示例
// new Time({
//   startTime: 156575946000,
//   endTime: 1565776060000,
//   format: '{h}-{m}-{s}',
//   fn: (res) => {
//     let {response: {errorCode, hintMessage}, data} = res
//     if (!errorCode) {
//       console.log('success', data)
//     } else {
//       console.log('error hintMessage', hintMessage)
//     }
//   }
// }).start()
export default TimeAnimation;
