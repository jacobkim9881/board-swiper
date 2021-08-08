chrome.runtime.onInstalled.addListener(() => {

});

chrome.runtime.onMessage.addListener((msg) => {

if (msg) {
console.log(msg)
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.scripting.executeScript({
    target: {
      tabId: tabs[0].id
    },
    files: ['content.js'],
      });
    });

}

})
