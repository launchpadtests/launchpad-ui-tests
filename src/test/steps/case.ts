import {Given, When, Then, DataTable} from "@cucumber/cucumber"
import { chromium, Page, Browser, expect, BrowserContext} from "@playwright/test";
import { pageConfig } from "../../hooks/pageConfig";


When('user creates {string} case', async function (caseName) {
    console.log(caseName)
    this.framePage = pageConfig.page.frameLocator("//iframe[@data-testid='preview-frame']");
    await this.framePage.getByLabel('Expand navigation').click()
    await this.framePage.locator("//button[.//span[text()='Create']]").click()
    await this.framePage.getByRole('menu').getByText(caseName).click()
    await this.framePage.getByRole('dialog').waitFor()
    await expect(await this.framePage.getByRole('dialog').getByRole('heading')).toContainText('Create Citizen')


});

When('user enters below data', async function(dataTable:DataTable) {

    const dataFromTable = dataTable.hashes()

    for await(const data of dataFromTable){

        await this.framePage.getByTestId('Name:input:control').fill(data["Name"])
    
        await this.framePage.getByTestId('Email:input:control').fill(data["Email"])
    
        await this.framePage.getByTestId('Street Address:input:control').fill(data["Address"])

        await this.framePage.getByTestId('Phone Number:input:control').fill(data["PhoneNumber"])

        await this.framePage.getByTestId('Postal Code:input:control').fill(data["PostalCode"])

        // await this.framePage.getByRole('checkbox').setChecked(true);
        
       
        

        
    }

});

When('user submits the case', async function() {
    await this.framePage.getByRole('button',{name:'Submit'}).click()

})

Then('user verifies the case status as {string}', async function(staus) {

await expect(this.framePage.getByTestId(':status:')).toContainText(staus)
})

Then('user validates below data in details section', async function(dataTable:DataTable){

    const dataFromTable = dataTable.hashes()

    for await(const data of dataFromTable){

        await expect(await this.framePage.getByTestId('Name:field-value-item:value')).toContainText(data["Name"])
    
        await expect(await this.framePage.getByTestId('Email:field-value-item:value')).toContainText(data["Email"])
    
        await expect(await this.framePage.getByTestId('Street Address:field-value-item:value')).toContainText(data["Address"])

        await expect(this.framePage.getByTestId('Phone Number:field-value-item:value')).toContainText(data["PhoneNumber"])

        await expect(await this.framePage.getByTestId('Postal Code:field-value-item:value')).toContainText(data["PostalCode"])     
        

        
    }
})