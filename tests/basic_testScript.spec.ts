import { test, expect } from '@playwright/test';
import { describe } from 'node:test';
//import {NavigationPage} from '../page_objects/navigation_page';


test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});


test.describe('fill Using the Grid form', () => { 
  
  test.skip('has title', async ({ page }) => {
    await expect(page).toHaveTitle(/playwright-test-admin Demo Application/);
    });

  test.skip('using the grid form ', async ({page}) => {
    
    const usingTheGridForm = page.locator('nb-card').filter({hasText:'Using the Grid'})
    const emailField = page.locator('#inputEmail1')

    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();

    await emailField.fill('test@test.com');
    await usingTheGridForm.locator('#inputPassword2').fill('password123');
    await usingTheGridForm.locator('nb-radio :text-is("Option 2")').click();
    await usingTheGridForm.getByRole('button', {name: 'sign in'}).first().click();

    await expect (emailField).toHaveValue('test@test.com');

  });
});