//
let swipeMd = document.getElementById('swipe')
  , buttonMd = document.getElementById('button-md')
  , buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
 button.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
	  mode: button.id
          }
      );
       
    });

 })
})
