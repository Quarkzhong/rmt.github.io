/* 更新按键，根据身份更新 */
let zhiye
let name
zhiye = '学生'
name = 'ikun'
let frouupdata = () => {
	if (zhiye == '学生') {
		let but1 = document.getElementsByClassName('frouitem')[8]
		let but2 = document.getElementsByClassName('frouitem')[9]
		let but3 = document.getElementsByClassName('frouitem')[10]
		but1.innerHTML = '软糖'
		but2.innerHTML = '雪糕'
		but3.innerHTML = '辣条'
	} else if (zhiye == '上班族') {
		let but1 = document.getElementsByClassName('frouitem')[8]
		let but2 = document.getElementsByClassName('frouitem')[9]
		let but3 = document.getElementsByClassName('frouitem')[10]
		but1.innerHTML = '素食'
		but2.innerHTML = '米粉'
		but3.innerHTML = '煎饼'
	}
}
/**
 *这个函数用来给加号添加类名，使得加号会有变大动画
 */
let frouaddclass = () => {
	let but8 = document.getElementsByClassName('frouitem')[7]
	but8.classList.add('bianda')
}
/**
 *获取flag，判断是否需要点击加号
 * 返回true时可以点击其他，返回false时，只能点击黄色按钮
 */
let getflag = () => {
	let but8 = document.getElementsByClassName('frouitem')[7]
	let flag = true
	but8.classList.forEach((keys) => {
		if (keys == 'bianda') {
			flag = false
		}
	})
	return flag
}
/**
 * 这个函数用来个全部按钮绑定事件
 */
let onclick = () => {
	let but1 = document.getElementsByClassName('frouitem')[0]
	let but2 = document.getElementsByClassName('frouitem')[1]
	let but3 = document.getElementsByClassName('frouitem')[2]
	let but4 = document.getElementsByClassName('frouitem')[3]
	let but5 = document.getElementsByClassName('frouitem')[4]
	let but6 = document.getElementsByClassName('frouitem')[5]
	let but7 = document.getElementsByClassName('frouitem')[6]
	let but8 = document.getElementsByClassName('frouitem')[7]
	let but9 = document.getElementsByClassName('frouitem')[8]
	let but10 = document.getElementsByClassName('frouitem')[9]
	let but11 = document.getElementsByClassName('frouitem')[10]
	let but12 = document.getElementsByClassName('frouitem')[11]
	const wugu = 100
	const laji = 50
	let img = document.getElementsByClassName('ksjsimg')[0]
	let guocheng = document.getElementsByClassName('frouguocheng')[0]
	let sum = document.getElementsByClassName('froujieguo')[0]
	let ans = 0 //ans用来计算全部的和

	let froumskbg = document.getElementsByClassName('froumskbg')[0]
	let froumsk = document.getElementsByClassName('froumsk')[0]
	let froupingyu = document.getElementsByClassName('froupingyu')[0]
	let frouname = document.getElementsByClassName('frouname')[0]
	let froufengshu = document.getElementsByClassName('froufengshu')[0]
	let froujg = document.getElementsByClassName('froujg')[0]



	but1.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but1.classList.add('gray')
			guocheng.innerHTML += wugu
			ans += wugu
			frouaddclass()
		}
	})
	but2.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but2.classList.add('gray')
			guocheng.innerHTML += wugu
			ans += wugu
			frouaddclass()
		}
	})
	but3.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but3.classList.add('gray')
			guocheng.innerHTML += wugu
			ans += wugu
			frouaddclass()
		}
	})
	but5.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but5.classList.add('gray')
			guocheng.innerHTML += wugu
			ans += wugu
			frouaddclass()
		}
	})
	but6.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but6.classList.add('gray')
			guocheng.innerHTML += wugu
			ans += wugu
			frouaddclass()
		}
	})
	but7.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but7.classList.add('gray')
			guocheng.innerHTML += wugu
			ans += wugu
			frouaddclass()
		}
	})

	but9.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but9.classList.add('gray')
			guocheng.innerHTML += laji
			ans += laji
			frouaddclass()
		}
	})
	but10.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but10.classList.add('gray')
			guocheng.innerHTML += laji
			ans += laji
			frouaddclass()
		}
	})
	but11.addEventListener('click', () => {
		let flag = getflag()
		if (flag || guocheng.innerText.length == 0) {
			but8.classList.remove('bianda')
			img.style.display = 'none'
			but11.classList.add('gray')
			guocheng.innerHTML += laji
			ans += laji
			frouaddclass()
		}
	})

	but4.addEventListener('touchstart', () => {
		but4.classList.add('tooyellow')
	})
	but4.addEventListener('touchend', () => {
		but4.classList.remove('tooyellow')
		but8.classList.remove('bianda')
		but12.classList.remove('tooyellow')
		but1.classList.remove('gray')
		but2.classList.remove('gray')
		but3.classList.remove('gray')
		but5.classList.remove('gray')
		but6.classList.remove('gray')
		but7.classList.remove('gray')
		but9.classList.remove('gray')
		but10.classList.remove('gray')
		but11.classList.remove('gray')
		sum.innerHTML = ''
		ans = 0
		guocheng.innerHTML = ''
		img.style.display = 'block'
		but12.innerHTML = '='
	})

	but8.addEventListener('touchstart', () => {
		but8.classList.add('tooyellow')
	})
	but8.addEventListener('touchend', () => {
		but8.classList.remove('tooyellow')
		let flag = getflag()
		if (!flag) {
			guocheng.innerHTML += '+'
			but8.classList.remove('bianda')
		}
	})

	but12.addEventListener('touchstart', () => {

		if (img.style.display == 'none') {
			but12.classList.add('tooyellow')
			but12.innerHTML = '您的健<br>康报告'
			but8.classList.remove('bianda')
			sum.innerHTML = ans
			if (ans <= 150) {
				froupingyu.src = 'img/p5/差.png'
				froujg.innerHTML = '差'
			} else if (ans < 250) {
				froupingyu.src = 'img/p5/良.png'
				froujg.innerHTML = '差'
			} else {
				froupingyu.src = 'img/p5/优.png'
				froujg.innerHTML = '差'
			}

		}
	})
	but12.addEventListener('touchend', () => {
		if (img.style.display == 'none') {
			frouname.innerHTML = name
			froufengshu.innerHTML = ans
			froumskbg.style.display = 'block'
			froumsk.style.display = 'block'
			setTimeout(() => {
				froumskbg.addEventListener('touchend', () => {
					froumskbg.style.display = 'none'
					froumsk.style.display = 'none'
				})
				froumsk.addEventListener('touchend', () => {
					froumskbg.style.display = 'none'
					froumsk.style.display = 'none'
				})
			}, 1000)
		}
	})
}
