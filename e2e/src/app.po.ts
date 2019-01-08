import { browser, by, element } from 'protractor';

export class AppPage {
  

  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  login(): void {
    element(by.id("username")).sendKeys("MyUserName");
    // browser.sleep(1000);
    element(by.id("password")).sendKeys("mypassword");
    // browser.sleep(1000);
    element(by.className("btnLogin")).click();
  }

  navigateToLogin(){
    return browser.get("/login")
  }

  


}
