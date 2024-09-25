import {Given, When, Then} from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext} from "@playwright/test";
import { pageConfig } from "../../hooks/pageConfig";

Given('user navigates to the civic sync application', async function () {
    console.log("launching the browser.....")
    await pageConfig.page.goto("https://civicsync-civicsysqa.civicsys.io/?");
    console.log("browser launched successfully")
});

Given('login to the application with username as {string} and password as {string}', async function (username, password) {
    await pageConfig.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await pageConfig.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await pageConfig.page.getByLabel('submit').last().click();
});

Then('verify that Civic sync web portal is launched', async function () {
    const loginSuccess = pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='Civic Sync']");
    await expect(loginSuccess).toBeVisible({timeout: 10000}); 
});