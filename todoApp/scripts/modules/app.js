define(['services/storageService', 'services/taskManager', 'controllers/mainCtrl'], function (storageService,taskManager,mainCtrl) {
    angular.module("todoApp", []);

   

    
    angular.module("todoApp").service('storageService', storageService);
    angular.module("todoApp").service('taskManager', taskManager);
    angular.module("todoApp").controller('mainCtrl', mainCtrl);
    
   




});