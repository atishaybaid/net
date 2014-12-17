timelyApp.factory('userSetting',function() {
	
	var defaultSetting = {
		location:"autoip"
	};
	
	var setting={
		userSetting:{},
		save:function(location){
			console.log("inside save");
			userLocation={
				location:location
			};


			window.sessionStorage.clear();
			window.sessionStorage.setItem("location",angular.toJson(userLocation));

		},
		retrieve:function(){
			console.log("inside retrieve")
			var storageLocationObj=angular.fromJson(window.sessionStorage.getItem("location"));
			console.log(storageLocationObj);
			userSetting = storageLocationObj || defaultSetting;
			console.log(userSetting);
			return userSetting;

		}
	};

	


	return setting;

});