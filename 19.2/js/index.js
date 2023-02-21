var UserName
var UserZhiye
let ans = 0



let down=(elm)=>{
	let start
	let end
	elm.addEventListener('touchstart',(e)=>{
		start=e.changedTouches[0].clientY
	})
	elm.addEventListener('touchend',(e)=>{
		end=e.changedTouches[0].clientY
		if(start-end>200){
			elm.style.opacity='0'
			setTimeout(()=>{
				elm.style.display='none'
			},1000)
		}
	})
}


let $loading = () => {
	let dian = document.getElementsByClassName('loaddian')[0]
	let number = document.getElementsByClassName('loadnumber')[0]
	let sum = 0
	let dsq = setInterval(() => {
		number.innerHTML = sum++ + '%'
		if (sum > 100) {
			clearInterval(dsq)
			let elm = document.getElementsByClassName('loading')[0]
			elm.style.opacity = '0'
			setTimeout(()=>{
				elm.style.display = 'none'
				$one()
			},1000)
		}
	}, 20)
	let dsq1 = setInterval(() => {
		dian.innerHTML += '.'
		if (dian.innerHTML == '....') {
			dian.innerHTML = ''
		}
	}, 400)
}
let $one = () => {
	let pList = document.getElementsByClassName('onebody')[0].getElementsByTagName('p')
	let i = 0
	let dsq = setInterval(() => {
		pList[i++].style.opacity = '1'
		if (i == pList.length) {
			clearInterval(dsq)
			setTimeout(() => {
				document.getElementsByClassName('downjt')[0].style.opacity = '1'
				setTimeout(()=>{
					down(document.getElementsByClassName('one')[0])
					$two()
				},1000)
			}, 1000)
		}
	}, 1000)
}

let $two = () => {
	let up = document.getElementsByClassName('shang')[0]
	let down = document.getElementsByClassName('xia')[0]
	let uptext = up.getElementsByTagName('img')[0]
	let downtext = down.getElementsByTagName('img')[0]
	setTimeout(() => {
		up.style.transform = 'translateX(0%)'
	}, 1000)
	setTimeout(() => {
		uptext.style.opacity = '1'
	}, 2000)
	setTimeout(() => {
		down.style.transform = 'translateX(0%)'
	}, 3000)
	setTimeout(() => {
		downtext.style.opacity = '1'
		let start
		let end
		document.getElementsByClassName('two')[0].addEventListener('touchstart',(e)=>{
			start=e.changedTouches[0].clientY
		})
		document.getElementsByClassName('two')[0].addEventListener('touchend',(e)=>{
			end=e.changedTouches[0].clientY
			if(start-end>200){
				document.getElementsByClassName('two')[0].style.opacity='0'
				setTimeout(()=>{
					document.getElementsByClassName('two')[0].style.display='none'
					$three()
				},1000)
			}
		})
	}, 4000)
	
	
}


let $three = () => {
	selectbutton()
	let dg = document.getElementsByClassName('threezuo')[0]
	let dz = document.getElementsByClassName('threezhong')[0]
	let douzi = document.getElementsByClassName('threeyou')[0]
	let text = document.getElementsByClassName('threetext')[0]
	let body = document.getElementsByClassName('threebody')[0]
	setTimeout(() => {
		dg.style.transform = 'translateX(0%)'
	}, 0)
	setTimeout(() => {
		douzi.style.transform = 'translateX(0%)'
	}, 1000)
	setTimeout(() => {
		dz.style.transform = 'translateX(0%)'
	}, 2000)
	setTimeout(() => {
		text.style.opacity = '1'
	}, 3000)
	setTimeout(() => {
		body.style.opacity = '1'
	}, 4000)

}












let fhui=()=>{

	document.getElementsByClassName('three')[0].style.display='block'
	setTimeout(()=>{
		document.getElementsByClassName('three')[0].style.opacity='1'
	}, 1000);

}

