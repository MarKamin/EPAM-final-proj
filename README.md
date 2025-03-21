#  Final task of the EPAM JS Automation course 
by Marius Kaminskas

## Task description
Launch URL: https://www.saucedemo.com/

## UC-1 Test Login form with empty credentials:

Type any credentials into "Username" and "Password" fields.  
Clear the inputs.  
Hit the "Login" button.  
Check the error messages: "Username is required".  
UC-2 Test Login form with credentials by passing Username:  
Type any credentials in username.  
Enter password.  
Clear the "Password" input.  
Hit the "Login" button.  
Check the error messages: "Password is required".  

## UC-2 Test Login form with credentials by passing Username:

Type any credentials in username.  
Enter password.  
Clear the "Password" input.  
Hit the "Login" button.  
Check the error messages: "Password is required".  

## UC-3 Test Login form with credentials by passing Username & Password:

Type credentials in username which are under Accepted username are sections.  
Enter password as secret sauce.  
Click on Login and validate the title “Swag Labs” in the dashboard.  
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks   are supported by these 3 conditions: UC-1; UC-2; UC-3.  
Please, add task description as README.md into your solution!  
To perform the task use the various of additional options:  

Test Automation tool: WebDriverIO;  
Browsers: 1) Chrome; 2) Edge;  
Locators: XPath;  
Patterns: Page Object;  
Assertions: Use from the selected framework;  
[Optional] Loggers: Use from the selected framework.  

## How to Run Tests

1. Clone the repo:
    ```bash
    git clone https://github.com/MarKamin/EPAM-final-proj.git  
2. Change directory
    ```bash
    cd EPAM-final-proj 
3. Install dependencies:
   ```bash
   npm install
   
4. Run all tests:
    ```bash
    npm run wdio
   
5. Run tests separetly using tags if some your low on memory or experience difficulty when running all tests at once 

Example:  
```bash
   npm run wdio -- --cucumberOpts.tagExpression="@UC_1"
   ```
```bash
   npm run wdio -- --cucumberOpts.tagExpression="@UC_2"
```
```bash
   npm run wdio -- --cucumberOpts.tagExpression="@UC_3"
```

## Other Info:

The following code was used for clearing fields, the reason is that after clearValue(), the values were being cleared, but at the last second when Login button was clicked somehow the values were filled in again, but clearing with 'backspace' key solved it:
```javascript
// Clear the password field  
    await LoginPage.inputPassword.click();  
    await browser.keys(['Control', 'a']);  
    await browser.keys('Backspace');  
```
