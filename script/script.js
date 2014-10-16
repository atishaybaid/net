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

		$http.post('/check.json', {msg:'hello word!'}).
  success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

	};



});