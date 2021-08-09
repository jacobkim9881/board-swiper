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
    //	 
    titleClass = document.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
    targetTitle = localStorage.getItem('board-swiper-current-title');
    //	   
    if (aTag.innerText.trim() === targetTitle || aTag.innerText === targetTitle ) {  
		 
	  
	      
      let classIndex = Array.from(titleClass).indexOf(aTag);
      	
      	      
      localStorage.setItem('board-swiper-previous', titleClass[classIndex + 1].href);
      localStorage.setItem('board-swiper-next', titleClass[classIndex - 1].href);
      localStorage.setItem('board-swiper-previous-title', titleClass[classIndex + 1].innerText);
      localStorage.setItem('board-swiper-next-title', titleClass[classIndex - 1].innerText);
      previousTitle = titleClass[classIndex + 1].innerText;
      nextTitle = titleClass[classIndex - 1].innerText;
    }
    aTag.addEventListener('click', (e) => {
            	   
      	    
      let getClassName = e.target.className;
		    
      
      if (getClassName.length === 0) {return;};	    
      titleClass = document.querySelectorAll('.' + getClassName);
      let eIndex = Array.from(titleClass).indexOf(e.target);
      	    
          
         
      isPreTitle = titleClass[eIndex + 1] === undefined ? false : true;
      isNeTitle = titleClass[eIndex - 1] === undefined ? false : true;
      pHref = isPreTitle ? titleClass[eIndex + 1].href : undefined;
      nHref = isNeTitle ? titleClass[eIndex - 1].href : undefined;
      	    
      	   
          
      	    
      	   
      	    
      if (titleClass.length > 1) {	    
        localStorage.setItem('board-swiper-class-name',  getClassName);
        localStorage.setItem('board-swiper-current-title', e.target.innerText);
      }

    });
  });

};
