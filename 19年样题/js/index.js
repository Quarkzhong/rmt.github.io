let loading = () => {
	let dian = document.getElementById('loadingdian')
	let index = 0
	let str = '.'
	let dsq1 = setInterval(() => {
		dian.innerHTML += str
		index++
		if (index > 3) {
			index = 0
			dian.innerHTML = ''
		}
	}, 300)
	let nunber = document.getElementById('loadingnunber')
	let num = 0
	let dsq2 = setInterval(() => {
		nunber.innerHTML = num++ + '%'
		if (num > 100) {
			clearInterval(dsq2)
			let load = document.getElementsByClassName('loading')
			load[0].style.opacity = '0'
			setTimeout(() => {
				load[0].style.display = 'none'
				one()
			}, 1000)
		}
	}, Math.random() * 100)
}
let downone = () => {
	let zuo = document.getElementsByClassName('zuo')[0]
	let you = document.getElementsByClassName('you')[0]
	let zuotext = document.getElementById('zuotext')
	let youtext = document.getElementById('youtext')
	zuo.style.right = '-100vw'
	you.style.left = '-100vw'
	zuotext.style.opacity = '0'
	youtext.style.opacity = '0'
	let one = document.getElementsByClassName('one')[0]
	let touchstartY;
	let touchendY;
	one.addEventListener('touchstart', (e) => {
		touchstartY = e.changedTouches[0].clientY
		console.log(e);
		console.log(touchstartY);
	})
	one.addEventListener('touchend', (e) => {
		touchendY = e.changedTouches[0].clientY
		console.log(touchendY);
		if (touchstartY - touchendY > 100) {
			console.log('true=>');
			one.style.opacity = '0'
			setTimeout(() => {
				one.style.display = 'none'

				two()
			}, 1000)
		}
	})
}
let downtwo = () => {

	let two = document.getElementsByClassName('two')[0]
	let touchstartY;
	let touchendY;
	two.addEventListener('touchstart', (e) => {
		touchstartY = e.changedTouches[0].clientY
		console.log(touchstartY);
	})
	two.addEventListener('touchend', (e) => {
		touchendY = e.changedTouches[0].clientY
		console.log(touchendY);
		if (touchstartY - touchendY > 100) {
			console.log('true=>');
			two.style.opacity = '0'
			setTimeout(() => {
				two.style.display = 'none'
				three()
			}, 1000)
		}
	})
}
let one = () => {
	let p = document.getElementsByClassName('onebody')[0].getElementsByTagName('p')
	let index = 0
	for (var i = 0; i < p.length; i++) {
		let a = i
		setTimeout(() => {
			p[a].style.opacity = '1'
		}, i * 1000)
	}
	setTimeout(() => {
		document.getElementsByClassName('downjt')[0].style.opacity = '1'
		downone()
	}, 6000)

}
let two = () => {
	let zuo = document.getElementsByClassName('zuo')[0]
	let you = document.getElementsByClassName('you')[0]
	let zuotext = document.getElementById('zuotext')
	let youtext = document.getElementById('youtext')
	zuo.style.right = '-100vw'
	you.style.left = '-100vw'
	zuotext.style.opacity = '0'
	youtext.style.opacity = '0'
	setTimeout(() => {
		zuo.style.right = '0vw'
		setTimeout(() => {
			zuotext.style.opacity = '1'
		}, 1000)
	}, 0)
	setTimeout(() => {
		you.style.left = '0vw'
		setTimeout(() => {
			youtext.style.opacity = '1'
			document.getElementsByClassName('downjt')[1].style.opacity = '1'
			downtwo()
		}, 1000)
	}, 2000)
}
let zhiye
let name
let subimt = () => {
	let mskbg = document.getElementsByClassName('mskbg')
	let msk = document.getElementsByClassName('msk')
	let name1 = document.getElementById('name')
	let zhiye1 = document.getElementById('zhiye')

	if (name1.value == '' || name1.value.length == 0) {
		document.getElementById('tits').src = 'img/p4/xm.png'
		mskbg[0].style.display = 'block'
		msk[0].style.display = 'block'

		return false
	} else if (name1.value.length < 2 || name1.value.length > 4) {
		document.getElementById('tits').src = 'img/p4/cd.png'
		mskbg[0].style.display = 'block'
		msk[0].style.display = 'block'
		return false
	} else if (zhiye1.value == '' || zhiye1.value.length == 0) {
		document.getElementById('tits').src = 'img/p4/zy.png'
		mskbg[0].style.display = 'block'
		msk[0].style.display = 'block'
		return false
	} else {
		frouupdata(zhiye1.value)
		document.getElementsByClassName('three')[0].style.opacity = '0'
		setTimeout(() => {
			document.getElementsByClassName('three')[0].style.display = 'none'
			zhiye = zhiye1.value
			name = name1.value
		}, 1000)
	}
}
let none = () => {
	let mskbg = document.getElementsByClassName('mskbg')
	let msk = document.getElementsByClassName('msk')
	mskbg[0].style.display = 'none'
	msk[0].style.display = 'none'
}
let three = () => {
	setTimeout(() => {
		document.getElementsByClassName('digua')[0].style.transform = 'translateX(0vw)'
	}, 1)
	setTimeout(() => {
		document.getElementsByClassName('touzi')[0].style.transform = 'translateX(0vw)'
	}, 500)
	setTimeout(() => {
		document.getElementsByClassName('daozi')[0].style.transform = 'translateY(-0vh)'
	}, 1000)
	setTimeout(() => {
		document.getElementsByClassName('threetext')[0].style.opacity = '1'
	}, 1800)
	setTimeout(() => {
		document.getElementsByClassName('threebody')[0].style.opacity = '1'

	}, 2800)
}

let frouupdata = (zhiye) => {
	console.log(zhiye);
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
		playmusic()
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
		playmusic()
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
		playmusic()
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
		playmusic()
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
		playmusic()
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
		playmusic()
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
		playmusic()
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
		playmusic()
	})

	but4.addEventListener('touchstart', () => {
		but4.classList.add('tooyellow')
		playmusic()
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
		playmusic()
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
playmusic()
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
				froujg.innerHTML = '良'
			} else {
				froupingyu.src = 'img/p5/优.png'
				froujg.innerHTML = '优'
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




	let froufhui = document.getElementsByClassName('froufhui')[0]
	froufhui.addEventListener('click', () => {
		let three = document.getElementsByClassName('three')[0]
		three.style.display = 'block'
		three.style.opacity = '1'
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
}
let playmusic=()=>{
	let buttoncilck=document.getElementById('buttoncilck')
	buttoncilck.play()
}