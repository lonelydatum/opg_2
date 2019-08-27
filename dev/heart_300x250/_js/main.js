import {start} from  '../../_common/js/common.js'

function heart(){
	const tl_hero = new TimelineMax({repeat:4})
	tl_hero.set(`#hero_${0}`, {opacity:1})

	

	const list = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 140, 160, 180, 200, 220, 240]

	list.map(item=>{
		tl_hero.set(`#hero_${item}`, {opacity:1}, "+=.12")
		
	})

	

	tl_hero.set(`#hero img`, {opacity:0})
	tl_hero.set(`#hero_${0}`, {opacity:1})

	// TweenMax.from('#hero', .4, {scale:'+=.1', ease:Back.easeOut, yoyo:true, repeat:10, repeatDelay:.15})


}

heart()

start()
