import {test, expect} from '@playwright/test'
import { describe } from 'node:test';
import {NavigationPage} from '../page_objects/navigationPane';
import { FormLayoutsPage } from '../page_objects/formsLayoutPage';
import { DatePickerPage } from '../page_objects/datePickerPage';
import { getPackedSettings } from 'node:http2';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200');
  });
  

  test('go to forms page',async ({page}) => {
    const goTo = new NavigationPage(page)
    await goTo.FormLayoutsPage();
    await goTo.DatePickerPage();
    await goTo.ModalAndOverlay();
    await goTo.ExtraComponents();
    await goTo.TablesAndData();
    await goTo.Auth();


    
  });

  test('parametrized form', async ({page}) => {
    const goTo = new NavigationPage(page);
    const onFormLayoutsPage = new FormLayoutsPage(page);
    await goTo.FormLayoutsPage();
    await onFormLayoutsPage.SubmitUsingTheGridForm('test28@test.com', 'welcome1', 'option 2');

 
  });

  test('select days from today', async ({page}) => {
    const goTo = new NavigationPage(page);
    const datePicker = new DatePickerPage(page);
    await goTo.FormLayoutsPage();
    await goTo.DatePickerPage();
    await datePicker.SelectDateAfterToday(10);
  
  

  });

