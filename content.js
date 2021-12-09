

let hostUrl = window.location.hostname;
/*
localStorage.setItem('board-swiper-next-title', '로딩 중입니다');
localStorage.setItem('board-swiper-previous-title', '로딩 중입니다');
     localStorage.setItem('board-swiper-next', 'loading');
      localStorage.setItem('board-swiper-previous', 'loading');
*/
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
let mode = localStorage.getItem('board-swiper-mode');
//	console.log(mode)
if (mode === 'swiper') {
  pageMover(document);
} else {
  pageTurner(document, 'next');
  pageTurner(document, 'previous');
}
}, false);


window.addEventListener('unload', () => {


   let aTag1 = document.querySelectorAll('a[href]');
if(aTag1.length > 0) {	

	
localStorage.setItem('board-swiper-next-title', '로딩 중입니다');
localStorage.setItem('board-swiper-previous-title', '로딩 중입니다');
     localStorage.setItem('board-swiper-next', 'loading');
      localStorage.setItem('board-swiper-previous', 'loading');
      
}
})


chrome.runtime.onMessage.addListener((msg, _, sendRes) => {
//	console.log(msg)
  localStorage.setItem('board-swiper-mode', msg.mode);
})
//pageMover(document);
//pageTurner(document, 'next');
