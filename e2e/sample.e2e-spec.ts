import { AppiumDriver, createDriver, SearchOptions, nsCapabilities } from "nativescript-dev-appium";
import { assert } from "chai";
const addContext = require('mochawesome/addContext');

describe("items component", () => {
    let driver: AppiumDriver;

    before(async function(){
        nsCapabilities.testReporter.context = this; 
        driver = await createDriver();
    });

    after(async function () {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    it("should find button", async function () {
        const btnTap = await driver.findElementByAutomationText("TAP");
        assert.isDefined(btnTap);

        // Image verification
        // assert.isTrue(screen);
    });
    
    it("should tap on button and update text", async function () {
        let counter = 0;
        const btnTap = await driver.findElementByClassName(driver.locators.button);
        const lblCounter = await driver.findElementByAutomationText("count-label");
        assert.equal(await lblCounter.text(), `Test ${ counter }`);
        await btnTap.click();
        counter++;
        assert.equal(await lblCounter.text(), `Test ${ counter }`);
        await btnTap.click();
        counter++;
        assert.equal(await lblCounter.text(), `Test ${ counter }`);
        const screen = await driver.compareScreen("btn-taped");
        assert.isTrue(screen);
    });
});