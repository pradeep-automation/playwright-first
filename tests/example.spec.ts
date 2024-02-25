// import { test, chromium } from "@playwright/test";

// test("sample test", async ()=>{
//   const browser = await chromium.launch({
//     headless: false
//   });
//   const context = await browser.newContext();
//   const page = await context.newPage();
//   await page.goto("https://www.yatra.com");
//   const fromCity = page.locator("//input[@id='BE_flight_origin_city']");
//   const toCity = page.locator("//input[@id='BE_flight_arrival_city']");
//   const deptDateIcon = page.locator("#BE_flight_origin_date");
//   await fromCity.click();
//   await fromCity.fill("Goa");
//   // await page.screenshot({path: 'myfile.png'});
//   const fromList = await page.locator(".initial-tab .viewport li").all();
//   for (const item of fromList){
//     let itemText = await item.textContent();
//     if (itemText?.includes("Manohar")){
//       await item.click();
//       break;
//     }
//     }
//   await toCity.click();
//   await toCity.fill("Delhi");
//   // await page.screenshot({path: 'myfile.png'});
//   const toList = await page.locator(".dest_ac .viewport li").all();
//   for (const item of toList){
//     let itemText = await item.textContent();
//     if (itemText?.includes("Indira Gandhi")){
//       await item.click();
//       break;
//     }
//     }
//     // Selecting departure date
//     await deptDateIcon.click();
//     await page.locator(".BE_flight_origin_date td[data-date='23/03/2024']").click();
//     await page.locator("//input[@value='Search Flights']").click();
//     await page.waitForTimeout(3000);

//   })