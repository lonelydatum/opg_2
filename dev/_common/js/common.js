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

export {size}