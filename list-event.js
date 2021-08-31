function listEvent(aClass, wraperTag, wraperClass) {
// let wraperTags = document.querySelectorAll(wraperTag + '.' + wraperClass);
//  if (wraperTags.length !== 0) {return;};	
 let aTags = document.querySelectorAll('a.' + aClass);
 if (aTags === null) {return;}	
 if (aTags.length === 0) {return;}
 
 aTags.forEach( (aTag) => {
    aTag.addEventListener('click', (e) => {
      
/*	    
      let listWraperTag
      , listWraperClass
      listWraperTag = e.target.parentNode.tagName.toLowerCase();	    
      listWraperClass = e.target.parentNode.className;	   
      localStorage.setItem('board-swiper-list-wraper-tag', listWraperTag); 	 
      localStorage.setItem('board-swiper-list-wraper-class', listWraperClass); 	 
      localStorage.setItem('board-swiper-list-a-class', e.target.className); 	 
      */
	    
      localStorage.setItem('board-swiper-current-title', e.target.innerText);
      //e.preventDefault();
      //return false;
    });

 });
}
