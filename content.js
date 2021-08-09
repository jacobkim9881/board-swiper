( function contentsjs () {
let targetTitle
, targetIdx
, previousTitle
, nextTitle;

function giveEvent() {
let aTag1 = document.querySelectorAll('a'),
aTag2,
iframes = document.querySelectorAll('iframe');

console.log(iframes)

iframes.forEach((doc) => {
let frameWraper = document.createElement('div');
frameWraper.class = 'frame-wraper';	

console.log(doc)	
 doc = doc.contentDocument;

 pageMover(doc);	
 let aTag3 
 , isPreTitle
 , isNeTitle
 , pHref
 , nHref
 , titleClass;
 console.log(doc); 	
 if (doc === null) {return;};
 // if click txt_subhead then prevent from stopping script	
 let daumBoL = doc.querySelector('.txt_subhead');	
 if (daumBoL !== null) {
 console.log( daumBoL.href)
 daumBoL.addEventListener('click', (e) => {
 e.preventDefault();	 
 window.open(daumBoL.href, '_self')
 });
 }
 // if click txt_subhead then prevent from stopping script	

 console.log(doc.querySelector('.txt_subhead'));	
 titleClass = doc.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
 aTag3 = doc.querySelectorAll('a')
 targetTitle = localStorage.getItem('board-swiper-current-title');
console.log(targetTitle);
 aTag3.forEach((aTag, idx) => {
//	 console.log(aTag)
 if (aTag.innerText === targetTitle) {  
	 console.log(targetTitle);
      let classIndex = Array.from(titleClass).indexOf(aTag);
      console.log(classIndex);	 
      localStorage.setItem('board-swiper-previous', titleClass[classIndex + 1].href);
      localStorage.setItem('board-swiper-next', titleClass[classIndex - 1].href);
      previousTitle = titleClass[classIndex + 1].innerText;
      nextTitle = titleClass[classIndex - 1].innerText;
//      localStorage.setItem('board-swiper-previous-title', titleClass[classIndex + 1].innerText);	 
//      localStorage.setItem('board-swiper-next-title', titleClass[classIndex - 1].innerText);	 
     targetIdx = classIndex;
 }
    aTag.addEventListener('click', (e) => {	    
	    setTimeout( () => giveEvent(), 1000);
	    console.log(e)      	    
      let getClassName = e.target.className;
      console.log(getClassName);
      if(getClassName.length === 0) {return;};	    
      titleClass = doc.querySelectorAll('.' + getClassName);
      let eIndex = Array.from(titleClass).indexOf(e.target);
      co0nsole.log(eIndex)	    
      console.log(titleClass[eIndex + 1]);    
      console.log(titleClass[eIndex - 1]);   
      isPreTitle = titleClass[eIndex + 1] === undefined ? false : true;
      isNeTitle = titleClass[eIndex - 1] === undefined ? false : true;
      pHref = isPreTitle ? titleClass[eIndex + 1].href : undefined;
      nHref = isNeTitle ? titleClass[eIndex - 1].href : undefined;
      console.log(e.target)	    
     console.log(e)	   
      console.log(pHref, nHref);    
//      console.log(Array.from(titleClass));	    
//      console.log(titleClass, eIndex, pHref);	  
      if (titleClass.length > 1) {	    
      localStorage.setItem('board-swiper-class-name',  getClassName);
      localStorage.setItem('board-swiper-current-title', e.target.innerText);
/*	      
      localStorage.setItem('board-swiper-previous-idx', (eIndex + 1));
      localStorage.setItem('board-swiper-next-idx',  (eIndex - 1));
      localStorage.setItem('board-swiper-previous', pHref);
      localStorage.setItem('board-swiper-next', nHref);
      */
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
  titleClass = document.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
 targetTitle = localStorage.getItem('board-swiper-current-title');
//console.log(aTag.innerText, targetTitle);	    
      if (aTag.innerText === targetTitle) {  
	 console.log(targetTitle);
      let classIndex = Array.from(titleClass).indexOf(aTag);
      console.log(classIndex);	 
      localStorage.setItem('board-swiper-previous', titleClass[classIndex + 1].href);
      localStorage.setItem('board-swiper-next', titleClass[classIndex - 1].href);
      previousTitle = titleClass[classIndex + 1].innerText;
      nextTitle = titleClass[classIndex - 1].innerText;
//      localStorage.setItem('board-swiper-previous-title', titleClass[classIndex + 1].innerText);	 
//      localStorage.setItem('board-swiper-next-title', titleClass[classIndex - 1].innerText);	 
     targetIdx = classIndex;
 }
    aTag.addEventListener('click', (e) => {
//	    setTimeout( () => giveEvent(), 1000);
    console.log(e)      	   
      console.log(e.target.tagName);	    
      let getClassName = e.target.className;
		    console.log(getClassName.length);
    console.log(getClassName);
      if (getClassName.length === 0) {return;};	    
      titleClass = document.querySelectorAll('.' + getClassName);
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
      localStorage.setItem('board-swiper-current-title', e.target.innerText);
/*	      
      localStorage.setItem('board-swiper-previous-idx', (eIndex + 1));
      localStorage.setItem('board-swiper-next-idx',  (eIndex - 1));
      localStorage.setItem('board-swiper-previous', pHref);
      localStorage.setItem('board-swiper-next', nHref);
      */
      }

   });
 });

};

console.log(localStorage.getItem('board-swiper-previous'));
console.log(document.readyState);

if (document.readyState === "complete") {
console.log('loading was fast');	
//window.location.reload();	
//giveEvent();
//giveEvent2();	
}

window.addEventListener("load", function() {
console.log(document.readyState);
//giveEvent();
giveEvent2();	
}, false);

window.addEventListener('click', (e) => {
console.log(e.button);	
if (e.button === 3 || e.button ===4) {
//giveEvent();
//giveEvent2();	

}

});

window.addEventListener('popstate', (e) => {
//alert('pop 153');	
if (e.button === 3 || e.button ===4) {
//giveEvent();
//giveEvent2();	

}

});


function pageMover(element) {
if (element === null) {return;};	
let pointer = element.createElement('div')
, targetUrl
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
	
console.log('mover');
console.log(element)	
element.addEventListener('click', (e) => {
//e.stopImmediatePropagation();
console.log('hello');
}, true)
element.addEventListener('click', (e) => {
console.log(e.composedPath())
 if( e.composedPath().includes( element ) ) { // check that 'element' has really been clicked
    console.log('Extension is executed.');
 }
}, { capture: true }); 

element.addEventListener('mousedown', (e) => {
  mouseTimer = setInterval(() => {
	mouseTime++;
//  mouseTime >= 150 ? 	  
}, 10);
	posX = e.clientX;
	posY = e.clientY;  	 
});

element.addEventListener('mouseup', (e) => {

  clearInterval(mouseTimer);
  console.log(mouseTime);
  console.log(posX, posY);
  console.log(e.clientX, e.clientY);
  console.log(e.button)
  console.log(e);	
   if(e.button === 3 || e.button === 4) {
   let isGo = e.button === 4 ? 1 : -1;
   console.log(isGo, e.button);
   if (e.button === 3) {
   console.log(e.button);	   
//   window.open(document.referrer, '_self');
//   e.preventDefault();
   chrome.runtime.sendMessage(undefined,
    { name:'1'           
      }
  );
  
//   window.history.pushState(null, document.title, document.location.href);
   }
   	   
//   window.location.reload();	 
//   window.history.go(isGo);	 
//return;	   
//   e.button === 4 ? window.history.go(1) : window.history.go(-1);

   }

  let isSwiped = e.clientX - posX;	
  if (isSwiped >= 30 || isSwiped <= -30) {
    	  
    posX > e.clientX ? console.log('right') : console.log('left');
    targetName = posX > e.clientX ? 'previous' : 'next'	  
    targetUrl = localStorage.getItem('board-swiper-' + targetName);
//    targetIdx = localStorage.getItem('board-swiper-' + targetName + '-idx');
	  console.log(targetUrl);
	  console.log(targetIdx)
    pointer.style.display = 'block';
    pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
    pointer.style.color = 'black'; 
    pointer.innerText = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : posX > e.clientX ? previousTitle : nextTitle;	
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
/*	
 localStorage.setItem('board-swiper-previous-idx', (targetIdx + 1));
 localStorage.setItem('board-swiper-next-idx',  (targetIdx - 1));
 localStorage.setItem('board-swiper-previous', pHref);
 localStorage.setItem('board-swiper-next', nHref);
 */
 localStorage.setItem('board-swiper-current-title', e.target.innerText);	
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
})();
