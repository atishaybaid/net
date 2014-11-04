
var employeeApp = angular.module("employeeApp",['ngGrid']);

employeeApp.factory('EmployeeAppFactory', function(){

	console.log("inside factory");

	EmployeeAppFactory = function(fName,mName,lName,location,title,department,userType){
		this.fName = fName;
		this.mName = mName;
		this.location = location;
		this.title = title;
		this.department = department;
		this.userType =userType;

	};

	return EmployeeAppFactory;

});



employeeApp.controller('mainController',function($scope,EmployeeAppFactory){
	console.log("inside controller");
	console.dir(EmployeeAppFactory);


	


	$scope.employees = [];

	//employeeAppFactory.display();

	$scope.addData = function(){

		console.log("inside addData")
		var fName = $scope.fName;
		var mName = $scope.mName;
		var lName = $scope.lName;
		var location = $scope.location;
		var title = $scope.title;
		var department = $scope.department;
		var userType = $scope.userType;

		var employee =  new EmployeeAppFactory(fName,mName,lName,location,title,department,userType);
		console.log(employee);
		$scope.employees.push(employee);
		//$scope.display();
		console.log($scope.employees[0]);


		//window.location = "gridView.html";

	};

	console.log($scope.employees);

	$scope.gridOptions = {data:'$scope.employees[0]'};


	


});