
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
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

test('Clicking Add to Duo btn displays the div with id="player-duo"', async () => {
    // const draw_btn = await driver.findElement(By.id('draw'))
    // await driver.sleep(4000)
    // await draw_btn.click()

    // await driver.sleep(4000)

    const newDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await newDuo.isDisplayed()
    await driver.sleep(3000)
    expect(displayed).toBe(true)

})

