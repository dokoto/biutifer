document.addEventListener('DOMContentLoaded', function() {
  const ponmeGuapo = document.getElementById('ponmeGuapo');
  ponmeGuapo.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { mode: 'spinete' }, function(response) {
        console.log('success');
      });
    });
  });
});
