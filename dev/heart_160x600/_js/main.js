import {start} from  '../../_common/js/common.js'


TweenLite.from('.hero', .6, {x:"-=80", ease:Power1.easeIn})
TweenMax.from('.hero', .25, {scale:'+=.01', ease:Back.easeOut, yoyo:true, repeat:10, repeatDelay:.15, delay:.8})



start({x:"-=160"}, {x:-180,y:0,scale:.468})
