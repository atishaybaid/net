employeeApp.service('employeeStorage',function(){
	console.log("inside service");
	
	this.addDataStorage = function(employee){
		console.log("inside addDataStorage");
		window.localStorage.setItem(employee.id,window.JSON.stringify(employee));
	};

	this.getData = function(){
		var result = [];

		for(var i = 0; i<window.localStorage.length;i++){
			 var key = window.localStorage.key(i);
             var dataAsString = window.localStorage.getItem(key);
             var employee = window.JSON.parse(dataAsString);
             //var employee = new Task(data);
             result.push(employee);
		};

		return result;
	};



});