define(['services/storageService'],function(){
    


function taskManager(storageService){
    var taskList = [];
    this.saveTask = function (task) {
        taskList = storageService.saveToStorage(task);
        return taskList;
    };

    this.retriveTask = function () {
        return storageService.retriveFromStorage();
    };

};

   taskManager.$inject = ['storageService'];
    
    return taskManager;
    
    
    
});
