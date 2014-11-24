employeeApp.controller('mainController',function($scope,EmployeeAppFactory,employeeStorage,$http){
	console.log("inside controller");
	//console.dir(EmployeeAppFactory);


	


	$scope.employees = [];

	//employeeAppFactory.display();

	$scope.addData = function(){

		console.log("inside addData")
		var fName = $scope.fName;
		var mName = $scope.mName;
		var lName = $scope.lName;
		var email = $scope.email;
		var location = $scope.location;
		var title = $scope.title;
		var department = $scope.department;
		var userType = $scope.userType;
		var id = new Date().getTime().toString();

		var employee =  new EmployeeAppFactory(id,fName,mName,lName,email,location,title,department,userType);
		console.log(employee);
		employeeStorage.addDataStorage(employee);
		//$scope.employees.push(employee);
		//$scope.display();
		//console.log($scope.employees[0]);


		//window.location = "gridView.html";

	};

	//console.log($scope.employees);

	$scope.display = function(){
	console.log("inside display");	
	$scope.gridOptions = {data:'$scope.employees[0]'};
	window.location = "gridView.html";
	};

	//$scope.gridOptions = {data:'$scope.employees[0]'};


	$http.get('http://localhost:8080/script/data.json').
	success(function(data){
		console.log(data);
		console.dir($http.defaults.headers.common);
	}).
	error(function(){

	});





	


});

