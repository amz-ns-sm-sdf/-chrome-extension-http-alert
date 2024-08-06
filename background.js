chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
      let url = new URL(tab.url);
      if (url.protocol === 'http:') {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon48.png',
          title: 'Unsecure Connection',
          message: 'You are visiting an HTTP site. It is not secure.',
          buttons: [{title: 'Dismiss'}],
          priority: 1
        });
      }
    }
  });
  