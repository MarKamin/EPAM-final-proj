import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * Main page when valid login credentials are entered
 */
class DashboardPage extends Page {
    
    get titleName () {
        return $('.header_label .app_logo');
    }
}

export default new DashboardPage();