const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut






banner.addEventListener("mouseenter", ()=>{
	const tl = new TimelineMax()
	tl.set(".line", {opacity:1})
	tl.fromTo(".line", .3, {scaleX:0}, {scaleX:1})
})


banner.addEventListener("mouseleave", ()=>{
	const tl = new TimelineMax()
	tl.set(".line", {opacity:1})
	tl.fromTo(".line", .3, {scaleX:1}, {scaleX:0})
})





const start = (pan={y:"-=190"}, cobalt={scale:.4})=>{
	TweenLite.defaultEase = Power2.easeInOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})


	
	const t1_time = "+=.22"
	tl.from('.t1a', .01, {opacity:0}, .4)
	tl.from('.t1b', .01, {opacity:0}, t1_time )
	tl.from('.t1c', .01, {opacity:0}, t1_time )
	tl.from('.t1d', .01, {opacity:0}, t1_time )
	tl.from('.t1e', .01, {opacity:0}, t1_time )

	// tl.add("watch", "+=.3")
	// tl.from('.watch', .5, {y:"+=50"}, 'cta')
	

	
	tl.set('.frame2', {opacity:1})
	tl.to([".frame1", ".frame2"], .6, {...pan, ease:Power1.easeInOut}, "+=1.8")

	const tlF2 = new TimelineMax()

	tlF2.from('.cobalt', 3, {...cobalt,  ease:Power1.easeOut}, 0)
	tl.add("framer2")

	tlF2.add(endFrame(), .5)

	tl.add(tlF2)

	// tl.gotoAndPlay("framer2")

}

const endFrame = ()=>{
	const tlEnd = new TimelineMax()
	const time = .01

	

	tlEnd.from('.t2a', time, {opacity:0, ease:Power2.easeInOut}, 0)
	tlEnd.from('.t2b', time, {opacity:0, ease:Power2.easeInOut}, .3)
	// tlEnd.from('.t2c', time, {opacity:0, ease:Power2.easeInOut}, .6)

	const list = ["power_p", "power_o", "power_w", "power_e", "power_r"]

	const tlLetter = new TimelineMax()

	list.map(item=>{
		
		const letter = colorChanger(item)
		tlLetter.add(letter, '-=.3')
	})


	
	const tlLiner = new TimelineMax()
	tlLiner.from('.power_line', .2, {opacity:0 })
	tlLiner.to('.power_line', .6, {width: 180, x:"+=220" }, '-=.2')
	tlLiner.to('.power_line', .2, {opacity:0 }, "-=.2")


	tlEnd.add(tlLetter, .3)
	tlEnd.add(tlLiner, .3)
	

	return tlEnd
}

const colorChanger = (id)=>{
	const power = new TimelineMax()
	const color_from = 'rgba(102, 204, 0, 0)'
	const color_to = 'rgba(102, 204, 0, 1)'

	const white_from = 'rgba(255, 255, 255, 0)'
	const white_to = 'rgba(255, 255, 255, 1)'

	power.fromTo(`#${id}`, .1, {fill:color_from}, {fill:color_to}, 0)
	power.to(`#${id}`, .3, {fill:white_to}, "+=0")
	return power
}









export {size, start}