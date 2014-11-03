
var employeeApp = angular.module("employeeApp",[]);

employeeApp.factory('employeeAppFactory', function employeeAppFactory(x){

	console.log("inside factory");
	var factory ={};

	factory.display = function(){
		console.log("inside display");
	};

	console.log(factory);
	console.log(x);
	
	return factory;

});



employeeApp.controller('mainController',function($scope,employeeAppFactory){
	console.log("inside controller");
	console.log(employeeAppFactory);

	employeeAppFactory.display();

	$scope.addData = function(){

		var fName = $scope.fName;
		var mName = $scope.mName;
		var lName = $scope.lName;
		var location = $scope.location;
		var title = $scope.title;
		var department = $scope.department;
		var userType = $scope.userType;

		var newEmployee =  new employeeAppFactory("HEY")

	}


});