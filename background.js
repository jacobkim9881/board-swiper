chrome.runtime.onInstalled.addListener(() => {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
            
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])     
  });

  chrome.runtime.sendMessage(undefined,
   { mode: 'button-md'
     }
  );
});
