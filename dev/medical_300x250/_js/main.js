const start = ()=>{
	TweenLite.defaultEase = Power2.easeInOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})


	const tlHero = new TimelineMax({repeat:0, yoyo:true})
	// tl.from('.hero', .7, {:-90, ease:Power1.easeInOut})
	tlHero.from('.hero', 1, {x:0, y:-159, scale:.7, ease:Power2.easeOut})

	tl.add(tlHero)
	tl.from('.t1', .3, {opacity:0}, '+=.3')
	tl.add("cta", "+=.3")
	tl.from('.watch', .5, {y:"+=50"}, 'cta')
	tl.from('.green', .5, {y:"+=50"}, 'cta+=.1')

}

start()



module.exports = {};

