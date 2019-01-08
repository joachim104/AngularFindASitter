import { AppPage } from './app.po';
import { browser, element, by, $$, protractor } from 'protractor';
import { timeout } from 'q';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Find A Sitter!');
  });

  it("create new sitter", () => {

    page.navigateToLogin();
    page.login();

    element(by.id("portalBtn")).click();
    browser.sleep(7000);

    element.all(by.css(".example-card")).then(function (elemsBefore) {

      let sittersCountBefore = elemsBefore.length;

      page.navigateTo();
      // browser.sleep(1000);
      element(by.id("registerBtn")).click();
      browser.sleep(1000);
      element(by.className("sitterBtn")).click();
      browser.sleep(500);
      element(by.id('username')).sendKeys('UUUUUUUUUUUU');
      element(by.id('password')).sendKeys('UUUUUUUUUUUU');
      element(by.id('firstname')).sendKeys('UUUUUUUUUU');
      element(by.id('lastname')).sendKeys('UUUUUUUUUUUUU');
      element(by.id('age')).sendKeys('10');
      element(by.id('gender')).sendKeys('MALE');
      element(by.id('city')).sendKeys('KBH');
      browser.sleep(1000);
      element(by.id('hourly-wage')).sendKeys('WAGE');
      element(by.id('createSitter')).click();

      page.navigateToLogin();
      browser.sleep(500);
      page.login();
      browser.sleep(500);
      element(by.id("portalBtn")).click();
      browser.sleep(7000);

      element.all(by.css(".example-card")).then(function (elemsAfter) {
        const sittersCountAfter = elemsAfter.length;
        expect(sittersCountAfter).toBe(sittersCountBefore + 1);
        browser.sleep(1000);
      });
    });
  });
});
