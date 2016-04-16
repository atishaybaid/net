var myApp = angular.module('myApp', ['ui-rangeSlider']);
      myApp.controller('CountryCtrl', function ($scope){
        $scope.min = 0;
        $scope.max = 100;

  			console.log("controller running");
  				$scope.sum = function(){
  			var firstNum =parseInt($scope.firstNum);
  			var secondNum =parseInt($scope.secondNum);
  			$scope.result = firstNum+secondNum;
                    $scope.placeholder = 'doctors';
  				};
      });