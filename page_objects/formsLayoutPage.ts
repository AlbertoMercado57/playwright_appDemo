import { Page } from "@playwright/test";
import { test, expect } from '@playwright/test';

export class FormLayoutsPage {

    private readonly page: Page

    constructor(page : Page) {
        this.page = page

    }
    async SubmitUsingTheGridForm(email: string, password: string, option: string) {
        const usingTheGridForm = this.page.locator('nb-card', {hasText: 'Using the Grid'})
        await usingTheGridForm.getByRole('textbox', {name: 'Email'}).fill(`${email}`);
        await usingTheGridForm.getByRole('textbox', {name:'password'}).fill(`${password}`);
        await usingTheGridForm.getByRole('radio', {name: option}).check({force:true})
        await usingTheGridForm.getByRole('button').click();


    }

}
