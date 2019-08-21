import '../../_common/js/common.js'

const start = ()=>{
	TweenLite.defaultEase = Power2.easeInOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})


	const tlHero = new TimelineMax({repeat:0, yoyo:true})
	// tl.from('.hero', .7, {:-90, ease:Power1.easeInOut})
	tlHero.from('.hero', 1, {x:0, y:-159, scale:.7, ease:Power2.easeOut})

	tl.add(tlHero)
	const t1_time = "+=.35"
	tl.from('.t1a', .01, {opacity:0} )
	tl.from('.t1b', .01, {opacity:0}, t1_time )
	tl.from('.t1c', .01, {opacity:0}, t1_time )
	tl.from('.t1d', .01, {opacity:0}, t1_time )
	tl.from('.t1e', .01, {opacity:0}, t1_time )

	// tl.add("watch", "+=.3")
	// tl.from('.watch', .5, {y:"+=50"}, 'cta')
	


	
	tl.to([".frame1", ".frame2"], .6, {y:"-=190", ease:Power1.easeInOut}, "+=1")
	tl.from('.cobalt', 1, {scale:.7, y:-80, ease:Power1.easeOut})
	

	tl.add(endFrame(), "-=.5")

}

const endFrame = ()=>{
	const tlEnd = new TimelineMax()
	const time = .01

	

	tlEnd.from('.t2a img', time, {opacity:0, ease:Power2.easeInOut}, 0)
	tlEnd.from('.t2b img', time, {opacity:0, ease:Power2.easeInOut}, .3)
	tlEnd.from('.t2c img', time, {opacity:0, ease:Power2.easeInOut}, .6)

	return tlEnd
}



start()



module.exports = {};

