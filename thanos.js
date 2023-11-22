const { openBrowser, goto, write, click, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await write("thanos");
        await click("thanos snap");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
