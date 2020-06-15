/**
 * 手机掩码
 */
function phoneEncrypt (phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

/**
 * Shuffle 随机排序
 */
function random (arr) {
  arr.sort(() => {
    return (Math.random() - 0.5)
  })
}

function shuffle (arr) {
	let i = arr.length
	while (i) {
		let j = Math.floor(Math.random() * i--);
		[arr[i], arr[j]] = [arr[j], arr[i]]
	}
}

/**
 * 按照一定的规则排序
 */
let regular = order = ["wipe", "fly", "iris", "flip", "cube", "blur", "zoom", "fade", "glow", "rotate"]
const objs = [
  {
    type: 'zoom'
  },
  {
    type: 'fly'
  }
];
objs.sort((a, b) => {
  return regular.indexOf(a.type) - regular.indexOf(b.type)
})

