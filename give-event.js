function giveEvent() {
  let aTag1 = document.querySelectorAll('a');
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle
    , previousTitle
    , nextTitle;
 
  aTag1.forEach((aTag) => {
    //	 console.log(aTag)
    titleClass = document.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
    targetTitle = localStorage.getItem('board-swiper-current-title');
    //console.log(aTag.innerText, targetTitle);	   
    if (aTag.innerText.trim() === targetTitle || aTag.innerText === targetTitle ) {  
		 console.log(aTag.innerText[1], targetTitle[1]);
	 console.log(aTag.innerText[1] === targetTitle[1]); 
	      console.log(targetTitle);
      let classIndex = Array.from(titleClass).indexOf(aTag);
      console.log(classIndex);	
      console.log(titleClass[classIndex - 1]);	      
      localStorage.setItem('board-swiper-previous', titleClass[classIndex + 1].href);
      localStorage.setItem('board-swiper-next', titleClass[classIndex - 1].href);
      localStorage.setItem('board-swiper-previous-title', titleClass[classIndex + 1].innerText);
      localStorage.setItem('board-swiper-next-title', titleClass[classIndex - 1].innerText);
      previousTitle = titleClass[classIndex + 1].innerText;
      nextTitle = titleClass[classIndex - 1].innerText;
    }
    aTag.addEventListener('click', (e) => {
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
      console.log(e.target.innerText)	    
      if (titleClass.length > 1) {	    
        localStorage.setItem('board-swiper-class-name',  getClassName);
        localStorage.setItem('board-swiper-current-title', e.target.innerText);
      }

    });
  });

};
