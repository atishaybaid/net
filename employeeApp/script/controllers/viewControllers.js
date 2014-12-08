employeeApp.controller('viewController',function($scope,employeeStorage){

	console.log("inside viewController");
	$scope.getData = employeeStorage.getData();
	console.log($scope.getData);

	//$scope.myData = $scope.getData;

	 $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];


      							
                    

	$scope.gridOptions = {
		data:'myData',
		/*columnDefs: [{field:'fName',displayName:First Name},{field:'mName',displayName:Middle Name},{field:'lName',displayName:Last Name} {field:'email',displayName:Email},{field:'location',displayName:Location},{field:'title',displayName:title},
		             {field:'department',displayName:Department},{field:'userType',displayName:User Type},{field:'id',displayName:ID}],*/
		columnDefs: [{ field: 'name', displayName: 'First Name', width: 90, cellTemplate: '<div ng-click="sayHello()">{{row.entity[col.field]}}</div>' },
                     { field: 'age', displayName: 'Age', width: 80 }
                    ],
         //rowTemplate:  rowTemplate: '<div ng-dblclick="onDblClickRow(row)" ng-style="{ \’cursor\’: row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>',

		showGroupPanel: true,
		headerRowTemplate:'<div ng-style="{ height: col.headerRowHeight }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()"  ng-click="expandAllRows()" class="ngHeaderCell" ng-header-cell></div>',
		  enableColumnResize: true,
      enableColumnReordering: true
      //rowTemplate:  rowTemplate: '<div ng-dblclick="onDblClickRow(row)" ng-style="{ \’cursor\’: row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>'
		
	};

	$scope.sayHello = function(){
		console.log("Hello");
	};

	$scope.expandAllRows = function(){
			console.log("inside expandAllRows");
             angular.forEach($scope.gridOptions.ngGrid.rowFactory.aggCache,function(row){
                row.toggleExpand();
    		});

    };


    $scope.onDblClickRow = function(rowItem) {
        // do something here with rowItem.rowIndex
        console.log(rowItem);
    };







});
