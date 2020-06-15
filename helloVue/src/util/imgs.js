/**
 * Imgs.hasReady(imgArr)
 *  .then(res =>{})
 *  .catch(err => {})
 */
import util from './base';
export default class Imgs {
  // 是否加载成功
  static hasReady(imgArr) {
    return new Promise((resolve, reject) => {
      if (!util.hasList(imgArr)) reject(`imgArr 不是数组或者数组长度小于0: ${base.hasList(imgArr)}`);

      let promiseAll = [];
      let img = [];

      for (let i in imgArr) {
        promiseAll[i] = new Promise((resolve, reject) => {
          img[i] = new Image();
          img[i].src = imgArr[i];
          img[i].onload = () => {
            resolve(img[i]);
          };
        });
      }

      Promise.all(promiseAll)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
