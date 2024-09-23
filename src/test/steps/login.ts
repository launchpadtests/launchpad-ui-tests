import {Given, When, Then} from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext} from "@playwright/test";
import { pageConfig } from "../../hooks/pageConfig";

Given('User navigates to the application', async function () {
    console.log("launching the browser.....")
    await pageConfig.page.goto("https://practicetestautomation.com/practice-test-login/");
    console.log("browser launched successfully")
});

Given('User enter the username as {string}', async function (username) {
    await pageConfig.page.locator("//*[@id='username']").fill(username);
});

Given('User enter the password as {string}', async function (password) {
    await pageConfig.page.locator("//*[@id='password']").fill(password);
});

When('User click on the login button', async function () {
    await pageConfig.page.locator("//*[@id='submit']").click();
});

Then('Login should be success', async function () {
    const successMessage = pageConfig.page.locator("//*[text()='Logged In Successfully']");
    await expect(successMessage).toBeVisible();
});

When('Login should fail', async function () {
    const failuremessage = pageConfig.page.locator("//*[text()='Your password is invalid!' and @id='error']");
    await expect(failuremessage).toBeVisible();
});

         