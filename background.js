chrome.commands.onCommand.addListener(function (command) {
  if (command === "switch-to-next-tab") {
    chrome.tabs.query({}, function (tabs) {
      const currentTab = tabs.find((tab) => tab.active === true);

      const nextTabIndex = (currentTab.index + 1) % tabs.length;

      chrome.tabs.update(tabs[nextTabIndex].id, { active: true });
    });
  }
  if (command === "switch-to-previous-tab") {
    chrome.tabs.query({}, function (tabs) {
      const currentTab = tabs.find((tab) => tab.active === true);

      const previousTabIndex =
        (currentTab.index - 1 + tabs.length) % tabs.length;

      chrome.tabs.update(tabs[previousTabIndex].id, { active: true });
    });
  }
});
