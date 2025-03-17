import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../po/pages/login.page.js';
import errorMessageBox from '../po/components/loginError.component.js';

const pages = {
    login: LoginPage
};

// Step 1: Enter Login page
Given(/^I am on the login page$/, async () => {
    await pages.login.open();
});

// Step 2: Enter any username and password
When(/^I enter any username "([^"]*)" and password "([^"]*)", then clear the fields and click Login$/, 
    async (username, password) => {
    await LoginPage.enterUsrPsw(username, password);

    // Clear the User field
    await LoginPage.inputUsername.click(); 
    await browser.keys(['Control', 'a']); 
    await browser.keys('Backspace'); 

    // Clear the password field
    await LoginPage.inputPassword.click();
    await browser.keys(['Control', 'a']); 
    await browser.keys('Backspace'); 
    
    //Clicking Login button
    await LoginPage.btnSubmit.click();
});

// Step 3: Displaying error message
Then(/^I should see a box with error message saying (.+)$/, async (errorMessage) => {
    await errorMessageBox.errorName.waitForDisplayed();
    const errorElement = await errorMessageBox.errorName.getText();
   
    await expect(errorElement).toContain(errorMessage);
});


