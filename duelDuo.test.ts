
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw btn displays the div with id="choices"', async () => {
    const draw_btn = await driver.findElement(By.id('draw'))
    await driver.sleep(4000)
    await draw_btn.click()
})

test('Clicking See All Bots shows the list of robots', async () => {
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(3000)
    const botsDiv = await driver.findElement(By.id('all-bots')).getText()
    expect(botsDiv).not.toEqual('')

})

