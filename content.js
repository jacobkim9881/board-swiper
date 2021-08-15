

let hostUrl = window.location.hostname;
window.addEventListener("load", function() {
  
  

  if (siteList[hostUrl]) {	 
    let getAClass, getWraperTag, getWraperClass, getListAClass, getSubClass;
    getAClass = siteList[hostUrl]["a-class"];
    getWraperTag = siteList[hostUrl]["wraper-tag"];
    getWraperClass = siteList[hostUrl]["wraper-class"];
    getSubClass = siteList[hostUrl]["sub-class"];
    siteList[hostUrl]["custom-function"](getAClass, getWraperTag, getWraperClass, getSubClass);
    if (siteList[hostUrl]["isListDifferent"]) {
      getListAClass = siteList[hostUrl]["list-click-event"]["a-class"];	  
	  listEvent(getListAClass);
    }
  } else {
    giveEvent();
  }
/*
  switch (hostUrl) {
   case 'www.bobaedream.co.kr':
		  
  giveEvent3(siteList[1]["a-class"], siteList[1]["wraper-tag"], siteList[1]["wraper-class"]);
  listEvent(siteList[1]["list-click-event"]["a-class"]);
  return;
 default :
  giveEvent();		 
  return;		  
  }
	*/
}, false);

window.addEventListener('unload', () => {
 localStorage.setItem('board-swiper-next-title', '로딩 중입니다');
localStorage.setItem('board-swiper-previous-title', '로딩 중입니다');
     localStorage.setItem('board-swiper-next', 'loading');
      localStorage.setItem('board-swiper-previous', 'loading');

})
pageMover(document);
