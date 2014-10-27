var app = angular.module('myApp', ['ngGrid']);
app.controller('MyCtrl', function($scope) {
    $scope.myData = [{name: "Suresh", incomeTax: 50.00,percentage:12.6666},
  					 {name: "Ramesh", incomeTax: 646.684,percentage:52.9810},
						 {name: "Jay", incomeTax: 27.368,percentage:32.9066},
						 {name: "Ram", incomeTax: 29.325,percentage:2.8356},
						 {name: "Shyam", incomeTax: 34.415,percentage:31.1111}];
	
	//loop to roundoff data					 
		for(var i in $scope.myData){
		  $scope.myData[i].percentage = $scope.myData[i].percentage.toFixed(2);
		  $scope.myData[i].incomeTax = $scope.myData[i].incomeTax.toFixed(1);
		
		}
						 
    $scope.gridOptions = { 
        data: 'myData',
        columnDefs: [{field: 'name', displayName: 'Name'},
                     {field:'incomeTax', displayName:'Income Tax'},
                     {field: 'percentage', displayName: '%age'}]
        };
});