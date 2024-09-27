import { Given, When, Then } from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext } from "@playwright/test";
import { pageConfig } from "../../hooks/pageConfig";

Given('User clicks on "Issue" button', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='Issue']").click();
});

Given('User fills in the issue details', async function () {
    const frame = pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']");
    const selectElement = frame.locator("//select[@data-testid='Category :select:control']");

    await selectElement.selectOption({ label: 'Parking' });
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//input[@data-testid='Issue:input:control']").fill("Water Leakage");
});

Given('User submits the new issue', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").click();
});

Given('User is on Additional details view', async function () {
    const additionalDetails = pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//div[text()='Gather Additional Details']");
    await expect(additionalDetails).toBeVisible({timeout: 30000});
});

Given('User submits the issue additional details', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").first().click();
});

Given('User is on Collect Issue info view', async function () {
    const collectInfo = pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='Collect Issue info']");
    await expect(collectInfo).toBeVisible({timeout: 30000});
});

Given('User fills in the issue info', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//input[@data-testid='Reported By:combo-box:control']").fill("test");
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='test']").click();
});

Given('User submits the issue info', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").first().click();
});

Given('User submits the verify category', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//h2[text()='Assignments']").click();
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='Go']").click();
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").first().click();
});

Given('User submits the urgency', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").first().click();
});

Given('User submits the process issue', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//h2[text()='Assignments']").click();
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//span[text()='Go']").click();
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").first().click();
});

Given('User submits the feedback', async function () {
    await pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']").locator("//button[text()='Submit']").first().click();
});