import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../po/pages/login.page.js';
import errorMessageBox from '../po/components/loginError.component.js';

const pages = {
    login: LoginPage
};

// Step 1: Land on Login page
Given(/^I am at the login page$/, async () => {
    await pages.login.open();
});

// Step 2: Enter any username and password
When(/^I enter some username "([^"]*)" and password "([^"]*)", clear password field and click Login$/, async (username, password) => {
    await LoginPage.enterUsrPsw(username, password);

    // Clear the password field
    await LoginPage.inputPassword.click(); 
    await browser.execute(() => {
        document.querySelector('#password').select(); 
    });
    await browser.keys(['Backspace']);

    // Click Login
    await LoginPage.btnSubmit.click();
});

// Step 3: Displaying error message
Then(/^I should see the box with error message saying (.+)$/, async (errorMessage) => {
    await errorMessageBox.errorName.waitForDisplayed();
    const errorElement = await errorMessageBox.errorName.getText();

    await expect(errorElement).toContain(errorMessage);
});


