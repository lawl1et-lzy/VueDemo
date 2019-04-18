/* eslint-disable */
Date.prototype.format = function (format) {
  let date = {
    'M+': this.getMonth() + 1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds(),
    'q+': Math.floor((this.getMonth() + 3) / 3),
    'S+': this.getMilliseconds()
  }
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  
  for (let k in date) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k] : ('00' + date[k]).substr(('' + date[k]).length))
    }
  }
  return format
}
// console.log('newDate', newDate.format('yyyy.MM.dd hh:mm'))

console.log(new Date(1555808400).format('yyyy年MM月dd hh:mm'))

console.log(new Date(1555808400000).getMonth())
// var objs = [
//   {
//     type: 'fly'
//   }
// ];

// objs.sort((a, b) => {
//   let regular = order = ["wipe", "fly", "iris", "flip", "cube",
// "blur", "zoom", "fade", "glow", "rotate"]
//   return regular.indexOf(a.type) - regular.indexOf(b.type)
// })

// console.log('objs', objs)

