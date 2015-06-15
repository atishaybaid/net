todoApp.controller("mainCtrl", function mainCtrl($scope, taskManager) {
    mainCtrl.$inject = ['$scope', 'taskManager'];

    $scope.addTask = function (task) {
        $scope.retriveTaskList = taskManager.saveTask(task);
        $scope.task = '';
    };

    $scope.retriveTaskList = taskManager.retriveTask();


    angular.element(document).ready(function () {
        $scope.retriveTaskList = taskManager.retriveTask();
    });




});