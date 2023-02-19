let loading = () => {
	let nunber = document.getElementsByClassName('loadnumber')[0]
	let sum = 0
	let zd = document.getElementsByClassName('zd')[0]
	let dsq1 = setInterval(() => {
		nunber.innerHTML = sum + '%'
		zd.style.width = sum * 0.9 + 'vw'
		sum++
		if (sum > 100) {
			clearInterval(dsq1)
			document.getElementsByClassName('loading')[0].style.opacity = '0'
			setTimeout(() => {
				document.getElementsByClassName('loading')[0].style.display = 'none'
				two()
			}, 1000)
		}
	}, 20)
}

let two = () => {
	let button = document.getElementsByClassName('button')[0]
	button.addEventListener('click', () => {
		document.getElementsByClassName('two')[0].style.opacity = '0'
		setTimeout(() => {
			document.getElementsByClassName('two')[0].style.display = 'none'
			three()
		}, 1000)
	})
}

let three = () => {
	let button = document.getElementsByClassName('button')[1]
	button.addEventListener('click', () => {
		document.getElementsByClassName('three')[0].style.opacity = '0'
		setTimeout(() => {
			document.getElementsByClassName('three')[0].style.display = 'none'
			frou()
		}, 1000)
	})
	let fhuisyy = document.getElementsByClassName('fhui')[0]
	fhuisyy.addEventListener('click', () => {
		let two = document.getElementsByClassName('two')[0]
		two.style.display = 'block'
		two.style.transition='all 1s'
		two.style.opacity = '1'
	})
}


var dianji = 0
let arr = []
let onclickshijian = () => {

	let threebody = document.getElementsByClassName('threebody')[0]
	let zimu = document.getElementsByClassName('zimu')
	let threeweizi = document.getElementsByClassName('threeweizi')
	let flag = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
	$('#button1').onclick = () => {
		let imgbg = $('#img1')
		let zimu = $('#spanzimu1')
		let text = $('#spantext1')
		if (flag[0] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			zimu.style.color = 'red'
			text.style.color = 'red'
			flag[0] = 1
			dianji++
			arr.push('经常感冒')
		} else if (flag[0] == 1) {
			imgbg.src = 'img/p3/未选.png'
			zimu.style.color = 'green'
			text.style.color = 'white'
			flag[0] = 0
			dianji--
			arr.pop('经常感冒')
		}
	}
	$('#button2').onclick = () => {
		let imgbg = $('#img2')
		let zimu = $('#spanzimu2')
		let text = $('#spantext2')
		if (flag[1] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[1] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('失眠多梦')
		} else if (flag[1] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[1] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('失眠多梦')
		}
	}
	$('#button3').onclick = () => {
		let imgbg = $('#img3')
		let zimu = $('#spanzimu3')
		let text = $('#spantext3')
		if (flag[2] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			zimu.style.color = 'red'
			text.style.color = 'red'
			flag[2] = 1
			dianji++
			arr.push('精神压力大')
		} else if (flag[2] == 1) {
			imgbg.src = 'img/p3/未选.png'
			zimu.style.color = 'green'
			text.style.color = 'white'
			flag[2] = 0
			dianji--
			arr.pop('精神压力大')
		}
	}
	$('#button4').onclick = () => {
		let imgbg = $('#img4')
		let zimu = $('#spanzimu4')
		let text = $('#spantext4')
		if (flag[3] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[3] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('注意力不集中')
		} else if (flag[3] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[3] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('注意力不集中')
		}
	}
	$('#button5').onclick = () => {
		let imgbg = $('#img5')
		let zimu = $('#spanzimu5')
		let text = $('#spantext5')
		if (flag[4] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[4] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('记忆力下降')
		} else if (flag[4] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[4] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('记忆力下降')
		}
	}
	$('#button6').onclick = () => {
		let imgbg = $('#img6')
		let zimu = $('#spanzimu6')
		let text = $('#spantext6')
		if (flag[5] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[5] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('焦躁不安')
		} else if (flag[5] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[5] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('焦躁不安')
		}
	}
	$('#button7').onclick = () => {
		let imgbg = $('#img7')
		let zimu = $('#spanzimu7')
		let text = $('#spantext7')
		if (flag[6] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[6] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('恐惧胆怯')
		} else if (flag[6] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[6] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('恐惧胆怯')
		}
	}
	$('#button8').onclick = () => {
		let imgbg = $('#img8')
		let zimu = $('#spanzimu8')
		let text = $('#spantext8')
		if (flag[7] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[7] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('人际关系紧张')
		} else if (flag[7] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[7] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('人际关系紧张')
		}
	}
	$('#button9').onclick = () => {
		let imgbg = $('#img9')
		let zimu = $('#spanzimu9')
		let text = $('#spantext9')
		if (flag[8] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[8] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('睡眠紊乱')
		} else if (flag[8] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[8] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('睡眠紊乱')
		}
	}
	$('#button10').onclick = () => {
		let imgbg = $('#img10')
		let zimu = $('#spanzimu10')
		let text = $('#spantext10')
		if (flag[9] == 0) {
			imgbg.src = 'img/p3/对.png'
			imgbg.height = '78'
			flag[9] = 1
			zimu.style.color = 'red'
			text.style.color = 'red'
			dianji++
			arr.push('腰酸背痛')
		} else if (flag[9] == 1) {
			imgbg.src = 'img/p3/未选.png'
			flag[9] = 0
			zimu.style.color = 'green'
			text.style.color = 'white'
			dianji--
			arr.pop('腰酸背痛')
		}
	}
}

