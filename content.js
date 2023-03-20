// This script runs in the context of the page and can access the DOM

// Hide ad elements on the page
function hideAdElements() {
    let adElements = document.querySelectorAll('div[class*="ad"], iframe[src*="ad"], img[src*="ad"]');
    adElements.forEach(function(element) {
      element.style.display = 'none';
    });
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if(request.action === 'hideAds') {
        hideAdElements();
      }
    }
  );
  