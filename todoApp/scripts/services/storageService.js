
define([],function(){ 


function storageService(){
    var taskList = []; 
    
    this.saveToStorage = function (task) {
        taskList = this.retriveFromStorage();
        if(taskList === null){
            taskList = [];
        };
        
        taskList.push(task);
        window.localStorage.setItem("taskList",angular.toJson(taskList));
            return taskList;
        };

    this.retriveFromStorage = function () {
            taskList = angular.fromJson(window.localStorage.getItem("taskList"));
            return taskList;
        };
    

};
    return storageService;
    
    
    });