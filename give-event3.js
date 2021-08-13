function giveEvent3(aClass, wraperTag, wraperClass) {
  let aTag1 = document.querySelectorAll(wraperTag + '.' + wraperClass);
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle;
console.log(aTag1)
	console.log(wraperTag, wraperClass)
	localStorage.setItem('board-swiper-next', 'no-url');
      localStorage.setItem('board-swiper-previous', 'no-url');
  if (aTag1.length < 1) {return;}  	
  aTag1.forEach((author) => {
//console.log(aTag)
//console.log(titleClass);
  let tdTag
     , aTag;
	tdTag = author.previousElementSibling;	 
	aTag = tdTag.firstElementChild;  
    targetTitle = localStorage.getItem('board-swiper-current-title');
   // console.log(aTag.innerText, targetTitle);	 
    if (targetTitle.includes(aTag.innerText)) {  
		 console.log(aTag.innerText[1], targetTitle[1]);
	 console.log(aTag.innerText[1] === targetTitle[1]); 
	      console.log(targetTitle);
	    console.log(aTag);
      let previousTdTag
	, nextTdTag   
        , classIndex
	, aTagIndex
	, pAtagIndex
	, nAtagIndex    
	, previousAtag
	, nextAtag
	, lastIndex
	, targetATags;
      lastIndex = aTag1.length - 1;
      classIndex = Array.from(aTag1).indexOf(author);
     console.log(lastIndex, classIndex); 
      if (lastIndex !== classIndex) {  
      previousTdTag = aTag1[classIndex + 1].previousElementSibling;      
            
      previousAtag = previousTdTag.firstElementChild;
      localStorage.setItem('board-swiper-previous', previousAtag.href);
      localStorage.setItem('board-swiper-previous-title', previousAtag.innerText);
      } else if (lastIndex === classIndex && lastIndex > 0) {
      localStorage.setItem('board-swiper-previous', previousAtag);
      localStorage.setItem('board-swiper-previous-title', '이 페이지의 마지막입니다.');
      }
      if (classIndex !== 0) {	    
      nextTdTag = aTag1[classIndex - 1].previousElementSibling;	      
      nextAtag = nextTdTag.firstElementChild;
      localStorage.setItem('board-swiper-next-title', nextAtag.innerText);
      localStorage.setItem('board-swiper-next', nextAtag.href);
      } else if (classIndex === 0 && lastIndex > 0) {
      localStorage.setItem('board-swiper-next-title', '이 페이지의 첫 글입니다.');
      localStorage.setItem('board-swiper-next', nextAtag);
      }
      console.log(classIndex);	
      console.log(nextTdTag);	    
      console.log(previousAtag)	    
      console.log(nextAtag)	   
           
    }
      aTag.addEventListener('click', (e) => {
      console.log(e)      	   
      console.log(e.target.tagName);	   	    
      localStorage.setItem('board-swiper-current-title', e.target.innerText);
      //e.preventDefault();
      //return false;
    });
  });

};
