console.log(localStorage.getItem('board-swiper-previous'));
console.log(document.readyState);

window.addEventListener("load", function() {
  console.log(document);	
  console.log(document.readyState);
  giveEvent();	
}, false);

pageMover(document);
