import { By, WebDriver,until } from "selenium-webdriver"

export class SpecPage {
    driver:WebDriver
    url:string = "https://www.google.com";
    searchfield:By = By.name("q");
    result:By = By.id("rso");

constructor(driver:WebDriver){
    this.driver = driver;
}

   async navigate(){
        await this.driver.get(this.url);
    }
    async doSearch(item:string){
        await this.driver.wait(until.elementLocated(this.searchfield));
        await this.driver.findElement(this.searchfield).sendKeys(`${item}\n`);
    }
    async getResults(){
        return await (await this.driver.findElement(this.result)).getText();
    }
}
