import { When } from '@wdio/cucumber-framework';

import LoginPage from '../po/pages/login.page.js';

// Step 1: login.steps.js

// Step 2: Enter any username and password
// When(/^I enter some username and password$/, async () => {
//     await LoginPage.inputUsername.setValue('some_username2');
//     await LoginPage.inputPassword.setValue('some_password2');
// });
// Step 2: Enter any username and password
When(/^I enter some username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    await LoginPage.enterUsrPsw(username, password);
    console.log(`Entered username: ${username}, password: ${password}`);
});

// Step 3: Clear the username and password fields
When(/^I clear the password field$/, async () => {
    // Clear the password field
    await LoginPage.inputPassword.click(); 
    await browser.execute(() => {
        document.querySelector('#password').select(); 
    });
    await browser.keys(['Backspace']);
    console.log('Cleared the password field'); 
});


