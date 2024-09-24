import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, LaunchOptions, Page, chromium } from "@playwright/test";
import { pageConfig } from "./pageConfig";

let page: Page;
let browser: Browser;
let context: BrowserContext;

const options: LaunchOptions = {
    headless: false,
    args: ["--start-maximized"],
}

BeforeAll(async function () {
    browser = await chromium.launch(options);
});

Before(async function () {
    context = await browser.newContext({viewport: null});
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