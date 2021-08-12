console.log(localStorage.getItem('board-swiper-previous'));
console.log(document.readyState);
console.log(siteList[0]["custom-function"]);
let hostUrl = window.location.hostname;
window.addEventListener("load", function() {
  console.log(document);	
  console.log(document.readyState);

  switch (hostUrl) {
  case 'cafe.naver.com':
		  console.log('hollo');
  giveEvent2(siteList[0]["a-class"], siteList[0]["wraper-tag"], siteList[0]["wraper-class"]);
  listEvent(siteList[0]["list-click-event"]["a-class"]);
  return;
  default :
  giveEvent();		 
  return;		  
  }
}, false);

pageMover(document);
