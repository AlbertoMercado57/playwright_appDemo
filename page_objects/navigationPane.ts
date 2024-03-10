import { Page } from "@playwright/test";
import { test, expect } from '@playwright/test';



export class NavigationPage {

    readonly page: Page

    constructor(page : Page) {
        this.page = page

    }
/* this private method checks the aria-expanded 
atribute is set to True or False. If set to False, it clicks 
the title within the pane to expand.  
*/ 
    private async GroupMenuItem(groupItemTitle: string) {
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expanded = await groupMenuItem.getAttribute('aria-expanded')
        if (expanded == 'false')
            await groupMenuItem.click()
        }
    async FormLayoutsPage() {
        await this.GroupMenuItem('Forms')
        await this.page.getByText('Form Layouts').click();
        }

    async DatePickerPage() {
        await this.page.getByTitle('Datepicker').click();
    }
}
