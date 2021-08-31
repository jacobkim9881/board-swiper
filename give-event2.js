// for Clien
function giveEvent2(aClass, wraperTag, wraperClass, subClass) {
  
/*
	let doc = document.querySelector('#cafe_main');
  
  if (doc === null) {return;};
  doc = doc.contentDocument;	
  
  */
  
  
	
  let listDoc =	document.querySelectorAll('.viewListArea');
  if(listDoc[0] === undefined) {return;};	
  let aTag1 = listDoc[0].querySelectorAll(wraperTag + '.' + wraperClass);
  
  let isPreTitle
    , isNeTitle
    , pHref
    , nHref
    , titleClass
    , targetTitle;
 if(aTag1.length > 1){
	 aTag1.forEach((eachWraperTag) => {
   let aTag = eachWraperTag.querySelectorAll('a.' + aClass)[0];		
   if(aTag === undefined) {return;};		 
    targetTitle = localStorage.getItem('board-swiper-current-title');
		 
    if (aTag.innerText.includes(targetTitle)) {  
		 
	 
	      
	    
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
	, targetATags
	, pTextClass
	, nTextClass;
      lastIndex = aTag1.length - 1;
      classIndex = Array.from(aTag1).indexOf(eachWraperTag);
	    
	    

      localStorage.setItem('board-swiper-previous', previousAtag);
      localStorage.setItem('board-swiper-previous-title', '이 페이지의 마지막입니다.');
      localStorage.setItem('board-swiper-next-title', '이 페이지의 첫 글입니다.');
      localStorage.setItem('board-swiper-next', nextAtag);

      if (lastIndex !== classIndex) {  
      previousAtag = aTag1[classIndex + 1].querySelector('a.' + aClass);
	      
      pTextClass = aTag1[classIndex + 1].querySelectorAll('.' + subClass)[0];	    
	      
	      
      localStorage.setItem('board-swiper-previous', previousAtag.href);
      localStorage.setItem('board-swiper-previous-title', pTextClass.innerText);
      }
      if (classIndex !== 0) {	    
      nextAtag = aTag1[classIndex - 1].querySelector('a.' + aClass);
      nTextClass = aTag1[classIndex - 1].querySelectorAll('.' + subClass)[0];	      
      localStorage.setItem('board-swiper-next-title', nTextClass.innerText);
      localStorage.setItem('board-swiper-next', nextAtag.href);
      }
      localStorage.setItem('board-swiper-status', 'ready');
      
      
      
           
    }
    
      aTag.addEventListener('click', (e) => {
      
      localStorage.setItem('board-swiper-current-title', e.target.innerText);
      //e.preventDefault();
      //return false;
    });
  });
 }

};
