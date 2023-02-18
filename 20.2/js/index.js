let loading = () => {
	let dian = document.getElementById('dian')
	let number = document.getElementsByClassName('loadingnum')[0]
	let sum = 0
	let index = 0
	setInterval(() => {
		dian.innerHTML += '·'
		index++
		if (index > 3) {
			index = 0
			dian.innerHTML = ''
		}
	}, 200)
	let dsq = setInterval(() => {
		number.innerHTML = sum + '%'
		sum++
		if (sum > 100) {
			clearInterval(dsq)

			// 这里写跳转到one页面的代码.........
			let load = document.getElementsByClassName('loading')[0]
			load.style.opacity = '0'
			setTimeout(() => {
				load.style.display = 'none'
				//这里要播放音乐，直接调用函数
				musicplay()
				palymusic()
			}, 1000)
			two()
			//这里提前注册几个页面的跳转事件，这段代码可以移动到任何地方
			let one1 = document.getElementsByClassName('one')[0]
			let two1 = document.getElementsByClassName('two')[0]
			let three1 = document.getElementsByClassName('three')[0]
			down(one1)
			down(two1)
			up(two1)
			up(three1)
		}
	}, 20)
}


let two = () => {
	let twozr = document.getElementById('twozr')
	let twojc = document.getElementById('twojc')
	let twobt = document.getElementById('twobt')
	let text = document.getElementById('twotext')
	let bg = document.getElementById('twobg')
	twozr.addEventListener('click', () => {
		twozr.src = "img/p3/猪肉亮.png"
		twojc.src = "img/p3/葱姜不亮.png"
		twobt.src = "img/p3/冰糖不亮.png"
		bg.src = "img/p3/猪肉.png"
		text.src = "img/p3/猪肉文字.png"
	})
	twojc.addEventListener('click', () => {
		twozr.src = "img/p3/猪肉不亮.png"
		twojc.src = "img/p3/葱姜亮.png"
		twobt.src = "img/p3/冰糖不亮.png"
		bg.src = "img/p3/葱姜.png"
		text.src = "img/p3/姜葱文字.png"
	})
	twobt.addEventListener('click', () => {
		twozr.src = "img/p3/猪肉不亮.png"
		twojc.src = "img/p3/葱姜不亮.png"
		twobt.src = "img/p3/冰糖亮.png"
		bg.src = "img/p3/冰糖.png"
		text.src = "img/p3/冰糖文字.png"
	})
}


let down = (elememt) => {
	let touchstartY
	let touchendY
	elememt.addEventListener('touchstart', (e) => {
		touchstartY = e.changedTouches[0].clientY
	})
	elememt.addEventListener('touchend', (e) => {
		touchendY = e.changedTouches[0].clientY
		if (touchstartY - touchendY > 200) {
			let box = document.getElementsByClassName('box')[0]
			let sum = parseInt(box.style.top)
			box.style.top = (sum - 100) + 'vh'
		}
	})
}
let up = (elememt) => {
	let touchstartY
	let touchendY
	elememt.addEventListener('touchstart', (e) => {
		touchstartY = e.changedTouches[0].clientY
	})
	elememt.addEventListener('touchend', (e) => {
		touchendY = e.changedTouches[0].clientY
		if (touchstartY - touchendY < -200) {
			let box = document.getElementsByClassName('box')[0]
			let sum = parseInt(box.style.top)
			box.style.top = (sum + 100) + 'vh'
		}
	})
}

let musicplay = () => {
	let topmusic = document.getElementById('topmusic')
	topmusic.play()
}
let musicstop = () => {
	let topmusic = document.getElementById('topmusic')
	topmusic.pause()
}
let palymusic = () => {
	let flag = 0
	let music1 = document.getElementsByClassName('music')[0].getElementsByTagName('img')[0]
	let music2 = document.getElementsByClassName('music')[1].getElementsByTagName('img')[0]
	let music3 = document.getElementsByClassName('music')[2].getElementsByTagName('img')[0]

	music1.addEventListener('click', () => {
		if (flag == 0) {
			flag = 1
			musicstop()
			document.getElementsByClassName('music')[0].classList.remove('music-play')
			document.getElementsByClassName('music')[1].classList.remove('music-play')
			document.getElementsByClassName('music')[2].classList.remove('music-play')
		} else {
			flag = 0
			musicplay()
			document.getElementsByClassName('music')[0].classList.add('music-play')
			document.getElementsByClassName('music')[1].classList.add('music-play')
			document.getElementsByClassName('music')[2].classList.add('music-play')
		}
	})
	music2.addEventListener('click', () => {
		if (flag == 0) {
			flag = 1
			musicstop()
			document.getElementsByClassName('music')[0].classList.remove('music-play')
			document.getElementsByClassName('music')[1].classList.remove('music-play')
			document.getElementsByClassName('music')[2].classList.remove('music-play')
		} else {
			flag = 0
			musicplay()
			document.getElementsByClassName('music')[0].classList.add('music-play')
			document.getElementsByClassName('music')[1].classList.add('music-play')
			document.getElementsByClassName('music')[2].classList.add('music-play')
		}
	})
	music3.addEventListener('click', () => {
		if (flag == 0) {
			flag = 1
			musicstop()
			document.getElementsByClassName('music')[0].classList.remove('music-play')
			document.getElementsByClassName('music')[1].classList.remove('music-play')
			document.getElementsByClassName('music')[2].classList.remove('music-play')
		} else {
			flag = 0
			musicplay()
			document.getElementsByClassName('music')[0].classList.add('music-play')
			document.getElementsByClassName('music')[1].classList.add('music-play')
			document.getElementsByClassName('music')[2].classList.add('music-play')
		}
	})
}