let selectbutton = () => {
	let textbutton = document.getElementById('changezhiye')
	let sjx = document.getElementById('sjx')
	let frame = document.getElementsByClassName('frame')[0]
	let sbz = frame.getElementsByTagName('img')[0]
	let xs = frame.getElementsByTagName('img')[1]
	textbutton.addEventListener('click', () => {
		if (sjx.innerHTML == '▼') {
			sjx.innerHTML = '▲'
			frame.style.display = 'block'
		} else {
			sjx.innerHTML = '▼'
			frame.style.display = 'none'
		}
	})
	sbz.addEventListener('click', () => {
		textbutton.value = '上班族'
		sjx.innerHTML = '▼'
		frame.style.display = 'none'
	})
	xs.addEventListener('click', () => {
		textbutton.value = '学生'
		sjx.innerHTML = '▼'
		frame.style.display = 'none'
	})
}
let sumbit = () => {
	let mskbg = document.getElementsByClassName('mskbg')[0]
	let msk = document.getElementsByClassName('msk')[0]
	let img = msk.getElementsByTagName('img')[0]
	let name = document.getElementById('name')
	let zhiye = document.getElementById('changezhiye')
	if (name.value == '') {
		img.src = 'img/p4/xm.png'
		mskbg.style.display = 'block'
		msk.style.display = 'block'
		return false
	} else if (name.value.length < 2 || name.value.length > 4) {
		console.log(name.value.length);
		img.src = 'img/p4/cd.png'
		mskbg.style.display = 'block'
		msk.style.display = 'block'
		return false
	} else if (zhiye.value == '') {
		img.src = 'img/p4/zy.png'
		mskbg.style.display = 'block'
		msk.style.display = 'block'
		return false
	} else {
		document.getElementsByClassName('three')[0].style.opacity='0'
		setTimeout(()=>{
			document.getElementsByClassName('three')[0].style.display='none'
		},1000)
		UserName = name.value
		UserZhiye = zhiye.value
		//跳转
		$upbutton()
		$click()
		
	}
}
let none = () => {
	let mskbg = document.getElementsByClassName('mskbg')[0]
	let msk = document.getElementsByClassName('msk')[0]
	mskbg.style.display = 'none'
	msk.style.display = 'none'
}



let $upbutton = () => {
	let han3 = document.getElementsByClassName('frouhan')[2]
	let button1 = han3.getElementsByClassName('froubutton')[0]
	let button2 = han3.getElementsByClassName('froubutton')[1]
	let button3 = han3.getElementsByClassName('froubutton')[2]
	if (UserZhiye == '学生') {
		button1.innerHTML = '软糖'
		button2.innerHTML = '雪糕'
		button3.innerHTML = '辣条'
	} else if (UserZhiye == '上班族') {
		button1.innerHTML = '素食'
		button2.innerHTML = '米粉'
		button3.innerHTML = '煎饼'
	}
}

