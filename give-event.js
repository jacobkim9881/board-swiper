function giveEvent() {
  let aTag1 = document.querySelectorAll('a[href]');
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle;
  console.log(localStorage.getItem('board-swiper-class-name'));
    titleClass = document.getElementsByClassName(localStorage.getItem('board-swiper-class-name'));	  
  aTag1.forEach((aTag) => {
//console.log(aTag)
//console.log(titleClass);
    targetTitle = localStorage.getItem('board-swiper-current-title');
    //console.log(aTag.innerText, targetTitle);	 
    if (titleClass.length > 0 && aTag.closest('td') !== null) {	 
    if (aTag.innerText.trim() === targetTitle || aTag.innerText === targetTitle ) {  
		 console.log(aTag.innerText[1], targetTitle[1]);
	 console.log(aTag.innerText[1] === targetTitle[1]); 
	      console.log(targetTitle);
	    console.log(aTag);
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
	    console.log(tdTag)
      tdTagLength = tdTag.querySelectorAll('a').length; 	    
      lastIndex = titleClass.length - 1;
      classIndex = Array.from(titleClass).indexOf(tdTag);
      aTagIndex = Array.from(tdTag.querySelectorAll('a')).indexOf(aTag);	   
      targetATags = document.getElementsByClassName(aTag.className);
      targetATagIndex = Array.from(targetATags).indexOf(aTag);	    

      localStorage.setItem('board-swiper-previous', previousAtag);
      localStorage.setItem('board-swiper-previous-title', '이 페이지의 마지막입니다.');
      localStorage.setItem('board-swiper-next-title', '이 페이지의 첫 글입니다.');
      localStorage.setItem('board-swiper-next', nextAtag);

      if (lastIndex !== classIndex) {  
      previousTdTag = titleClass[classIndex + 1];      
      pTdTagLength = previousTdTag.querySelectorAll('a').length;	      
            
//      pAtagIndex = tdTagLength === pTdTagLength ? 
//		      Array.from(previousTdTag.querySelectorAll('a')).indexOf(aTag) :
//		      targetATagIndex + 1;	    
      previousAtag = tdTagLength === pTdTagLength ? 
		     previousTdTag.querySelectorAll('a')[aTagIndex] :
		     targetATags[targetATagIndex + 1];
      localStorage.setItem('board-swiper-previous', previousAtag.href);
      localStorage.setItem('board-swiper-previous-title', previousAtag.innerText);
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
      }
      console.log(classIndex);	
      console.log(nextTdTag);	    
      console.log(previousAtag)	    
      console.log(nextAtag)	   
           
    }
    }
      aTag.addEventListener('click', (e) => {
      console.log(e)      	   
      console.log(e.target.tagName);	   	    
      let getClassName = e.target.closest('td').className;
		    console.log(getClassName.length);
      console.log(getClassName);
      if (getClassName.length === 0) {return;};	    
      titleClass = document.getElementsByClassName(getClassName);
      let eIndex = Array.from(titleClass).indexOf(e.target.closest('td'));
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
      //e.preventDefault();
      //return false;
    });
  });

};
