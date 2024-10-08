import { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, LaunchOptions, Page, chromium } from "@playwright/test";
import { pageConfig } from "./pageConfig";

let page: Page;
let browser: Browser;
let context: BrowserContext;
let config = require("../test/user-settings.json");

const options: LaunchOptions = {
    headless: false,
    args: ["--start-maximized"],
    slowMo: 400
}

setDefaultTimeout(5 * 60000);

BeforeAll(async function () {
    if(!config.applicationURL){
        console.error("application url not specified in user-settings.json file")
        throw new Error("provide application url");
    }else if(!config.username || !config.password){
        console.error("username or password is not specified in user-settings.json")
        throw new Error("provide username and password");
    }
    else{
        browser = await chromium.launch(options);
    }
});

Before(async function () {
    context = await browser.newContext({viewport: null});
    context.setDefaultNavigationTimeout(3 * 60000);
    context.setDefaultTimeout(3 * 60000);
    page = await context.newPage();
    page.setDefaultNavigationTimeout(3 * 60000);
    page.setDefaultTimeout(3 * 60000);
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