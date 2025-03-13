import { When } from '@wdio/cucumber-framework';

import LoginPage from '../po/pages/login.page.js';

// Step 1: login.steps.js

// Step 2: Enter any username and password
When(/^I enter any username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    await LoginPage.enterUsrPsw(username, password);
    console.log(`Entered username: ${username}, password: ${password}`);
});

// Step 3: Clearing the username and password fields
When(/^I clear the username and password fields$/, async () => {
    // Clear the username field
    await LoginPage.inputUsername.click(); 
    await browser.execute(() => {
        document.querySelector('#user-name').select(); 
    });
    await browser.keys(['Backspace']); 
    console.log('Cleared the username field')

    // Clear the password field
    await LoginPage.inputPassword.click(); 
    await browser.execute(() => {
        document.querySelector('#password').select(); 
    });
    await browser.keys(['Backspace']); 
    console.log('Cleared the password field')
});


