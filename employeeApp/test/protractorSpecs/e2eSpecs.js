describe("e2e  etest cases",function() {
	// body...
	it("Should have a title",function(){
		browser.get('http://localhost:8080/#/form');
		expect(browser.getTitle()).toEqual('Employee App');


	});



	it("Should be able to add two numbers",function(){
		browser.get('http://localhost:8080/calculatorView.html');
		//document.getElementById('datePicker').value = "";
		element(by.model('number1')).sendKeys(10);
		element(by.model('number2')).sendKeys(20);

		

		element(by.id('addButton')).click();

		//document.getElementById('datePicker').value = "";

		element(by.model('dt')).clear();

		element(by.model('dt')).sendKeys('2-december-2014');
		expect(element(by.model('dt')).getAttribute('value')).toEqual('2-december-2014');

		
	});




});