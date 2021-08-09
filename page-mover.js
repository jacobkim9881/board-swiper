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
    , nHref;
  pointer.id = 'board-swiper';
  pointer.style.position = 'fixed';
  //pointer.style.borderRadius = '50%';
  pointer.style.border = 'hsl(0, 0%, 80%)';
  pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
  pointer.style.width = '200px';
  pointer.style.padding = '10px 20px 10px 30px';
  pointer.style.zIndex = '10000';

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
    
    
    
    
    	

    let isSwiped = e.clientX - posX;	
    if (isSwiped >= 30 || isSwiped <= -30) {      
      targetName = posX > e.clientX ? 'previous' : 'next'	  
      targetUrl = localStorage.getItem('board-swiper-' + targetName);
      previousTitle = localStorage.getItem('board-swiper-previous-title');
      nextTitle = localStorage.getItem('board-swiper-next-title');
	  
	  
      pointer.style.display = 'block';
      pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
      pointer.style.color = 'black'; 
      pointer.innerText = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : posX > e.clientX ? previousTitle : nextTitle;	
      pointer.style.top = (e.clientY - 10) + 'px';
      posX = posX > e.clientX ? (e.clientX - 270) + 'px' : (e.clientX + 30) + 'px';	  
      pointer.style.left = posX;
	  
      element.body.appendChild(pointer); 
      mouseTime = 0;
    }
  });


  pointer.addEventListener('mouseover', (e) => {
    pointer.style.display = 'block';
    pointer.style.backgroundColor = 'hsl(230, 100%, 50%, 0.5)';
    pointer.style.color = 'white';
    
    targetClass = element.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
    targetIdx = parseInt(targetIdx);	
    	
    isPreTitle = targetClass[targetIdx + 1] === undefined ? false : true;
    isNeTitle = targetClass[targetIdx - 1] === undefined ? false : true;
    pHref = isPreTitle ? targetClass[targetIdx + 1].href : undefined;
    nHref = isNeTitle ? targetClass[targetIdx - 1].href : undefined;	
    
    localStorage.setItem('board-swiper-current-title', e.target.innerText);	
    targetUrl !== 'undefined' ? localStorage.setItem('board-swiper-current-idx', targetIdx) : false;
    targetUrl !== 'undefined' ? window.open(targetUrl, '_self') : false;	
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
}

