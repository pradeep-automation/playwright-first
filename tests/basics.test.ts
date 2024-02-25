// import { test, expect} from "@playwright/test";
// import { strict } from "assert";

// test("basic auth", async ({ page })=>{
//     await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
//     await page.waitForTimeout(2000);
// })

// test("auto complete", async ({ page })=>{
//     await page.goto("https://www.google.com");
//     await page.getByTitle("Search").fill("selenium");
//     // await page.keyboard.press('Enter');
//     await page.waitForTimeout(1000);
//     // await page.locator("//ul[@role='listbox']//li").filter({hasText: 'selenium webdriver download'}).click();
//     let listitems = page.locator("//ul[@role='listbox']//li").all();
//     // console.log(await listitems)
//     for (let item of await listitems){
//         if (await item.innerText() == "selenium webdriver"){
//             await item.click();
//             break
//         }

//     }

//     await page.waitForTimeout(2000);
// })


// test("check the speechify", async ({ page })=>{
//     await page.goto("https://speechify.com/");
//     const about = page.locator("//div[@class='speechify-menu-container']//label[text()='About']")
//     await about.hover();
//     await page.waitForTimeout(3000);
//     await page.locator("//div[@class='speechify-menu-container']//label[text()='About']/parent::a/following-sibling::ul//label[text()='Audiobooks']").click();
//     await page.waitForTimeout(3000);

//     //div[@class='speechify-menu-container']//label[text()='About']/parent::a/following-sibling::ul//label[text()='Audiobooks']
// })