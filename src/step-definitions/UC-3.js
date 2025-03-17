import { When, Then, Given } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import LoginPage from '../po/pages/login.page.js';
import DashboardPage from '../po/pages/dashboard.page.js'; 

const pages = {
    login: LoginPage,
    dashboard: DashboardPage
};

// Step 1: Enter Login page
Given(/^I connected to the login page$/, async () => {
    await pages.login.open();
});

// Step 2: Enter a valid username and a valid password
When(/^I enter a valid username "([^"]*)" and a valid password "([^"]*)" and click Login button$/, 
    async (username, password) => {
    await LoginPage.enterUsrPsw(username, password);
    console.log(`Entered username: ${username}, password: ${password}`);

    await LoginPage.btnSubmit.click();
});

// Step 3: Verify the title on the dashboard
Then(/^I should see the title "([^"]+)" on the dashboard page$/, async (title) => {
    await pages.dashboard.titleName.waitForDisplayed();
    const dashboardPageTitle = await pages.dashboard.titleName.getText();

    await expect(dashboardPageTitle).toEqual(title);
});