let $click = () => {
	let han1 = document.getElementsByClassName('frouhan')[0]
	let han2 = document.getElementsByClassName('frouhan')[1]
	let han3 = document.getElementsByClassName('frouhan')[2]

	let button1 = han1.getElementsByClassName('froubutton')[0]
	let button2 = han1.getElementsByClassName('froubutton')[1]
	let button3 = han1.getElementsByClassName('froubutton')[2]
	let button4 = han1.getElementsByClassName('froubutton')[3]
	let button5 = han2.getElementsByClassName('froubutton')[0]
	let button6 = han2.getElementsByClassName('froubutton')[1]
	let button7 = han2.getElementsByClassName('froubutton')[2]
	let button8 = han2.getElementsByClassName('froubutton')[3]
	let button9 = han3.getElementsByClassName('froubutton')[0]
	let button10 = han3.getElementsByClassName('froubutton')[1]
	let button11 = han3.getElementsByClassName('froubutton')[2]
	let button12 = han3.getElementsByClassName('froubutton')[3]

	let laji = 50
	let wugu = 100

	let img = document.getElementsByClassName('showimg')[0]
	let guocheng = document.getElementById('guocheng')
	let sum = document.getElementById('sum')
	
	let jsqmskbg = document.getElementsByClassName('jsqmskbg')[0]
	let jsqmsk = document.getElementsByClassName('jsqmsk')[0]
	let jsqname = document.getElementsByClassName('jsqname')[0]
	let jsqfenshu = document.getElementsByClassName('jsqfenshu')[0]
	let jsqjieguo = document.getElementsByClassName('jsqjieguo')[0]
	let jsqpingyu = document.getElementsByClassName('jsqpingyu')[0]


	let fn = (btn, jiazhi, button8, img) => {
		let han = document.getElementsByClassName('frouhan')[1]
		let button = han.getElementsByClassName('froubutton')[3]
		if (!button.classList.contains('bianda') || img.style.display == 'block') {
			btn.classList.add('gray')
			ans += jiazhi
			guocheng.innerHTML += jiazhi
			img.style.display = 'none'
			button8.classList.add('bianda')
		}
	}



	button1.addEventListener('click', () => {
		fn(button1, 100, button8, img)
	})
	button2.addEventListener('click', () => {
		fn(button2, 100, button8, img)
	})
	button3.addEventListener('click', () => {
		fn(button3, 100, button8, img)
	})
	button5.addEventListener('click', () => {
		fn(button5, 100, button8, img)
	})
	button6.addEventListener('click', () => {
		fn(button6, 100, button8, img)
	})
	button7.addEventListener('click', () => {
		fn(button7, 100, button8, img)
	})
	button9.addEventListener('click', () => {
		fn(button9, 50, button8, img)
	})
	button10.addEventListener('click', () => {
		fn(button10, 50, button8, img)
	})
	button11.addEventListener('click', () => {
		fn(button11, 50, button8, img)
	})

	button4.addEventListener('touchstart', () => {
		button4.classList.add('yellowbutton')
	})
	button4.addEventListener('touchend', () => {
		button4.classList.remove('yellowbutton')
		button1.classList.remove('gray')
		button2.classList.remove('gray')
		button3.classList.remove('gray')
		button5.classList.remove('gray')
		button6.classList.remove('gray')
		button7.classList.remove('gray')
		button9.classList.remove('gray')
		button10.classList.remove('gray')
		button11.classList.remove('gray')
		button12.classList.remove('gray')
		button8.classList.remove('yellowbutton')
		button12.classList.remove('yellowbutton')
		button12.innerHTML = '='
		ans = 0
		guocheng.innerHTML = ''
		sum.innerHTML = ''
		img.style.display = 'block'
	})

	button8.addEventListener('touchstart', () => {
		button8.classList.add('yellowbutton')
	})
	button8.addEventListener('touchend', () => {
		button8.classList.remove('yellowbutton')
		button8.classList.remove('bianda')
		if (guocheng.innerHTML.substring(guocheng.innerHTML.length - 1, guocheng.innerHTML.length) !=
			'+' && img.style.display != 'block') {
			guocheng.innerHTML += '+'
		}
	})


	button12.addEventListener('touchend', () => {
		if (button12.innerHTML == '您的健<br>康报告') {
			jsqname.innerHTML = UserName
			jsqfenshu.innerHTML = ans
			if (jsqfenshu <= 150) {
				jsqjieguo.innerHTML = '差'
				jsqpingyu.src = 'img/p5/差.png'
			} else if (jsqfenshu < 250) {
				jsqjieguo.innerHTML = '良'
				jsqpingyu.src = 'img/p5/良.png'
			} else {
				jsqjieguo.innerHTML = '优'
				jsqpingyu.src = 'img/p5/优.png'
			}
			jsqmsk.style.display = 'block'
			jsqmskbg.style.display = 'block'
		}
		button12.classList.add('yellowbutton')
		button12.innerHTML = '您的健<br>康报告'
		sum.innerHTML = ans
	})
	jsqnone()
}
let jsqnone = () => {
	let jsqmskbg = document.getElementsByClassName('jsqmskbg')[0]
	let jsqmsk = document.getElementsByClassName('jsqmsk')[0]
	jsqmskbg.addEventListener('touchstart', () => {
		jsqmsk.style.display = 'none'
		jsqmskbg.style.display = 'none'
	})
	jsqmsk.addEventListener('touchstart', () => {
		jsqmsk.style.display = 'none'
		jsqmskbg.style.display = 'none'
	})
}
