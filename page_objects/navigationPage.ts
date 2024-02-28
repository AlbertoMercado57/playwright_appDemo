import { Page } from "@playwright/test";
import { test, expect } from '@playwright/test';



export class NavigationPage {

    readonly page: Page

    constructor(page : Page) {
        this.page = page

    }

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
        await this.GroupMenuItem('Datepicker')
        await this.page.getByTitle('Datepicker').click();
        await this.page.getByPlaceholder('Form Picker').click();
        await this.page.locator('nb-calendar-picker').click();


    }

    async ModalAndOverlay() {
        //await this.GroupMenuItem('Modal & Overlays')
        await this.page.getByText('Modal & Overlays').click();

    }

    async ExtraComponents() {
        await this.GroupMenuItem('Extra Components')


    }

    async Charts() {
        this.page.getByText('Charts').click();
        //await this.GroupMenuItem('Charts')


    }

    async TablesAndData() {
        await this.GroupMenuItem('Tables & Data')


    }

    async Auth() {
        await this.GroupMenuItem('Auth')

    }

 


}