import { browser } from '@wdio/globals'

/**
* main page object 
* that is shared across all page objects
*/
export default class Page {
    
    open (path = '') {
        return browser.url(`https://www.saucedemo.com/${path}`)
    }
}