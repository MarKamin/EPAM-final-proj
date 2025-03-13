import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import LoginPage from '../po/pages/login.page.js';
import DashboardPage from '../po/pages/dashboard.page.js'; 

const pages = {
    login: LoginPage,
    dashboard: DashboardPage
};

// Step 1: logins.steps.js

// Step 2: Enter a valid username and a valid password
When(/^I enter a valid username "([^"]*)" and a valid password "([^"]*)"$/, async (username, password) => {
    await LoginPage.enterUsrPsw(username, password);
    console.log(`Entered username: ${username}, password: ${password}`);
});

// Steps 3: login.steps.js (Clicking on login button)

// Step 4: Verify the title on the dashboard
Then(/^I should see the title "([^"]+)" on the dashboard page$/, async (title) => {
    await pages.dashboard.titleName.waitForDisplayed();

    const dashboardPageTitle = await pages.dashboard.titleName.getText();
    console.log('Actual dashboard title:', dashboardPageTitle); 

    await expect(dashboardPageTitle).toEqual(title);
    console.log('**TEST ENDED**')
});