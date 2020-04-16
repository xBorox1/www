import {Builder, Capabilities} from 'selenium-webdriver';
import { expect } from 'chai';
import { driver } from 'mocha-webdriver';


describe('testDrugi', function () {
	it('should say something', async function() {
		this.timeout(20000);
		await driver.get('file:///home/antygenius/programs/www/www/index.html');
		expect(await driver.findElement({id: 'dokad'}).getText()).to.include('Lizbona');
		await driver.findElement({id: 'imie'}).sendKeys('Jan');
		await driver.findElement({id: 'nazwisko'}).sendKeys('Woreczko');
		await driver.find('form').submit();

	});

})
