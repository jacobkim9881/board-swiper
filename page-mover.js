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
  pointer.style.fontSize = '13px';

  let mouseTime = 0
    , mouseTimer
    , posX = 0
    , posY = 0;
	
  console.log('mover');
  console.log(element)	

  element.addEventListener('mousedown', (e) => {
    posX = e.clientX;
    posY = e.clientY;  	 
  });

  element.addEventListener('mouseup', (e) => {

    clearInterval(mouseTimer);
    console.log(mouseTime);
    console.log(posX, posY);
    console.log(e.clientX, e.clientY);
    console.log(e.button)
    console.log(e);	
    let isScrolled = Math.abs(e.clientY - posY);
    let isSwiped = e.clientX - posX;

    if (isSwiped >= 30 || isSwiped <= -30) {
    pointer.style.display = isScrolled > 200 ? 'none' : 'block';	  
      targetName = posX > e.clientX ? 'previous' : 'next'	  
      targetUrl = localStorage.getItem('board-swiper-' + targetName);
      previousTitle = localStorage.getItem('board-swiper-previous-title');
      nextTitle = localStorage.getItem('board-swiper-next-title');
      pointer.style.display = targetUrl === 'no-url' ? 'none' : 'block';	    
	  console.log(targetUrl);
	  console.log(targetIdx)
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
    pointer.style.backgroundColor = 'hsl(230, 100%, 50%, 0.5)';
    pointer.style.color = 'white';
    console.log(targetIdx);
    targetClass = element.querySelectorAll('.' + localStorage.getItem('board-swiper-class-name'));
    targetIdx = parseInt(targetIdx);	
    console.log(targetClass)	
    isPreTitle = targetClass[targetIdx + 1] === undefined ? false : true;
    isNeTitle = targetClass[targetIdx - 1] === undefined ? false : true;
    pHref = isPreTitle ? targetClass[targetIdx + 1].href : undefined;
    nHref = isNeTitle ? targetClass[targetIdx - 1].href : undefined;	
    console.log(targetClass[targetIdx + 1], isPreTitle, pHref);
    if (targetUrl !== 'undefined' && targetUrl !== 'loading') {
    localStorage.setItem('board-swiper-current-title', e.target.innerText);
    localStorage.setItem('board-swiper-current-idx', targetIdx);
    localStorage.setItem('board-swiper-status', 'not-ready');
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

