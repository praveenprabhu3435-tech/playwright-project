import { test, chromium } from "@playwright/test";

test("browser", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();

    await page1.goto("https://www.amazon.com/", { waitUntil: "domcontentloaded" });
    // await page1.screenshot({ path: "./screenshots/image1.png", fullscreen: true });

    const page2 = await context.newPage();
    await page2.goto("https://www.instagram.com/", { waitUntil: "domcontentloaded" });
    // await page2.screenshot({ path: "./screenshots/image2.png", fullscreen: true });

    const page3 = await context.newPage();
    await page3.goto("https://www.facebook.com/", { waitUntil: "domcontentloaded" });
    // await page3.screenshot({ path: "./screenshots/image3.png", fullscreen: true });

    const context1 = await browser.newContext({ recordVideo: { dir: "vedio/" } });
    const page4 = await context1.newPage();

    await page4.goto("https://www.flipkart.com/", { waitUntil: "domcontentloaded" });
    await page4.goto("https://www.myntra.com/", { waitUntil: "domcontentloaded" });
    await page4.goto("https://www.w3schools.com/", { waitUntil: "domcontentloaded" });

    await page4.goBack();
    await page4.goBack();

    await page4.screenshot({ path: "./screenshots/image.png" });
});