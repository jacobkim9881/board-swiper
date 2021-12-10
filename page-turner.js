function pageTurner(element, targetName) {
  if (element.body === null) {return;};

  let pointer = element.createElement('button')
    , targetUrl
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
  targetTop = targetName === 'next' ? - 25 : 25;	

  let mouseTimer
//     , targetName = 'next'	  
//      targetName = 'previous' : 'next'	  
      targetUrl = localStorage.getItem('board-swiper-' + targetName);
      pCategory = localStorage.getItem('board-swiper-previous-category');
      nCategory = localStorage.getItem('board-swiper-next-category'); 	    
      previousTitle = localStorage.getItem('board-swiper-previous-title');
      nextTitle = localStorage.getItem('board-swiper-next-title');
      pointer.style.display = 'none';	    
//      pointer.style.display = targetUrl === 'no-url' ? 'none' : 'block';	    
//	  console.log(targetUrl)
//      pointer.style.backgroundColor = 'hsl(0, 0%, 80%, 0.5)';
      pointer.style.color = 'black'; 
      pointer.innerText = targetUrl === 'undefined' ? 'X' :
		targetName === 'next' ? '▲' : '▼'; 
		//nCategory + nextTitle;	
      currentTitle = targetUrl === 'undefined' ? '넘어갈 페이지가 없습니다' : localStorage.getItem(`board-swiper-${targetName}-title`);	
//	  console.log(element.body)
//	console.log(element)
//	console.log(pointer)
//	console.log(element.querySelector('#primaryContent'));
//  if (element === null) {return;};
      element.body.appendChild(pointer); 
//	console.log(pointer)

  element.addEventListener('scroll', (e) => {
//	  console.log('scrolled')
  pointer.style.top = (window.innerHeight * 1/2 + window.scrollY + targetTop) + 'px';
    pointer.style.display = 'block';	  
  });


  pointer.addEventListener('click', (e) => {
//    pointer.style.backgroundColor = 'hsl(230, 100%, 50%, 0.5)';
//    pointer.style.color = 'white';
    
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

	/*
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
 */

 window.addEventListener('unload', (e) => {
 pointer.innerText = 'No page'	 
 e.preventDefault();
 return false;
 })
	
}

