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

//window.addEventListener('contextmenu', (e) => {e.preventDefault();})

let pointer = document.createElement('div');
pointer.id = 'board-swiper';
pointer.style.position = 'fixed';
//pointer.style.borderRadius = '50%';
pointer.style.border = 'hsl(0, 0%, 80%)';
pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
pointer.style.width = '200px';
pointer.style.textIndent = '30px';
pointer.style.height = '20px';
pointer.style.zIndex = '10000';

let mouseTime = 0
, mouseTimer
, posX = 0
, posY = 0;

window.addEventListener('mousedown', (e) => {
  mouseTimer = setInterval(() => {
	mouseTime++;
//  mouseTime >= 150 ? 	  
}, 10);
	posX = e.clientX;
	posY = e.clientY;  	 
});

window.addEventListener('contextmenu', (e) => {
 
})

window.addEventListener('mouseup', (e) => {
  clearInterval(mouseTimer);
  console.log(mouseTime);
  console.log(posX, posY);
  console.log(e.clientX, e.clientY);
  console.log(e.button)
  let isSwiped = e.clientX - posX;	
  if (isSwiped >= 30 || isSwiped <= -30) {
    	  
    posX > e.clientX ? console.log('right') : console.log('left');
/*
    pointer.style.display = 'block';
    pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
    pointer.style.color = 'black'; 
    pointer.innerText = posX > e.clientX ? '다음 글로 넘어가기' : '이전 글로 돌아가기';	 
    pointer.style.top = e.clientY + 'px';
    pointer.style.left = e.clientX + 'px';
	 */ 
    document.body.appendChild(pointer);  
    mouseTime = 0;
  }
});

/*
pointer.addEventListener('mouseover', (e) => {
 pointer.style.display = 'block';
 console.log('hello')	
 pointer.style.backgroundColor = 'hsl(230, 100%, 50%, 0.5)';
 pointer.style.color = 'white'; 
})

pointer.addEventListener('mouseout', (e) => {
  pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
  pointer.style.color = 'black';

  pointer.animate([
    { backgroundColor :'hsl(0, 0%, 80%, 0.5)',
      color :'hsl(0, 0%, 0%, 1)',
    },
    { backgroundColor :'hsl(0, 0%, 80%, 0)',
      color :'hsl(0, 0%, 0%, 0)',
    },  
  ], {duration: 500});

  setTimeout(() => {
  pointer.style.display = 'none';
  }, 500);
})
*/
