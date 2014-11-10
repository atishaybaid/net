
var employeeApp = angular.module("employeeApp",['ngGrid','ngRoute']);

employeeApp.factory('EmployeeAppFactory', function(){

	console.log("inside factory");

	EmployeeAppFactory = function(id,fName,mName,lName,email,location,title,department,userType){
		this.id = id;
		this.fName = fName;
		this.mName = mName;
		this.lName = lName;
		this.email = email;
		this.location = location;
		this.title = title;
		this.department = department;
		this.userType =userType;

	};

	return EmployeeAppFactory;

});

employeeApp.service('employeeStorage',function(){
	console.log("inside service");
	
	this.addDataStorage = function(employee){
		console.log("inside addDataStorage");
		window.localStorage.setItem(employee.id,window.JSON.stringify(employee));
	};

	this.getData = function(){
		var result = [];

		for(var i = 0; i<window.localStorage.length;i++){
			 var key = window.localStorage.key(i);
             var dataAsString = window.localStorage.getItem(key);
             var employee = window.JSON.parse(dataAsString);
             //var employee = new Task(data);
             result.push(employee);
		};

		return result;
	};



});



employeeApp.controller('mainController',function($scope,EmployeeAppFactory,employeeStorage){
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

	


});



employeeApp.controller('viewController',function($scope,employeeStorage){

	console.log("inside viewController");
	$scope.getData = employeeStorage.getData();
	console.log($scope.getData);

	$scope.myData = $scope.getData;

	 /*$scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];

                    */

	$scope.gridOptions = {
		data:'myData',
		/*columnDefs: [{field:'fName',displayName:First Name},{field:'mName',displayName:Middle Name},{field:'lName',displayName:Last Name} {field:'email',displayName:Email},{field:'location',displayName:Location},{field:'title',displayName:title},
		             {field:'department',displayName:Department},{field:'userType',displayName:User Type},{field:'id',displayName:ID}],*/
		showGroupPanel: true,
		headerRowTemplate:'<div ng-style="{ height: col.headerRowHeight }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()"  ng-click="expandAllRows()" class="ngHeaderCell" ng-header-cell></div>'
		
	};

	$scope.expandAllRows = function(){
			console.log("inside expandAllRows");
             angular.forEach($scope.gridOptions.ngGrid.rowFactory.aggCache,function(row){
                row.toggleExpand();
    		});

    };







});


employeeApp.config(['$routeProvider',
	function ($routeProvider) {
		// body...
		$routeProvider.
			when('/form',{
				templateUrl:'../partials/form.html',
				controller:'mainController'
			}).
			when('/gridView',{
				templateUrl:'../partials/gridView.html',
				controller:'viewController'
			}).
			otherwise({
				redirectTo:'/form',

			});

	}]);

