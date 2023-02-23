let loading = () => {
	let dian = document.getElementsByClassName('dian')[0]
	let bfb = document.getElementsByClassName('bfb')[0]
	let sum = 0
	let dsq = setInterval(() => {
		bfb.innerHTML = sum + '%'
		if (++sum > 100) {
			clearInterval(dsq)
			let load = document.getElementsByClassName('loading')[0]
			load.style.transition = 'all 1s';
			load.style.opacity = '0'
			setTimeout(() => {
				load.style.display = 'none'
				one()
			}, 1000)
		}
	}, 15)
	let dsq2 = setInterval(() => {
		dian.innerHTML += '.'
		if (dian.innerHTML == '....') {
			dian.innerHTML = ''
		}
	}, 300)
}
let one = () => {
	let ks
	let end
	let onee = document.getElementsByClassName('one')[0]
	onee.addEventListener('touchstart', (e) => {
		ks = e.changedTouches[0].clientY
	})
	onee.addEventListener('touchend', (e) => {
		end = e.changedTouches[0].clientY
		if (ks - end > 100) {
			let box = document.getElementsByClassName('box')[0]
			let top = box.style.top
			box.style.transition = 'all 1s'
			box.style.top = parseInt(top) - 100 + 'vh'
			two()
		}
	})
}

let two = () => {
	let two = document.getElementsByClassName('two')[0]
	let xuan1 = document.getElementsByClassName('twoxuan')[0].getElementsByTagName('img')[0]
	let xuan2 = document.getElementsByClassName('twoxuan')[0].getElementsByTagName('img')[1]
	let xuan3 = document.getElementsByClassName('twoxuan')[0].getElementsByTagName('img')[2]
	let text = document.getElementsByClassName('twotext')[0]
	let bg = document.getElementsByClassName('twobg')[0]
	xuan1.addEventListener('click', () => {
		xuan1.src = 'img/p3/猪肉亮.png'
		xuan2.src = 'img/p3/葱姜不亮.png'
		xuan3.src = 'img/p3/冰糖不亮.png'
		text.src = 'img/p3/猪肉文字.png'
		bg.src = 'img/p3/猪肉.png'
	})
	xuan2.addEventListener('click', () => {
		xuan1.src = 'img/p3/猪肉不亮.png'
		xuan2.src = 'img/p3/葱姜亮.png'
		xuan3.src = 'img/p3/冰糖不亮.png'
		text.src = 'img/p3/姜葱文字.png'
		bg.src = 'img/p3/葱姜.png'
	})
	xuan3.addEventListener('click', () => {
		xuan1.src = 'img/p3/猪肉不亮.png'
		xuan2.src = 'img/p3/葱姜不亮.png'
		xuan3.src = 'img/p3/冰糖亮.png'
		text.src = 'img/p3/冰糖文字.png'
		bg.src = 'img/p3/冰糖.png'
	})
	let ks
	let end
	let twoo = document.getElementsByClassName('two')[0]
	twoo.addEventListener('touchstart', (e) => {
		ks = e.changedTouches[0].clientY
	})
	twoo.addEventListener('touchend', (e) => {
		end = e.changedTouches[0].clientY
		if (ks - end > 100) {
			let box = document.getElementsByClassName('box')[0]
			let top = box.style.top
			box.style.transition = 'all 1s'
			box.style.top = parseInt(top) - 100 + 'vh'

		}
	})
}
