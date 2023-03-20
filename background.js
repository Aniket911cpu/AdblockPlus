chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Block requests to ad URLs
      if(details.url.match(/advertising\.com|doubleclick\.net|ad\.google\.com/i)) {
        return {cancel: true};
      }
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );
  