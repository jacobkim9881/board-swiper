function giveEvent() {
let aTag1 = document.querySelectorAll('a'),
aTag2,
iframes = document.querySelectorAll('iframe');

console.log(iframes)

iframes.forEach((doc) => {
console.log(doc)	
 doc = doc.contentDocument;

 pageMover(doc);	
 let aTag3 = doc.querySelectorAll('a')
 , isPreTitle
 , isNeTitle
 , pHref
 , nHref
 , titleClass;	
 titleClass = doc.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));

 aTag3.forEach((aTag) => {
//	 console.log(aTag)
    aTag.addEventListener('click', (e) => {	    
	    setTimeout( () => giveEvent(), 1000);
	    console.log(e)      	    
      let getClassName = e.target.className;
      titleClass = doc.querySelectorAll('.' + getClassName);
      let eIndex = Array.from(titleClass).indexOf(e.target);
      console.log(eIndex)	    
      console.log(titleClass[eIndex + 1]);    
      console.log(titleClass[eIndex - 1]);   
      isPreTitle = titleClass[eIndex + 1] === undefined ? false : true;
      isNeTitle = titleClass[eIndex - 1] === undefined ? false : true;
      pHref = isPreTitle ? titleClass[eIndex + 1].href : undefined;
      nHref = isNeTitle ? titleClass[eIndex - 1].href : undefined;
      console.log(e.target)	    
     console.log(e)	   
      console.log(pHref, nHref);    
      console.log(Array.from(titleClass));	    
      console.log(titleClass, eIndex, pHref);	  
      if (titleClass.length > 1) {	    
      localStorage.setItem('board-swiper-class-name',  getClassName);
      localStorage.setItem('board-swiper-previous-idx', (eIndex + 1));
      localStorage.setItem('board-swiper-next-idx',  (eIndex - 1));
      localStorage.setItem('board-swiper-previous', pHref);
      localStorage.setItem('board-swiper-next', nHref);
      }
   });
 });

});
};

function giveEvent2() {
let aTag1 = document.querySelectorAll('a');
 let isPreTitle
 , isNeTitle
 , pHref
 , nHref
 , titleClass;

 aTag1.forEach((aTag) => {
//	 console.log(aTag)
    aTag.addEventListener('click', (e) => {
	    setTimeout( () => giveEvent(), 1000);
	    console.log(e)      	    
      let getClassName = e.target.className;
      titleClass = doc.querySelectorAll('.' + getClassName);
      let eIndex = Array.from(titleClass).indexOf(e.target);
      console.log(eIndex)	    
      console.log(titleClass[eIndex + 1]);    
      console.log(titleClass[eIndex - 1]);   
      isPreTitle = titleClass[eIndex + 1] === undefined ? false : true;
      isNeTitle = titleClass[eIndex - 1] === undefined ? false : true;
      pHref = isPreTitle ? titleClass[eIndex + 1].href : undefined;
      nHref = isNeTitle ? titleClass[eIndex - 1].href : undefined;
      console.log(e.target)	    
     console.log(e)	   
      console.log(pHref, nHref);    
      console.log(Array.from(titleClass));	    
      console.log(titleClass, eIndex, pHref);	   
      localStorage.setItem('board-swiper-class-name',  getClassName);
      localStorage.setItem('board-swiper-previous-idx', (eIndex + 1));
      localStorage.setItem('board-swiper-next-idx',  (eIndex - 1));
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

window.addEventListener('popstate', function() {
giveEvent();
giveEvent2();	
}, false);


function pageMover(element) {
if (element === null) {return;};	
let pointer = element.createElement('div')
, targetUrl
, targetIdx	
, targetName
, targetClass
, isPreTitle
, isNeTitle
, pHref
, nHref;
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

element.addEventListener('mousedown', (e) => {
  mouseTimer = setInterval(() => {
	mouseTime++;
//  mouseTime >= 150 ? 	  
}, 10);
	posX = e.clientX;
	posY = e.clientY;  	 
});

element.addEventListener('contextmenu', (e) => {
 
})

element.addEventListener('mouseup', (e) => {
  clearInterval(mouseTimer);
  console.log(mouseTime);
  console.log(posX, posY);
  console.log(e.clientX, e.clientY);
  console.log(e.button)
  let isSwiped = e.clientX - posX;	
  if (isSwiped >= 30 || isSwiped <= -30) {
    	  
    posX > e.clientX ? console.log('right') : console.log('left');
    targetName = posX > e.clientX ? 'previous' : 'next'	  
    targetUrl = localStorage.getItem('board-swiper-' + targetName);
    targetIdx = localStorage.getItem('board-swiper-' + targetName + '-idx');
	  console.log(targetUrl);
	  console.log(targetIdx)
    pointer.style.display = 'block';
    pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
    pointer.style.color = 'black'; 
    pointer.innerText = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : posX > e.clientX ? '이전 글로 가기' : '다음 글로 가기';	
    pointer.style.top = (e.clientY - 10) + 'px';
    posX = posX > e.clientX ? (e.clientX - 220) + 'px' : (e.clientX + 20) + 'px';	  
    pointer.style.left = posX;
	  
    element.body.appendChild(pointer); 
    mouseTime = 0;
  }
});


pointer.addEventListener('mouseover', (e) => {
 pointer.style.display = 'block';
 pointer.style.backgroundColor = 'hsl(230, 100%, 50%, 0.5)';
 pointer.style.color = 'white';
 console.log(targetIdx);
 targetClass = element.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
 targetIdx = parseInt(targetIdx);	
 console.log(targetClass)	
 isPreTitle = targetClass[targetIdx + 1] === undefined ? false : true;
 isNeTitle = targetClass[targetIdx - 1] === undefined ? false : true;
 pHref = isPreTitle ? targetClass[targetIdx + 1].href : undefined;
 nHref = isNeTitle ? targetClass[targetIdx - 1].href : undefined;	
 console.log(targetClass[targetIdx + 1], isPreTitle, pHref);	
 localStorage.setItem('board-swiper-previous-idx', (targetIdx + 1));
 localStorage.setItem('board-swiper-next-idx',  (targetIdx - 1));
 localStorage.setItem('board-swiper-previous', pHref);
 localStorage.setItem('board-swiper-next', nHref);
 targetUrl !== 'undefined' ? localStorage.setItem('board-swiper-current-idx', targetIdx) : false;
 targetUrl !== 'undefined' ? window.open(targetUrl, '_self') : false;	
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
}

pageMover(document);
