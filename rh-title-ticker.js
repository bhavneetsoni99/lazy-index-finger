// Robinhood: show the portfolio amount in the tab title. Run again to stop.
(() => {
    if (window.__rhTitle) {
        clearInterval(window.__rhTitle);
        window.__rhTitle = null;
        return;
    }
    window.__rhTitle = setInterval(() => {
        const amount = document
            .querySelector("#react_root > main > div:nth-child(2) > div > div > div > div > div > div > div > main > div.css-8atqhb > section > div.web-app-emotion-cache-7x1vu6 > div:nth-child(1) > div > div.web-app-emotion-cache-1fvis2l > h2 > span > span")
            ?.getAttribute("aria-label");
        if (amount) document.title = amount;
    }, 1000);
})();