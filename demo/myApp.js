var myApp = angular.module('myApp', ['ui-rangeSlider']);
      myApp.controller('CountryCtrl', function ($scope){
        $scope.min = 0;
        $scope.max = 100;
        $scope.game = {val:''};
         $scope.radioList = [{value:'Cricket',length:50},{value:'FootBall',length:90},{value:'Hockey',length:45}
        ];

  			console.log("controller running");
  				$scope.sum = function(){
  			var firstNum =parseInt($scope.firstNum);
  			var secondNum =parseInt($scope.secondNum);
  			$scope.result = firstNum+secondNum;
                    $scope.placeholder = 'doctors';
            console.log($scope.game.val);


  				};


      });