import { $ } from '@wdio/globals'
import Page from '../pages/page.js';

class errorMessageBox extends Page {
    /**
     * Error name after failed login
     */
    get errorName () {
        return $('//h3[@data-test="error"]');
    }
}

export default new errorMessageBox();