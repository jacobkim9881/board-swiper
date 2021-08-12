function giveEvent2(aClass, wraperTag, wraperClass) {
  let aTag1 = document.querySelectorAll(wraperTag + '.' + wraperClass);
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle;
 if(aTag1.length > 1){
	 aTag1.forEach((eachWraperTag) => {
   let aTag = eachWraperTag.querySelector('a.' + aClass);		 
    targetTitle = localStorage.getItem('board-swiper-current-title');
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
      lastIndex = aTag1.length - 1;
      classIndex = Array.from(aTag1).indexOf(eachWraperTag);

      localStorage.setItem('board-swiper-previous', previousAtag);
      localStorage.setItem('board-swiper-previous-title', '이 페이지의 마지막입니다.');
      localStorage.setItem('board-swiper-next-title', '이 페이지의 첫 글입니다.');
      localStorage.setItem('board-swiper-next', nextAtag);

      if (lastIndex !== classIndex) {  
      previousAtag = aTag1[classIndex + 1].querySelector('a.' + aClass);
      localStorage.setItem('board-swiper-previous', previousAtag.href);
      localStorage.setItem('board-swiper-previous-title', previousAtag.innerText);
      }
      if (classIndex !== 0) {	    
      nextAtag = aTag1[classIndex - 1].querySelector('a.' + aClass);
      localStorage.setItem('board-swiper-next-title', nextAtag.innerText);
      localStorage.setItem('board-swiper-next', nextAtag.href);
      }
      console.log(classIndex);	
      console.log(previousAtag)	    
      console.log(nextAtag)	   
           
    }
    
      aTag.addEventListener('click', (e) => {
      console.log(e)      	   
      localStorage.setItem('board-swiper-current-title', e.target.innerText);
      //e.preventDefault();
      //return false;
    });
  });
 }

};
