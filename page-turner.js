function pageTurner(element, targetName) {
  if (element.body === null) {return;};

  let pointer = element.createElement('button')
    , targetUrl
    , targetClass
    , targetIdx
    , previousTitle
    , nextTitle
    , pCategory
    , nCategory	
    , currentTitle
    , targetTop;
  pointer.id = 'board-swiper' + targetName;
  pointer.style.position = 'absolute';
  //pointer.style.borderRadius = '50%';
  //  pointer.style.border = 'hsl(0, 0%, 80%)';
  //  pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
  pointer.style.height = '40px';  
  pointer.style.width = '50px';
  //  pointer.style.padding = '10px 20px 10px 30px';
  pointer.style.zIndex = '10000';
  pointer.style.fontSize = '30px';
  pointer.style.right = '100px';
  pointer.style.cursor = 'pointer';
  pointer.style.backgroundColor = '#e7e7e7';	
  targetTop = targetName === 'next' ? - 25 : 25;	

  targetUrl = localStorage.getItem('board-swiper-' + targetName);
  //      pCategory = localStorage.getItem('board-swiper-previous-category');
  //      nCategory = localStorage.getItem('board-swiper-next-category'); 	    
  //      previousTitle = localStorage.getItem('board-swiper-previous-title');
  //      nextTitle = localStorage.getItem('board-swiper-next-title');
  pointer.style.display = 'none';	    
  pointer.style.color = 'black'; 
  pointer.innerText = targetUrl === 'undefined' ? 'X' :
    targetName === 'next' ? '▲' : '▼'; 
  //nCategory + nextTitle;	
  currentTitle = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : localStorage.getItem(`board-swiper-${targetName}-title`);	
  element.body.appendChild(pointer); 

  element.addEventListener('scroll', (e) => {
    pointer.style.top = (window.innerHeight * 1/2 + window.scrollY + targetTop) + 'px';
    pointer.style.display = 'block';	  
  });


  pointer.addEventListener('click', (e) => {
    //    targetClass = element.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
    targetIdx = parseInt(targetIdx);	
   
    if (targetUrl !== 'undefined' && targetUrl !== 'loading') {
      localStorage.setItem('board-swiper-current-title', currentTitle);
      localStorage.setItem('board-swiper-current-idx', targetIdx);
      localStorage.setItem('board-swiper-status', 'not-ready');
      localStorage.setItem('board-swiper-previous-category', '')
      localStorage.setItem('board-swiper-next-category', '')
      window.open(targetUrl, '_self');	
    }
  })

  window.addEventListener('unload', (e) => {
    pointer.innerText = 'No page'	 
    e.preventDefault();
    return false;
  })
	
}

