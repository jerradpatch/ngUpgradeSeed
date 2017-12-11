import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/', 60000);
  }

  getTitle() {
    return element(by.tagName('h1')).getText();
  }
}
