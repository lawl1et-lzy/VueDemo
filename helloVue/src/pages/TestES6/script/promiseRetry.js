/* eslint-disable */
function promiseRetry(fn, handleFnRes, times = 3, delay = 0) {
    return (...args) => {
        return new Promise(async (resolve) => {
            const retryFn = async (fn, times) => {
                if (times) {
                    let fnRes = ''
                    let res = ''

                    try {
                        fnRes = await fn.apply(this, args)
                        res = (typeof handleFnRes === 'function') ? handleFnRes.apply(this, [fnRes]) : fnRes
                    } catch (error) {
                        return resolve({errorCode: 0, errorMsg: error, leftTimes: times})
                    }

                    if(res) {
                        return resolve({errorCode: 1, leftTimes: times, data: res})
                    } else {
                        setTimeout(() => {
                            retryFn(fn, --times)
                        }, delay);
                    }
                } else {
                    return resolve({errorCode: 1, leftTimes: times})
                }
            }

            retryFn(fn, times)
        })
    }
}

function fn() {
    return new Promise((resolve, reject) => {
        const data = Math.random()
        console.log('data', data);
        data < 0.3 ? resolve(1) : resolve(2)
    })
}

// const res = await this.promiseRetry(this.fn, (fnRes) => {
//     return fnRes === 1
// }, 10, 2000)()