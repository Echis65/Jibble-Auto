import { Builder, By, until } from "selenium-webdriver";
import chrome from 'selenium-webdriver/chrome.js'
import details from './details.json' assert {type: "json"}


const service = new chrome.ServiceBuilder('/usr/local/bin/jibAuto/chromedriver');


const driver = new Builder().forBrowser('chrome').setChromeService(service).build()
const clockInScript = async () => {
    await driver.get('https://jibble.io/app')

    //getting email and password from .env file
    let email = details.email
    let password = details.password
    let emailInput = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[1]/div/div/div/input'))
    const passwordInput  = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/form/div[2]/div/div/div/div[1]/input'))
    let loginButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/div/div/div[2]/div/div/div/div/div[2]/button'))
    await emailInput.sendKeys(email)
    await passwordInput.sendKeys(password)
    await loginButton.click()

    //Implicitly waiting till clock in button is found and clicked
    await driver.manage().setTimeouts( { implicit: 20000 } );
    let clockInButton = await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[1]/header/div/div/div[2]/div/div[2]/button'))
    await clockInButton.click()

    //Implicitly waiting till save button is found and clicked
    await driver.manage().setTimeouts( { implicit: 20000 } );
    let saveButton = await driver.findElement(By.xpath('/html/body/div[1]/div[2]/div[1]/aside/div[1]/div/div[3]/button[2]'))   
    await saveButton.click();
    await driver.manage().setTimeouts( { implicit: 20000 } );
    let clockOutButton = await driver.findElement(By.xpath('/html/body/div[1]/div/div[1]/header/div/div/div[2]/div/div/button[3]'))  

    //explicitly waiting until clockOut button is visible before quitting the browser
    await driver.wait(until.elementIsVisible(clockOutButton))
    driver.quit()
}

clockInScript()
