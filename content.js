function giveEvent() {
let aTag1 = document.querySelectorAll('a'),
aTag2,
iframes = document.querySelectorAll('iframe');

console.log(iframes)

iframes.forEach((doc) => {
console.log(doc)	
 doc = doc.contentDocument;
 let aTag3 = doc.querySelectorAll('a');	
 aTag3.forEach((aTag) => {
//	 console.log(aTag)
    aTag.addEventListener('click', (e) => {
	    setTimeout( () => giveEvent(), 1000);
	    console.log(e)
      let getClassName = e.target.className,
      titleClass = doc.querySelectorAll('.' + getClassName),
      eIndex = Array.from(titleClass).indexOf(e.target),
      pHref = titleClass[eIndex - 1].href;
      nHref = titleClass[eIndex + 1].href;
      console.log(e.target)	    
     console.log(e)	    
      console.log(Array.from(titleClass));	    
      console.log(titleClass, eIndex, pHref);	    
      localStorage.setItem('board-swiper-previous', pHref);
      localStorage.setItem('board-swiper-next', nHref);
   });
 });

});
};

function giveEvent2() {
let aTag1 = document.querySelectorAll('a');

 aTag1.forEach((aTag) => {
//	 console.log(aTag)
    aTag.addEventListener('click', (e) => {
	    setTimeout( () => giveEvent2(), 1000);
	    console.log(e)
      let getClassName = e.target.className,
      titleClass = document.querySelectorAll('.' + getClassName),
      eIndex = Array.from(titleClass).indexOf(e.target),
      pHref = titleClass[eIndex - 1].href;
      nHref = titleClass[eIndex + 1].href;
      console.log(e.target)	    
     console.log(e)	    
      console.log(Array.from(titleClass));	    
      console.log(titleClass, eIndex, pHref);	    
      localStorage.setItem('board-swiper-previous', pHref);
      localStorage.setItem('board-swiper-next', nHref);
   });
 });

};

console.log(localStorage.getItem('board-swiper-previous'));
window.addEventListener("load", function() {
giveEvent();
giveEvent2();	
}, false); 
