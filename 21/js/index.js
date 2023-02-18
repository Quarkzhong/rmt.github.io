let str111
let one = () => {
	str111= document.getElementsByClassName('threebody')[0].innerHTML
	let sum = document.getElementById('onesum')
	let img = document.getElementById('zuqiu')
	let button = document.getElementById('onebutton')
	setTimeout(() => {
		sum.style.width = '22vw'
		button.style.width = '36vw'
	}, 0)
	setTimeout(() => {
		sum.style.width = '17vw'
		button.style.width = '32vw'
	}, 1000)
	let ones = setInterval(() => {
		setTimeout(() => {
			sum.style.width = '22vw'
			button.style.width = '36vw'
		}, 0)
		setTimeout(() => {
			sum.style.width = '17vw'
			button.style.width = '32vw'
		}, 1000)
	}, 2000)
	setTimeout(() => {
		img.style.left = '89%'
		img.style.transform = 'rotate(720deg)'
	}, 0)
	setTimeout(() => {
		img.style.left = '0%'
		img.style.transform = 'rotate(0deg)'
	}, 2000)
	let zuqiu = setInterval(() => {
		setTimeout(() => {
			img.style.left = '89%'
			img.style.transform = 'rotate(720deg)'
			sum.style.width = '22vw'
			button.style.width = '36vw'
		}, 0)
		setTimeout(() => {
			img.style.left = '0%'
			img.style.transform = 'rotate(0deg)'
			sum.style.width = '17vw'
			button.style.width = '32vw'
		}, 2000)
	}, 4000)
}
let loading = () => {
	let mskzd = document.getElementById('mskzd')
	let msknumber = document.getElementById('msknumber')
	let sum = 0
	let dsq = setInterval(() => {
		mskzd.style.width = sum * 0.8 + 'vw'
		msknumber.innerHTML = sum + '%'
		if (sum++ == 100) {
			clearInterval(dsq)
			document.getElementsByClassName('loading')[0].style.transition = 'all .5s'
			document.getElementsByClassName('loading')[0].style.opacity = '0'
			let music=document.getElementById('music')
			music.play()
			musicflag=1
			setTimeout(() => {
				document.getElementsByClassName('loading')[0].style.display = 'none'
			}, 500)
		}
	}, 50)

}
let musicflag=0
let stopmusic=()=>{
	let music=document.getElementById('music')
	if (musicflag==1){
		musicflag=0
		music.pause()
	}else{
		music.play()
		musicflag=1
	}
}
let go = () => {
	let one = document.getElementsByClassName('one')
	one[0].style.transition = 'all 0.5s ease 0s'
	one[0].style.opacity = '0'
	setTimeout(() => {
		one[0].style.display = 'none'
	}, 500)
}
let two = () => {
	let sum = document.getElementById('twosum')
	let button = document.getElementById('twobutton')
	setTimeout(() => {
		sum.style.width = '22vw'
		button.style.width = '36vw'
	}, 0)
	setTimeout(() => {
		sum.style.width = '17vw'
		button.style.width = '32vw'
	}, 1000)
	let ones = setInterval(() => {
		setTimeout(() => {
			sum.style.width = '22vw'
			button.style.width = '36vw'
		}, 0)
		setTimeout(() => {
			sum.style.width = '17vw'
			button.style.width = '32vw'
		}, 1000)
	}, 2000)

	let text = document.getElementById('twotext')
	let text2 = text.getElementsByTagName('span')
	let index = 0
	let index2 = 0
	let gao = setInterval(() => {
		let dsq = setInterval(() => {
			text2[index++].style.top = '-20%'
			if (index > 6) {
				index = 0
				clearInterval(dsq)
			}
		}, 1000 / 10)
	}, 1000)
	setTimeout(() => {
		let di = setInterval(() => {
			let dsq = setInterval(() => {
				text2[index2++].style.top = '20%'
				if (index2 > 6) {
					index2 = 0
					clearInterval(dsq)
				}
			}, 1000 / 10)
		}, 1000)
	}, 1500)
	document.getElementById('twobutton').onclick = () => {
		let two = document.getElementsByClassName('two')
		two[0].style.transition = 'all 0.5s ease 0s'
		two[0].style.opacity = '0'
		setTimeout(() => {
			two[0].style.display = 'none'
			onclickshijian()
		}, 500)
	}
}

let fanghuitoone = () => {
	let one = document.getElementsByClassName('one')
	one[0].style.display = 'block'
	one[0].style.transition = 'all 0.5s ease 0s'
	setTimeout(() => {
		one[0].style.opacity = '1'
	}, 500)
}

