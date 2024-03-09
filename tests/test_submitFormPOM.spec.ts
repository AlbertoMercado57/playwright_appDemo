import {test, expect} from '@playwright/test'
import { describe } from 'node:test';
import {NavigationPage} from '../page_objects/navigationPage';
import { FormLayoutsPage } from '../page_objects/formsLayoutPage';
import { DatePickerPage } from '../page_objects/datePickerPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
  });
  

  test('go to forms page',async ({page}) => {
    const goTo = new NavigationPage(page)
    await goTo.FormLayoutsPage();
    await goTo.DatePickerPage();
    
  });

  test('parametrized methods', async ({page}) => {
    const goTo = new NavigationPage(page);
    const onFormLayoutsPage = new FormLayoutsPage(page);
    await goTo.FormLayoutsPage();
    await onFormLayoutsPage.SubmitUsingTheGridForm('test25@test.com', 'welcome12', 'option 1');

 
  });

  test('select days from today', async ({page}) => {
    const goTo = new NavigationPage(page);
    const datePicker = new DatePickerPage(page);
    await goTo.FormLayoutsPage();
    await goTo.DatePickerPage();
    await datePicker.SelectDateAfterToday(2);
  

  });

