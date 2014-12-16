employeeApp.controller('viewController',function($scope,employeeStorage){

	console.log("inside viewController");
	$scope.getData = employeeStorage.getData();
	console.log($scope.getData);

	//$scope.myData = $scope.getData;

	 $scope.myData = [{name: "Moroni", status: true},
                     {name: "Tiancum", status: true},
                     {name: "Jacob", status: false},
                     {name: "Nephi", status: false},
                     {name: "Enos", status: true}];

                    

	$scope.gridOptions = {
		data:'myData',
		 cellEditableCondition: 'row.getProperty(\'status\') === true',
		columnDefs: [{field: 'name', displayName: 'Name', enableCellEdit: true}, {field:'status', displayName:'Status'}]
		//showGroupPanel: true,
		//headerRowTemplate:'<div ng-style="{ height: col.headerRowHeight }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()"  ng-click="expandAllRows()" class="ngHeaderCell" ng-header-cell></div>'
		
	};

	$scope.expandAllRows = function(){
			console.log("inside expandAllRows");
             angular.forEach($scope.gridOptions.ngGrid.rowFactory.aggCache,function(row){
                row.toggleExpand();
    		});

    };



$scope.addData = function(){
	$scope.myData.push({name: "new Entry", status: false});
}



});
