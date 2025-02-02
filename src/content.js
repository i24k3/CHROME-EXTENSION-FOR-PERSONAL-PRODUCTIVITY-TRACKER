let startTime = Date.now();

window.addEventListener("beforeunload", () => {
    let timeSpent = Date.now() - startTime;
    chrome.storage.local.get(["timeSpent"], (result) => {
        let totalTime = (result.timeSpent || 0) + timeSpent;
        chrome.storage.local.set({ timeSpent: totalTime });
    });
});
