var directiveApp = angular.module("directiveApp",[]);

var mainCtrl = directiveApp.controller("mainCtrl",function($scope){

	$scope.displayData = function(){
		console.log("inside displayData");

	};

	
}); 


directiveApp.directive("populateList",function(){

//var tasks =[];

	return{
		scope:{
			show:'&'
		},
		


		template:'<input type="text" name="" id="">' +
		          '<input type="button" value="Add" ng-click="show()">'


	}

});
