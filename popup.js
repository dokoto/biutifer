document.addEventListener('DOMContentLoaded', function() {
  const ponmeGuapo = document.getElementById('ponmeGuapo');
  ponmeGuapo.addEventListener('click', function() {
    console.log('+++HITLER');
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { mode: 'hitler' }, function(response) {        
        console.log('success');
      });
    });
  });
});
