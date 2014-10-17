var employeeApp = angular.module("employeeApp",[]);

employeeApp.controller('mainController',function($scope,$http){
	console.log("inside controller");

	$scope.addData = function(){
		console.log("inside getData");
		var fName = $scope.fName;
		var mName = $scope.mName;
		var lName =	$scope.lName;
		var email = $scope.email;
		var location = $scope.location;
		var skill = $scope.skill;
		var title = $scope.title;
		var department = $scope.department;
		var userType = $scope.userType;

		console.log(fName,mName,lName,email,location,skill,title,department,userType);
    };


	$http.get('script/data.json').success(function(data){
          $scope.countries = data;
    	  console.log($scope.countries);
    });	  



});