Array.prototype.pop = (str) => {
	let newarr = []
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != str) {
			newarr.push(arr[i])
		}
	}
	arr = newarr
}
let $ = (element) => {
	return document.querySelector(element)
}

let frou = () => {
	document.getElementById('froubutton').onclick = () => {
		updatazz()
		let frou = document.getElementsByClassName('frou')
		frou[0].style.transition = 'all 0.5s ease 0s'
		frou[0].style.opacity = '0'
		setTimeout(() => {
			frou[0].style.display = 'none'
			wjxantim()
			five()
		}, 500)
	}
	let fhuisyy = document.getElementsByClassName('fhui')[1]
	fhuisyy.addEventListener('click', () => {
		let three = document.getElementsByClassName('three')[0]
		three.style.display = 'block'
		three.style.transition='all 1s'
		three.style.opacity = '1'
	})
}



let wjxantim = () => {
	let wjx = document.getElementsByClassName("wjx")[0]
	let img = wjx.getElementsByTagName('img')
	let wjx1 = img[0]
	let wjx2 = img[1]
	let wjx3 = img[2]
	let wjx4 = img[3]
	let wjx5 = img[4]
	wjx1.style.top = '-7vh'
	wjx1.style.left = '-10vw'
	wjx2.style.top = '-7vh'
	wjx2.style.left = '-17vw'
	wjx3.style.top = '-7vh'
	wjx3.style.left = '-24vw'
	wjx4.style.top = '-7vh'
	wjx4.style.left = '-31vw'
	wjx5.style.top = '-7vh'
	wjx5.style.left = '-38vw'
	setTimeout(() => {
		wjx5.style.top = '0vh'
		wjx5.style.left = '0vw'
	}, 200)
	setTimeout(() => {
		wjx1.style.top = '0vh'
		wjx1.style.left = '0vw'
	}, 300)
	setTimeout(() => {
		wjx2.style.top = '0vh'
		wjx2.style.left = '0vw'
	}, 400)
	setTimeout(() => {
		wjx3.style.top = '0vh'
		wjx3.style.left = '0vw'
	}, 500)
	setTimeout(() => {
		wjx4.style.top = '0vh'
		wjx4.style.left = '0vw'
	}, 600)
}

