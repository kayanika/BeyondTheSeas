const { Builder, By, Key, until, Actions , Browser } = require('selenium-webdriver');

// Create a new WebDriver instance
const driver = new Builder().forBrowser('chrome').build();
//const actions = new Actions(driver);

async function scrapeData() {
  try {
    // Navigate to the initial page
    await driver.get('https://www.phdportal.com/'); // Replace with the actual URL

    // Find the section with id "DisciplineSpotlight"
    const disciplineSpotlight = await driver.findElement(By.id('DisciplineSpotlight'));

    // Find all clickable elements within the section
    const clickableElements = await disciplineSpotlight.findElements(By.css('li[data-clickable="clickable"]'));

    // Iterate through clickable elements
    for (const element of clickableElements) {
      // Click on the element to go to the next page
      const name = await element.findElement(By.css('a')).getText();
      //
     // driver.elementClick(name);
      console.log("now I am clicking on this element ", name);
   //await element.click();
    await driver.executeScript("arguments[0].click()", element);
  //  actions.moveToElement(element).click().build.perform(); 
    //driver.actions().moveToElement(element).click().perform();
    
   // await driver.actions().move({origin: element}).perform();
    

    // Example: Perform a right-click on the element
    await driver.actions().contextClick(element).perform();
    await driver.actions().click(element).perform();
    await driver.executeScript("arguments[0].click()", element);
   const  windowHandles = await driver.getAllWindowHandles();
   windowHandles.forEach((handle) => {
    console.log("windowHandles", handle);
    });
    console.log("windowHandles", windowHandles);
    await driver.switchTo().window(typeof(windowHandles[1]));

    const currentURL = await driver.getCurrentUrl();
    console.log('Current URL:', currentURL);

     
      // Print or store the scraped data
      console.log("I am inside the clickable element");
      const disciplineConversion = await driver.findElement(By.xpath('//*[@id="galactus"]/div[2]/div/div[3]/aside/a'));
      //*[@id="galactus"]/div[2]/div/div[3]/aside/a
      console.log("found the discipline conversion element");
const link = await disciplineConversion.findElement(By.css('a'));
const name1 = await element.findElement(By.css('a')).getText();
      console.log("now I am clicking on this element ", name1);
 await driver.executeScript("arguments[0].click()", link);

      // Go back to the previous page to click the next element
      //await driver.executeScript("arguments[0].click()", element);

      //await driver.navigate().back();
    }
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    // Close the WebDriver instance when done
    await driver.quit();
  }
}

// Call the scrapeData function to start scraping
scrapeData();
