import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageConfig } from "./pageConfig";

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({headless: false});
});

Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    pageConfig.page = page; 
});

AfterStep(async function({pickle, result}) {
    if(result?.status == Status.FAILED){
        const img = await pageConfig.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png`, type: "png"})
        await this.attach(img,"image/png");
    }
});

After(async function (){
    await pageConfig.page.close();
    await context.close();
});

AfterAll(async function(){
    await browser.close();
});