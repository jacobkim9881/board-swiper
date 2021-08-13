console.log(localStorage.getItem('board-swiper-previous'));
console.log(document.readyState);
console.log(siteList[0]["custom-function"]);
let hostUrl = window.location.hostname;
window.addEventListener("load", function() {
  console.log(document);	
  console.log(document.readyState);

  switch (hostUrl) {
   case 'www.bobaedream.co.kr':
		  console.log('hollo');
  giveEvent3(siteList[1]["a-class"], siteList[1]["wraper-tag"], siteList[1]["wraper-class"]);
  listEvent(siteList[1]["list-click-event"]["a-class"]);
  return;
 default :
  giveEvent();		 
  return;		  
  }
}, false);

pageMover(document);
