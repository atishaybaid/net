employeeApp.factory('EmployeeAppFactory', function(){

	console.log("inside factory");

	EmployeeAppFactory = function(id,fName,mName,lName,email,location,title,department,userType){
		this.id = id;
		this.fName = fName;
		this.mName = mName;
		this.lName = lName;
		this.email = email;
		this.location = location;
		this.title = title;
		this.department = department;
		this.userType =userType;

	};

	return EmployeeAppFactory;

});
