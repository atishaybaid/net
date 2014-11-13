describe("An AngularJs test suite",function() {
	var calculator;
	beforeEach(function(){
		calculator = new Calculator();

	});

	it('should have tests',function(){
		expect(true).toBe(true);

	});

	it('should add two numbers',function() {
		// body...

		//Arrange
		var num1 = 10;
		var num2 =20;
		var expectedResult = 30;

		//Act
		calculator.add(num1,num2);


		//Assert
		expect(calculator.result).toBe(expectedResult);


	});

	it('should subtract two numbers',function(){
		//Arrange
		var num1 = 10;
		var num2 = 20;
		var expectedResult = -10;

		//Act
		calculator.subtract(num1,num2);

		//Assert
		expect(calculator.subtract).toBe(expectedResult);
	});

	beforeEach(function(){
		var module = angular.module("employeeApp",['ngGrid']);
	});

	it('should be registered',function(){
		expect(module).not.to.equal(null);
	});

	



});