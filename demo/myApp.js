var myApp = angular.module('myApp', []);
      myApp.controller('CountryCtrl', function ($scope){
  			
  			console.log("controller running");  
  				$scope.sum = function(){
  			var firstNum =parseInt($scope.firstNum);
  			var secondNum =parseInt($scope.secondNum);
  			$scope.result = firstNum+secondNum; 
                    $scope.placeholder = 'doctors';
  				};
      });