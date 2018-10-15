import { browser, element, by, $$ } from "protractor";
import { AppPage } from "./app.po";

/*
1.0: Create a new sitter
*/

// 1: Navigate to findasitter
// 2: Fill out login and click
// 3: Count number of sitters
// 4: Navigate to register without browser.get(no page reload!)
// 5: Fill out form to register a new sitter
// 6: Navigate to sitters-list without browser.get
// 7: Count number of sitters (b)
// 8: Expect b-a should be 1




describe("sitter-list", () => {

    it("Creates a new sitter and after, there should be one more", () => {
        browser.get("/portal/findasitter"); // browser.get reloader din single page application
        let page = new AppPage();

        page.login();

        element.all(by.css(".example-card")).then(function (elemsBefore) {

            let sittersCountBefore = elemsBefore.length;
            $$("menuRegister").click();

            $$("#usernameInput").sendKeys("Joachim");
            $$("#passwordInput").sendKeys("Joachims password");
            $$("#usernameInput").sendKeys("Joachim");
            $$("#createSitter").click();

            page.login();
            element.all(by.css(".example-card")).then(function (elemsAfter) {
                let sittersCountAfter = elemsAfter.length;
                expect(sittersCountAfter - sittersCountBefore).toBe(1);
            });

        });
        browser.sleep(1500);
    });

});