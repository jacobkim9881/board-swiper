function pageMover(element) {
  if (element === null) {return;};	
  let pointer = element.createElement('div')
    , targetUrl
    , targetName
    , targetClass
    , targetIdx
    , isPreTitle
    , isNeTitle
    , previousTitle
    , nextTitle
    , pHref
    , nHref
    , pCategory
    , nCategory	
    , currentTitle;
  pointer.id = 'board-swiper';
  pointer.style.position = 'fixed';
  //pointer.style.borderRadius = '50%';
  pointer.style.border = 'hsl(0, 0%, 80%)';
  pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
  pointer.style.width = '200px';
  pointer.style.padding = '10px 20px 10px 30px';
  pointer.style.zIndex = '10000';
  pointer.style.fontSize = '13px';

  let mouseTime = 0
    , mouseTimer
    , posX = 0
    , posY = 0;
	
  
  

  element.addEventListener('mousedown', (e) => {
    posX = e.clientX;
    posY = e.clientY;  	 
  });

  element.addEventListener('mouseup', (e) => {

    clearInterval(mouseTimer);
    
    
    
    
    
    let isScrolled = Math.abs(e.clientY - posY);
    let isSwiped = e.clientX - posX;

    if (isSwiped >= 30 || isSwiped <= -30) {
      pointer.style.display = isScrolled > 200 ? 'none' : 'block';	  
      targetName = posX > e.clientX ? 'previous' : 'next'	  
      targetUrl = localStorage.getItem('board-swiper-' + targetName);
      pCategory = localStorage.getItem('board-swiper-previous-category');
      nCategory = localStorage.getItem('board-swiper-next-category'); 	    
      previousTitle = localStorage.getItem('board-swiper-previous-title');
      nextTitle = localStorage.getItem('board-swiper-next-title');
      pointer.style.display = targetUrl === 'no-url' ? 'none' : 'block';	    
	  
	  
      pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
      pointer.style.color = 'black'; 
      pointer.innerText = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : posX > e.clientX ? pCategory + previousTitle : nCategory + nextTitle;	
      currentTitle = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : posX > e.clientX ? previousTitle : nextTitle;	
      pointer.style.top = (e.clientY - 10) + 'px';
      posX = posX > e.clientX ? (e.clientX - 270) + 'px' : (e.clientX + 30) + 'px';	  
      pointer.style.left = posX;
	  
      element.body.appendChild(pointer); 
      mouseTime = 0;
    }
  });


  pointer.addEventListener('mouseover', (e) => {
    pointer.style.backgroundColor = 'hsl(230, 100%, 50%, 0.5)';
    pointer.style.color = 'white';
    
    targetClass = element.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
    targetIdx = parseInt(targetIdx);	
    
    isPreTitle = targetClass[targetIdx + 1] === undefined ? false : true;
    isNeTitle = targetClass[targetIdx - 1] === undefined ? false : true;
    pHref = isPreTitle ? targetClass[targetIdx + 1].href : undefined;
    nHref = isNeTitle ? targetClass[targetIdx - 1].href : undefined;	
    
    if (targetUrl !== 'undefined' && targetUrl !== 'loading') {
      localStorage.setItem('board-swiper-current-title', currentTitle);
      localStorage.setItem('board-swiper-current-idx', targetIdx);
      localStorage.setItem('board-swiper-status', 'not-ready');
      localStorage.setItem('board-swiper-previous-category', '')
      localStorage.setItem('board-swiper-next-category', '')
      window.open(targetUrl, '_self');	
    }
  })

  pointer.addEventListener('mouseout', (e) => {
    pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
    pointer.style.color = 'black';

    pointer.animate([
      { backgroundColor :'hsl(0, 0%, 80%, 0.5)',
        color :'hsl(0, 0%, 0%, 1)',
      },
      { backgroundColor :'hsl(0, 0%, 80%, 0)',
        color :'hsl(0, 0%, 0%, 0)',
      },  
    ], {duration: 500});

    setTimeout(() => {
      pointer.style.display = 'none';
    }, 500);
  })
 
  window.addEventListener('unload', (e) => {
    pointer.innerText = 'No page'	 
    e.preventDefault();
    return false;
  })
	
}

