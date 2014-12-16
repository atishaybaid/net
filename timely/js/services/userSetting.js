timelyApp.factory('userSetting',function() {
	
	var defaultSetting = {
		location:"bikaner"
	};
	
	var setting={
		//user:defaultSetting,
		save:function(location){
			console.log("inside save");
			userLocation={
				location:location
			};


			window.sessionStorage.clear();
			window.sessionStorage.setItem("location",angular.toJson(userLocation));

		},
		retrive:function(){
			window.sessionStorage.getItem("location");
		}
	};

	


	return setting;

});