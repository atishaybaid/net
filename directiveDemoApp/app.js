var directiveApp = angular.module("directiveApp",[]);

var mainCtrl = directiveApp.controller("mainCtrl",function($scope){

	$scope.check =  0;

	$scope.displayData = function(){
		console.log("inside displayData");

	};

	$scope.keyPress = function(keyCode){
   console.log(keyCode); 
	};

	//$scope.data = [1,2,3];
	

	
	
	
}); 


directiveApp.directive("populateList",function(){

//var tasks =[];

	return{		
		compile:function(element,attribute){
			var elementTmpl = angular.element('<div id="searchBox"><input type="text" name="" id="">'+
								'<ul ng-show="data">'+
								'<li ng-repeat="data in data">{{data}}</li>'+
								'</ul></div>');
			

			element.replaceWith(elementTmpl);
			var input = elementTmpl.find('input');
			
			return function(scope,element,attribute){
				console.log("inside link");
						
				var minKeys = 3;
				input.bind('keyup',function(e){
					console.log("inside bind");
					value = input.val();
					console.log(value.length);
					console.log(scope.data);
					if(value.length > 3){
						scope.data = [1,2,3];
					} else{
						scope.data = null;

					};
					
				});

			}










			


	

		          


	}
		}

});
