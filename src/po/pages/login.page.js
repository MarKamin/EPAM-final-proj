import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Login page and methods for getting elements using selectors
 */
class LoginPage extends Page {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    async enterUsrPsw (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
    }
}

export default new LoginPage();
