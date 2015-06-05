todoApp.service("taskManager", function (storageService) {
var taskList = [];
    this.saveTask = function (task) {
        taskList = storageService.saveToStorage(task);
        return taskList;
    };

    this.retriveTask = function () {
        return storageService.retriveFromStorage();
    };

});