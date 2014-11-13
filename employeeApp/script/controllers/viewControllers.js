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
