/**
 * @method 格式化时间戳
 * @return [format]
 *
 * 例子：
 * import { parseTime } from '../../util'
 * parseTime(1555808400000, yyyy.MM.dd hh:mm')
 */
const parseTime = (time, format) => {
  if (arguments.length === 0) {
    return null;
  }
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  let formatObj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    'S+': date.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in formatObj) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? formatObj[k] : ('00' + formatObj[k]).substr(('' + formatObj[k]).length));
    }
  }
  return format;
};

