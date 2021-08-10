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
    if (titleClass.length > 0 ) {	 
    if (aTag.innerText.trim() === targetTitle || aTag.innerText === targetTitle ) {  
		 console.log(aTag.innerText[1], targetTitle[1]);
	 console.log(aTag.innerText[1] === targetTitle[1]); 
	      console.log(targetTitle);
      let tdTag
        , classIndex
	, aTagIndex
	, pAtagIndex
	, nAtagIndex    
	, previousAtag
	, nextAtag;
      tdTag = aTag.closest('td');	    
      classIndex = Array.from(titleClass).indexOf(tdTag);
      aTagIndex = Array.from(tdTag.querySelectorAll('a')).indexOf(aTag);	    
      pAtagIndex = Array.from(titleClass[classIndex + 1].querySelectorAll('a')).indexOf(aTag);	    
      nAtagIndex = Array.from(titleClass[classIndex - 1].querySelectorAll('a')).indexOf(aTag);	    
      previousAtag = titleClass[classIndex + 1].querySelectorAll('a')[aTagIndex];
      nextAtag = titleClass[classIndex - 1].querySelectorAll('a')[aTagIndex];
      console.log(classIndex);	
      console.log(titleClass[classIndex - 1]);	    
      console.log(previousAtag)	    
      console.log(nextAtag)	   
      localStorage.setItem('board-swiper-previous', previousAtag.href);
      localStorage.setItem('board-swiper-next', nextAtag.href);
      localStorage.setItem('board-swiper-previous-title', previousAtag.innerText);
      localStorage.setItem('board-swiper-next-title', nextAtag.innerText);
      
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
