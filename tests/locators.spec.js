import{test} from "@playwright/test";

test("locators" ,async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form");
    await page.waitForLoadState();
    await page.locator('#firstName').fill("praveen");
    await page.waitForTimeout(500000);
})