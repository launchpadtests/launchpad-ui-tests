import {Given, When, Then} from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext} from "@playwright/test";
import { pageConfig } from "../../hooks/pageConfig";

Given('user navigates to the civic sync application', async function () {
    console.log("launching the browser.....")
    await pageConfig.page.goto("https://nam02.safelinks.protection.outlook.com/?url=https%3A%2F%2Fcivicsync-civicsysqa.civicsys.io%2F&data=05%7C02%7Charish.ghorpade%40in.pega.com%7C5eb5a55da70c43a8921b08dcdb98e17b%7C45d30f0498fd4d38bdc09d81422180f4%7C0%7C0%7C638626697540760402%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C40000%7C%7C%7C&sdata=BPM3BgcTz59tatro%2B3cg9doVjXJYv6tA4zK0yXyUr34%3D&reserved=0");
    console.log("browser launched successfully")
});

Given('login to the application with username as {string} and password as {string}', async function (username, password) {
    await pageConfig.page.locator("(//input[@id='signInFormUsername'])[2]").fill(username);
    await pageConfig.page.locator("(//input[@id='signInFormPassword'])[2]").fill(password);
    await pageConfig.page.locator("(//input[@value='Sign in' and @type='Submit'])[2]").click();
});

Then('verify that Civic sync web portal is launched', async function () {
    const loginSuccess = pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='Civic Sync']");
    await expect(loginSuccess).toBeVisible({timeout: 10000}); 
});