let fanghuitotwo = () => {
	let two = document.getElementsByClassName('two')
	two[0].style.display = 'block'
	two[0].style.transition = 'all 0.5s ease 0s'
	setTimeout(() => {
		two[0].style.opacity = '1'
	}, 500)
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
let getdianji = () => {
	return dianji
}
let three = () => {

	let sum = document.getElementById('threesum')
	let button = document.getElementById('threebutton')
	setTimeout(() => {
		sum.style.width = '22vw'
		button.style.width = '36vw'
	}, 0)
	setTimeout(() => {
		sum.style.width = '17vw'
		button.style.width = '32vw'
	}, 1000)
	let ones = setInterval(() => {
		setTimeout(() => {
			sum.style.width = '22vw'
			button.style.width = '36vw'
		}, 0)
		setTimeout(() => {
			sum.style.width = '17vw'
			button.style.width = '32vw'
		}, 1000)
	}, 2000)
	let text = document.getElementById('threetext')
	let text2 = text.getElementsByTagName('span')
	let index = 0
	let index2 = 0
	let gao = setInterval(() => {
		let dsq = setInterval(() => {
			text2[index++].style.top = '-20%'
			if (index > 4) {
				index = 0
				clearInterval(dsq)
			}
		}, 1000 / 10)
	}, 1000)
	setTimeout(() => {
		let di = setInterval(() => {
			let dsq = setInterval(() => {
				text2[index2++].style.top = '20%'
				if (index2 > 4) {
					index2 = 0
					clearInterval(dsq)
				}
			}, 1000 / 10)
		}, 1000)
	}, 1500)
	document.getElementById('threebutton').onclick = () => {
		updatazz()
		let three = document.getElementsByClassName('three')
		three[0].style.transition = 'all 0.5s ease 0s'
		three[0].style.opacity = '0'
		setTimeout(() => {
			three[0].style.display = 'none'
			wjxantim()
		}, 500)
	}
}
let updatazz = () => {
	let froubody = document.getElementsByClassName('froubody')
	let str = ''
	for (var i = 0; i < arr.length; i++) {
		str += `
					<div class="frouitem">
						` + arr[i] + `
					</div>
					`
	}
	froubody[0].innerHTML = str
	let defeng = document.getElementById('defeng')
	defeng.innerHTML = parseInt(getdianji()) * 0.5
	let wjxa = document.getElementsByClassName("wjx")
	let str1 = ''
	for (var i = 0; i < parseInt(getdianji() * 0.5); i++) {
		str1 += `<img src="img/p4/五角星满.png" alt="">`
	}
	for (var i = 0; i < ((getdianji() * 0.5) % 1) * 2; i++) {
		str1 += `<img src="img/p4/五角星半满.png" alt="">`
	}
	for (var i = 0; i < parseInt(5 - getdianji() * 0.5); i++) {
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

let fanghuitothree = () => {
	let three = document.getElementsByClassName('three')
	three[0].style.display = 'block'
	three[0].style.transition = 'all 0.5s ease 0s'
	setTimeout(() => {
		three[0].style.opacity = '1'
	}, 500)
}


let frou = () => {

	let sum = document.getElementById('frousum')
	let button = document.getElementById('froubutton')
	setTimeout(() => {
		sum.style.width = '22vw'
		button.style.width = '36vw'
	}, 0)
	setTimeout(() => {
		sum.style.width = '17vw'
		button.style.width = '32vw'
	}, 1000)
	let ones = setInterval(() => {
		setTimeout(() => {
			sum.style.width = '22vw'
			button.style.width = '36vw'
		}, 0)
		setTimeout(() => {
			sum.style.width = '17vw'
			button.style.width = '32vw'
		}, 1000)
	}, 2000)
	let text = document.getElementById('froutext')
	let text2 = text.getElementsByTagName('span')
	let index = 0
	let index2 = 0
	let gao = setInterval(() => {
		let dsq = setInterval(() => {
			text2[index++].style.top = '-20%'
			if (index > 6) {
				index = 0
				clearInterval(dsq)
			}
		}, 1000 / 10)
	}, 1000)
	setTimeout(() => {
		let di = setInterval(() => {
			let dsq = setInterval(() => {
				text2[index2++].style.top = '20%'
				if (index2 > 6) {
					index2 = 0
					clearInterval(dsq)
				}
			}, 1000 / 10)
		}, 1000)
	}, 1500)

	document.getElementById('froubutton').onclick = () => {
		updatazz()
		let frou = document.getElementsByClassName('frou')
		frou[0].style.transition = 'all 0.5s ease 0s'
		frou[0].style.opacity = '0'
		setTimeout(() => {
			frou[0].style.display = 'none'
			five()
		}, 500)
	}
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
let five = () => {
	let button = document.getElementById('fivebutton')
	setTimeout(() => {
		button.style.width = '36vw'
	}, 0)
	setTimeout(() => {
		button.style.width = '32vw'
	}, 1000)
	let ones = setInterval(() => {
		setTimeout(() => {
			button.style.width = '36vw'
		}, 0)
		setTimeout(() => {
			button.style.width = '32vw'
		}, 1000)
	}, 2000)
	let img = document.getElementById('bzs')
	setTimeout(() => {
		img.style.transform = 'scale(1.1)'
	}, 1)
	setTimeout(() => {
		img.style.transform = 'scale(1.3)'
	}, 1000)
	setTimeout(() => {
		img.style.transform = 'scale(1.1)'
	}, 2000)
	setTimeout(() => {
		img.style.transform = 'scale(1.3)'
	}, 3000)
	setTimeout(() => {
		img.style.transform = 'scale(1.1)'
	}, 4000)
	setTimeout(() => {
		img.style.transform = 'scale(1.3)'
	}, 5000)
}
let fivefanghuitotwo=()=>{
	let one = document.getElementsByClassName('one')
	let two = document.getElementsByClassName('two')
	let three = document.getElementsByClassName('three')
	let frou = document.getElementsByClassName('frou')
	one[0].style.display = 'block'
	two[0].style.display = 'block'
	three[0].style.display = 'block'
	frou[0].style.display = 'block'
	setTimeout(() => {
		one[0].style.opacity = '1'
		two[0].style.opacity = '1'
		three[0].style.opacity = '1'
		frou[0].style.opacity = '1'
	}, 500)
	arr=[]
	dianji=0
	document.getElementsByClassName('threebody')[0].innerHTML=str111;
	onclickshijian()
}

let fanghuitofrou=()=>{
	let frou = document.getElementsByClassName('frou')
	frou[0].style.display = 'block'
	setTimeout(() => {
		frou[0].style.opacity = '1'
	}, 500)
}