let updatazz = () => {
	let fivebody = document.getElementsByClassName('fivebody')
	let str = ''
	for (var i = 0; i < arr.length; i++) {
		str += `
					<div class="fiveitem">
						` + arr[i] + `
					</div>
					`
	}
	fivebody[0].innerHTML = str
	let defeng = document.getElementById('defeng')
	defeng.innerHTML = parseInt(dianji) * 0.5
	let wjxa = document.getElementsByClassName("wjx")
	let str1 = ''
	for (var i = 0; i < parseInt(dianji * 0.5); i++) {
		str1 += `<img src="img/p4/五角星满.png" alt="">`
	}
	for (var i = 0; i < ((dianji * 0.5) % 1) * 2; i++) {
		str1 += `<img src="img/p4/五角星半满.png" alt="">`
	}
	for (var i = 0; i < parseInt(5 - dianji * 0.5); i++) {
		str1 += `<img src="img/p4/五角星空.png" alt="" >`
	}
	wjxa[0].innerHTML = str1
	let wjx = document.getElementsByClassName("wjx")[0]
	let img = wjx.getElementsByTagName('img')
	let wjx1 = img[0]
	let wjx2 = img[1]
	let wjx3 = img[2]
	let wjx4 = img[3]
	let wjx5 = img[4]
	wjx1.style.top = '-7vh'
	wjx1.style.left = '-10vw'
	wjx2.style.top = '-7vh'
	wjx2.style.left = '-17vw'
	wjx3.style.top = '-7vh'
	wjx3.style.left = '-24vw'
	wjx4.style.top = '-7vh'
	wjx4.style.left = '-31vw'
	wjx5.style.top = '-7vh'
	wjx5.style.left = '-38vw'
}

let five = () => {
	document.getElementById('fivebutton').onclick = () => {
		updatazz()
		let five = document.getElementsByClassName('five')
		five[0].style.transition = 'all 0.5s ease 0s'
		five[0].style.opacity = '0'
		setTimeout(() => {
			five[0].style.display = 'none'
			six()
		}, 500)
	}
	let fhuisyy = document.getElementsByClassName('fhui')[2]
	fhuisyy.addEventListener('click', () => {
		let frou = document.getElementsByClassName('frou')[0]
		frou.style.display = 'block'
		frou.style.transition='all 1s'
		frou.style.opacity = '1'
	})
}
let six = () => {
	let bzs = document.getElementsByClassName('bzs')[0]
	setTimeout(() => {
		bzs.style.transform = ' translate(-50%,-50%) scale(1.1)'
	}, 0)
	setTimeout(() => {
		bzs.style.transform = ' translate(-50%,-50%) scale(1.3)'
	}, 1000)
	setTimeout(() => {
		bzs.style.transform = ' translate(-50%,-50%) scale(1.1)'
	}, 2000)
	setTimeout(() => {
		bzs.style.transform = ' translate(-50%,-50%) scale(1.3)'
	}, 3000)
	setTimeout(() => {
		bzs.style.transform = ' translate(-50%,-50%) scale(1.1)'
	}, 4000)
	setTimeout(() => {
		bzs.style.transform = ' translate(-50%,-50%) scale(1.3)'
	}, 5000)
	let fhuishouye = document.getElementById('sixbutton')
	fhuishouye.addEventListener('click', () => {
		let two = document.getElementsByClassName('two')[0]
		two.style.display = 'block'
		two.style.opacity = '1'
		let three = document.getElementsByClassName('three')[0]
		three.style.display = 'block'
		three.style.opacity = '1'
		let frou = document.getElementsByClassName('frou')[0]
		frou.style.display = 'block'
		frou.style.opacity = '1'
		let five = document.getElementsByClassName('five')[0]
		five.style.display = 'block'
		five.style.opacity = '1'
	})
	let fhuisyy = document.getElementsByClassName('fhui')[3]
	fhuisyy.addEventListener('click', () => {
		let five = document.getElementsByClassName('five')[0]
		five.style.display = 'block'
		five.style.transition='all 1s'
		five.style.opacity = '1'
		wjxantim()
	})
}
