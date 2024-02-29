import { Page } from "@playwright/test";
import { test, expect } from '@playwright/test';

export class DatePickerPage {

    readonly page: Page

    constructor(page : Page) {
        this.page = page

    }

    async SelectDateAfterToday(numOfDaysfromToday: number) {
        const commonPicker = this.page.locator('nb-card-header', {hasText: 'Common Picker'}) 
        const calendarInput = this.page.getByPlaceholder('Form Picker')
        await calendarInput.click();
        const dateToAssert = await this.selectDateInTheCalendar(numOfDaysfromToday);
        await expect(calendarInput).toHaveValue(dateToAssert)
        
    }

    async SelectDatePickerRange(startDate :number, endDate :number) {
        const calendarInput = this.page.getByPlaceholder('Range Picker')
        await calendarInput.click();
        const dateToAssertStart = await this.selectDateInTheCalendar(startDate)
        const dateToAssertEnd = await this.selectDateInTheCalendar(endDate)
        const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`
        await expect(calendarInput).toHaveValue(dateToAssert)
    }

    private async selectDateInTheCalendar(numOfDaysfromToday: number){
        let date = new Date()
        date.setDate(date.getDate() + numOfDaysfromToday)
        const expectedDate = date.getDate().toString()
        const expectedMonthShort = date.toLocaleString('En-US', {month:'short'})
        const expectedMonthLong = date.toLocaleString('En-US', {month:'long'})
        const expectedYear = date.getFullYear()
        const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`

        let calendatMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
        const expectedMonthAndYear = `${expectedMonthLong} ${expectedYear}`
        while(!calendatMonthAndYear?.includes(expectedMonthAndYear)) {
            await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
            calendatMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()

        }
        await this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true})
        return dateToAssert
        
        }
    }

