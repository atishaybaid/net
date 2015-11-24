var typeAheadDirectiveApp = angular.module("typeAheadDirectiveApp", []);
typeAheadDirectiveApp.controller("mainCtrl", function($scope) {
    console.log("ctrl working");
    $scope.trigger = false;
    $scope.items = [{
        name: 'sachinRamesh'
    }, {
        name: 'sewhwag'
    }, {
        name: 'dhoni'
    }, {
        name: 'sachinSaha'
    }, {
        name: 'sachinTendulkar'
    }, {
        name: 'sachin'
    }];
});
typeAheadDirectiveApp.directive("typeAheadDirective", typeAheadDirective);

function typeAheadDirective() {
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = 'template.html';
    directive.scope = {
        items: '='
    };
    directive.link = function(scope, element, attrs) {
        scope.checkKeyCode = function(keyCode) {
            console.log("inside check keyCode");
            if (scope.model.lastIndexOf(" @") != -1 ) {
                scope.trigger = true;
                scope.filterQuery = scope.model.slice(scope.model.indexOf("@") + 1);
                console.log(scope.filterQuery);
            } else {
                scope.trigger = false;
            }
            if (keyCode === 32 && scope.trigger === true) {
                scope.trigger = false;
                scope.filterQuery='';
  
            }






        }
        scope.isCurrent = function(index) {}
    }
    return directive;
}