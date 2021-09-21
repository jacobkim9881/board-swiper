function giveEvent6() {
  let aTag1 = document.querySelectorAll('a[href]');
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle
    , currentStatus;
  
    titleClass = document.getElementsByClassName(localStorage.getItem('board-swiper-class-name'));	  
    currentStatus = localStorage.getItem('board-swiper-status');

	
   if (currentStatus !== 'ready') {	
      localStorage.setItem('board-swiper-next', 'no-url');
      localStorage.setItem('board-swiper-previous', 'no-url');
   }
  aTag1.forEach((aTag) => {
//
//
    targetTitle = localStorage.getItem('board-swiper-current-title');
    //
    if (titleClass.length > 0 && aTag.closest('td') !== null) {	 
    if (aTag.innerText.trim() === targetTitle || aTag.innerText === targetTitle ) {  
		 
	 
	      
	    
      let tdTag
	, tdTagLength    
	, previousTdTag
	, pTdTagLength    
	, nextTdTag   
	, nTdTagLength    
        , classIndex
	, aTagIndex
	, pAtagIndex
	, nAtagIndex    
	, previousAtag
	, nextAtag
	, lastIndex
	, targetATags;
      tdTag = aTag.closest('td');	   
	    
      tdTagLength = tdTag.querySelectorAll('a').length; 	    
      lastIndex = titleClass.length - 1;
      classIndex = Array.from(titleClass).indexOf(tdTag);
      aTagIndex = Array.from(tdTag.querySelectorAll('a')).indexOf(aTag);	   
      targetATags = document.getElementsByClassName(aTag.className);
      targetATagIndex = Array.from(targetATags).indexOf(aTag);	    

      if (lastIndex !== classIndex) {  
      previousTdTag = titleClass[classIndex + 1];      
      pTdTagLength = previousTdTag.querySelectorAll('a').length;	      
                
      previousAtag = tdTagLength === pTdTagLength ? 
		     previousTdTag.querySelectorAll('a')[aTagIndex] :
		     targetATags[targetATagIndex + 1];
      localStorage.setItem('board-swiper-previous', previousAtag.href);
      localStorage.setItem('board-swiper-previous-title', previousAtag.innerText);
      } else if (lastIndex === classIndex && lastIndex > 0) {
      localStorage.setItem('board-swiper-previous', previousAtag);
      localStorage.setItem('board-swiper-previous-title', '이 페이지의 마지막입니다.');
      }
      if (classIndex !== 0) {	    
      nextTdTag = titleClass[classIndex - 1];	      
      nTdTagLength = nextTdTag.querySelectorAll('a').length;	      
//    nAtagIndex = Array.from(nextTdTag.querySelectorAll('a')).indexOf(aTag);	    
      nextAtag = tdTagLength === nTdTagLength ? 
		      nextTdTag.querySelectorAll('a')[aTagIndex] :
		     targetATags[targetATagIndex - 1];
      localStorage.setItem('board-swiper-next-title', nextAtag.innerText);
      localStorage.setItem('board-swiper-next', nextAtag.href);
      } else if (classIndex === 0 && lastIndex > 0) {
      localStorage.setItem('board-swiper-next-title', '이 페이지의 첫 글입니다.');
      localStorage.setItem('board-swiper-next', nextAtag);
      }
      localStorage.setItem('board-swiper-status', 'ready');
      
      
      
      
      
      
      
    
    }
    }
      aTag.addEventListener('click', (e) => {
      if (e.target.closest('td') === null) {return};      
      let getClassName = e.target.closest('td').className;
		    
      
      if (getClassName.length === 0) {return;};	    
      titleClass = document.getElementsByClassName(getClassName);
      let eIndex = Array.from(titleClass).indexOf(e.target.closest('td'));
      
      
      
      isPreTitle = titleClass[eIndex + 1] === undefined ? false : true;
      isNeTitle = titleClass[eIndex - 1] === undefined ? false : true;
      pHref = isPreTitle ? titleClass[eIndex + 1].href : undefined;
      nHref = isNeTitle ? titleClass[eIndex - 1].href : undefined;
      
      
      
      
      
      
      if (titleClass.length > 1) {	   
        localStorage.setItem('board-swiper-class-name',  getClassName);
	let classLen = e.target.childNodes.length;      
        if (classLen > 1) {
        localStorage.setItem('board-swiper-current-title', e.target.childNodes[classLen - 1].data.trim());
	} else if (classLen === 1) {
        localStorage.setItem('board-swiper-current-title', e.target.innerText);
	}

      }
      //e.preventDefault();
      //return false;
    });
  });

};
