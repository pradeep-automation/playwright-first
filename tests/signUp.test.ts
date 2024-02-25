import { test, expect } from "@playwright/test";
import SignUpPage from "../pages/signUpPage";

test("validate the sign up page", async ({ page, baseURL })=>{
    page.setDefaultNavigationTimeout(60000);
    await page.goto(`${baseURL}`);
    const signup = new SignUpPage(page);
    signup.enterEmail("student");
    await page.waitForTimeout(1000);
    signup.enterPassword("Password123")
    signup.clickSignUp();
    // await page.getByPlaceholder("Email").fill("test@test.com");
    // await page.getByPlaceholder("Password").fill("Pass$5678");
    // await page.getByRole('button', {name: 'Sign up'}).click();
    await page.waitForTimeout(3000);
    const h1 = page.locator("//h1");
    await expect(h1).toContainText("Logged")


}
)
