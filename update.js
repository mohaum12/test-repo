const { openBrowser, goto, write, press, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await write("Cypres");
        await press("Enter");
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
