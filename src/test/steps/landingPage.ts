import {Given, When, Then} from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext} from "@playwright/test";
import { pageConfig } from "../../hooks/pageConfig";

When('user selects {string} landing page option', async function (landingPage) {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//li[@name='"+landingPage+"']").click();
});

Then('verify that {string} landing page is loaded', async function (landingPage) {
    const landingpage = await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//h3[text()='"+landingPage+"']");
    await expect(landingpage).toBeVisible({timeout: 30000});
});