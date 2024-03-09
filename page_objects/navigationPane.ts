import { Page } from "@playwright/test";
import { test, expect } from '@playwright/test';



export class NavigationPage {

    readonly page: Page

    constructor(page : Page) {
        this.page = page

    }
/* this private method makes sure the aria-expanded 
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

    async ModalAndOverlay() {
        await this.GroupMenuItem('Modal & Overlays')

    }

    async ExtraComponents() {
        await this.GroupMenuItem('Extra Components')


    }

    async Charts() {
        this.page.getByText('Charts').click();
        await this.GroupMenuItem('Charts')


    }

    async TablesAndData() {
        await this.GroupMenuItem('Tables & Data')


    }

    async Auth() {
        await this.GroupMenuItem('Auth')

    }
}