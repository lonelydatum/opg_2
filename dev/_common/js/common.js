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


	
	const t1_time = "+=.3"
	tl.from('.t1a', .01, {opacity:0}, .4)
	tl.from('.t1b', .01, {opacity:0}, t1_time )
	tl.from('.t1c', .01, {opacity:0}, t1_time )
	tl.from('.t1d', .01, {opacity:0}, t1_time )
	tl.from('.t1e', .01, {opacity:0}, t1_time )

	// tl.add("watch", "+=.3")
	// tl.from('.watch', .5, {y:"+=50"}, 'cta')
	


	tl.set('.frame2', {opacity:1})
	tl.to([".frame1", ".frame2"], .6, {...pan, ease:Power1.easeInOut}, "+=1")

	const tlF2 = new TimelineMax()

	tlF2.from('.cobalt', 3, {...cobalt,  ease:Power1.easeOut}, 0)
	

	tlF2.add(endFrame(), .5)

	tl.add(tlF2)

}

const endFrame = ()=>{
	const tlEnd = new TimelineMax()
	const time = .01

	

	tlEnd.from('.t2a', time, {opacity:0, ease:Power2.easeInOut}, 0)
	tlEnd.from('.t2b', time, {opacity:0, ease:Power2.easeInOut}, .3)
	tlEnd.from('.t2c', time, {opacity:0, ease:Power2.easeInOut}, .6)

	return tlEnd
}









export {size, start}