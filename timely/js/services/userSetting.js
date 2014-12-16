timelyApp.factory('userSetting',function() {
	
	var defaultSetting = {
		location:"bikaner"
	};
	
	var setting={
		user:defaultSetting,
		save:function(location){
			console.log("inside save");

			window.sessionStorage.setItem("location",location);

		}
	};

	


	return setting;

});