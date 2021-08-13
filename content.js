console.log(localStorage.getItem('board-swiper-previous'));
console.log(document.readyState);
let hostUrl = window.location.hostname;
window.addEventListener("load", function() {
  console.log(document);	
  console.log(document.readyState);

  if (siteList[hostUrl]) {	 
  let getAClass, getWraperTag, getWraperClass, getListAClass;
  getAClass = siteList[hostUrl]["a-class"];
  getWraperTag = siteList[hostUrl]["wraper-tag"];
  getWraperClass = siteList[hostUrl]["wraper-class"];
  siteList[hostUrl]["custom-function"](getAClass, getWraperTag, getWraperClass);
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
		  console.log('hollo');
  giveEvent3(siteList[1]["a-class"], siteList[1]["wraper-tag"], siteList[1]["wraper-class"]);
  listEvent(siteList[1]["list-click-event"]["a-class"]);
  return;
 default :
  giveEvent();		 
  return;		  
  }
	*/
}, false);

pageMover(document);
