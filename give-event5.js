//Ruriweb

function giveEvent5() {
  let aTag1 = document.querySelectorAll('a[href]');
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle
    , currentStatus;
  console.log(localStorage.getItem('board-swiper-class-name'));
    titleClass = document.getElementsByClassName(localStorage.getItem('board-swiper-class-name'));	  
    currentStatus = localStorage.getItem('board-swiper-status');
console.log(document)
	console.log(currentStatus)
   if (currentStatus !== 'ready') {	
      localStorage.setItem('board-swiper-next', 'no-url');
      localStorage.setItem('board-swiper-previous', 'no-url');
   }
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
	, pCategory    
	, nextAtag
	, nCategory    
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

      if (lastIndex !== classIndex) {  
      previousTdTag = titleClass[classIndex + 1];      
      pTdTagLength = previousTdTag.querySelectorAll('a').length;	      
      pCategory = previousTdTag.querySelectorAll('a')[0];
      pCategory = pCategory.className === 'deco' ? '' : pCategory.innerText;	      
      previousAtag = targetATags[targetATagIndex + 1];
      localStorage.setItem('board-swiper-previous-category', pCategory);
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
      nextAtag = targetATags[targetATagIndex - 1];
      nCategory = nextTdTag.querySelectorAll('a')[0];
      nCategory = nCategory.className === 'deco' ? '' : pCategory.innerText;	      

      localStorage.setItem('board-swiper-next-title', nextAtag.innerText);
      localStorage.setItem('board-swiper-next-category', nCategory);
      localStorage.setItem('board-swiper-next', nextAtag.href);
      } else if (classIndex === 0 && lastIndex > 0) {
      localStorage.setItem('board-swiper-next-title', '이 페이지의 첫 글입니다.');
      localStorage.setItem('board-swiper-next', nextAtag);
      }
      localStorage.setItem('board-swiper-status', 'ready');
      console.log(classIndex);	
      console.log(nextTdTag);	    
      console.log(previousAtag)	    
      console.log(nextAtag)	  
      console.log(nextAtag.href);	    
      console.log(localStorage.getItem('board-swiper-next'));
      console.log(localStorage.getItem('board-swiper-previous'));
    
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
