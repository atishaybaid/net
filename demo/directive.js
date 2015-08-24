myApp.directive('splInput', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		scope: {
			ngClass: '=',
			type: '@',
			width: '@',
			height: "@",
			marginleft: '@',
			margintop: '@',
			name: '@',
			placeholder: '@',
			bordertop: '@',
			borderbottom: '@',
			backgroundcolor: '@',
			textalign: '@',
			showspan: '='
		}, 
		// {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		 // Array = multiple requires, ? = optional, ^ = check parent elements
		 restrict: '', // E = Element, A = Attribute, C = Class, M = Comment
		 template: 	'<div class="inputs appt_inputs nobordertop noborderbottom" style="width:{{ width }}%; height: {{ height }}px; border-bottom:{{ borderbottom }}; border-top:{{ bordertop }}; margin-left: {{ marginleft }}px; margin-top: {{ margintop }}px; background-color: {{ backgroundcolor }}; text-align: {{ textalign }};" ng-class="ngClass" >'+
		 				'<span class="aboveinput" ng-show="showspan">{{placeholder}}</span>'+	
		 				'<span ng-transclude></span>'+	 		
                    '</div>',
		// templateUrl: '',
		// replace: true,
		 transclude: true,	
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, iElm, iAttrs, controller) {
			/*$scope.place = $scope.placeholder;
			$scope.remplaceholder = function() {
				$scope.placeholder = '';
			}
			$scope.addplaceholder = function() {
				$scope.placeholder = $scope.place;
			}*/
		}
			
	};
});