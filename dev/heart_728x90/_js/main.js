import {start} from  '../../_common/js/common.js'


TweenLite.from('.hero', .7, { y:'-=50', ease:Power1.easeIn})
TweenMax.from('.hero', .25, {scale:'+=.01', ease:Back.easeOut, yoyo:true, repeat:10, repeatDelay:.15, delay:.8})



start({y:"-=90"}, {scale:.42})
