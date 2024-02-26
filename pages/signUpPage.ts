import { Page } from "@playwright/test";

export default class SignUpPage{
    constructor(public page: Page){
        this.page = page;
    }

    async enterEmail(email: string){
        await this.page.locator("//input[@id='username']").fill(email);
    }

    async enterPassword(password: string){
        await this.page.locator("//input[@id='password']").fill(password);
    }

    async clickSignUp(){
        await this.page.getByRole('button', {name: 'Submit'}).click();
    }


    

}