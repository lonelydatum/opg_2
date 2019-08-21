import '../../_common/js/common.js'

const start = ()=>{
	TweenLite.defaultEase = Power2.easeInOut
	const tl = new TimelineMax()
	tl.set('.frame1', {opacity:1})


	const tlHero = new TimelineMax({repeat:0, yoyo:true})
	// tl.from('.hero', .7, {:-90, ease:Power1.easeInOut})
	tlHero.from('.hero', 1, {x:0, y:-159, scale:.7, ease:Power2.easeOut})

	tl.add(tlHero)
	tl.from('.t1a', .3, {opacity:0} )
	tl.from('.t1b', .3, {opacity:0} )
	tl.from('.t1c', .3, {opacity:0} )
	tl.from('.t1d', .3, {opacity:0} )
	tl.from('.t1e', .3, {opacity:0} )

	// tl.add("watch", "+=.3")
	// tl.from('.watch', .5, {y:"+=50"}, 'cta')
	


	
	tl.to([".frame1", ".frame2"], .6, {y:"-=190", ease:Power1.easeInOut}, "+=2")
	tl.add(endFrame(), "+=.1")

}

const endFrame = ()=>{
	const tlEnd = new TimelineMax()
	const time = .4
	tlEnd.from('.t2a img', time, {y:"-100%", ease:Power2.easeInOut}, 0)
	tlEnd.from('.t2b img', time, {x:"-100%", ease:Power2.easeInOut}, .1)
	tlEnd.from('.t2c img', time, {y:"100%", ease:Power2.easeInOut}, .2)

	return tlEnd
}



start()



module.exports = {};

