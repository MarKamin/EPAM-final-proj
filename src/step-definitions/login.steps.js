import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import LoginPage from '../po/pages/login.page.js';
import errorMessageBox from '../po/components/loginError.component.js';

const pages = {
    login: LoginPage
};

// Login steps that are shared for UC-1, UC-2 an UC-3:

// Step 1: Enter main page
Given(/^I am on the login page$/, async () => {
    await pages.login.open();
    console.log('***TEST STARTED***')
    // Disable autofill for the username and password fields
    await browser.execute(() => {
        document.querySelector('#user-name').autocomplete = 'off';
        document.querySelector('#password').autocomplete = 'off';
    });
});

// Step 4: Clicking Login button
When(/^I click on the Login button$/, async () => {
    await LoginPage.btnSubmit.click();
    await browser.pause(1000); // Small pause for debugging
});

// Step 5: Displaying error message
Then(/^I should see a box with error message saying (.+)$/, async (errorMessage) => {
    await errorMessageBox.errorName.waitForDisplayed();

    const errorElement = await errorMessageBox.errorName.getText();
    console.log('Actual error message:', errorElement);

    await expect(errorElement).toContain(errorMessage);
    console.log('***TEST ENDED***')
});