import {start} from  '../../_common/js/common.js'


const tlHero = new TimelineMax({repeat:2, yoyo:true})

const step = .05

TweenLite.set(".hero", {opacity:0})

tlHero.set(".hero1", {opacity:1}, 1.2)
tlHero.set(".hero1b", {opacity:1}, `+=${step}`)
tlHero.set(".hero2", {opacity:1}, `+=${step}`)
tlHero.set(".hero2b", {opacity:1}, `+=${step}`)
tlHero.set(".hero3", {opacity:1}, `+=${step}`)
tlHero.set(".hero4", {opacity:1}, `+=${step}`)
tlHero.set(".hero5", {opacity:1}, `+=${step}`)
// tlHero.set(".hero6", {opacity:1}, `+=${step}`)

start({x:"-=160"}, {x:-180,y:0,scale:.468})


TweenLite.set(".hero1", {opacity:1})