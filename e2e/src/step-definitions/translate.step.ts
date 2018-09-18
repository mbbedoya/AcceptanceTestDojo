import { defineSupportCode } from 'cucumber';
import { browser, ElementFinder } from 'protractor';
import { expect } from 'chai';
import { GoogleHomePage } from '../pages/googleHomePage.po';
import { GoogleTranslatePage } from '../pages/googleTranslatePage.po';
import { async } from 'q';


let googleTranslatePage: GoogleTranslatePage;
let googleHomePage: GoogleHomePage;
let { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);


function waitForElement(element: ElementFinder) {
   let until = browser.ExpectedConditions;
   browser.sleep(3000);
   browser.wait(until.presenceOf(element), 5000, 'Element taking too long to appear in the DOM');
}


defineSupportCode(({ Before, Given, When, Then }) => {

  Before(() => {
    googleHomePage = new GoogleHomePage();
    googleTranslatePage = new GoogleTranslatePage();
  });

  Given('user is in Google home page', (done) => {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com/');
    done();

  });

  Given('user clicks on the aplications button', (done) => {
    waitForElement(googleHomePage.aplications_button);
    googleHomePage.aplications_button.click();
    done();
  });

  Given('user selects Google translate aplication', (done) => {
    waitForElement(googleHomePage.google_translate_button);
    googleHomePage.google_translate_button.click();
    done();
  });


  When('he translate the word {string} from english to spanish', (word) => {
    waitForElement(googleTranslatePage.source_lenguage_button);
    googleTranslatePage.source_lenguage_button.click();
    waitForElement(googleTranslatePage.english_option);
    googleTranslatePage.english_option.click();
    waitForElement(googleTranslatePage.destiny_lenguage_button);
    googleTranslatePage.destiny_lenguage_button.click();
    waitForElement(googleTranslatePage.spanish_option);
    googleTranslatePage.spanish_option.click();
    waitForElement(googleTranslatePage.translate_area);
    googleTranslatePage.setValue(googleTranslatePage.translate_area, word);
    waitForElement(googleTranslatePage.translate_button);
    googleTranslatePage.translate_button.click();
  });

  Then('he most to see the word {string} on the screen', async (word) => {
    await googleTranslatePage.translated_area.isPresent().then(() => {
      googleTranslatePage.translated_area.getText().then(text => {
        expect(text.trim()).to.be.equal(word.trim());

      });
    });
  });

});

