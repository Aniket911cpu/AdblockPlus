// Send a message to the content script to hide ad elements on the page
function hideAds() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'hideAds'});
    });
  }
  
  // Add click event listener to the Hide Ads button
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hide-ads-btn').addEventListener('click', hideAds);
  });
  