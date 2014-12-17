var settingCtrl = timelyApp.controller("settingCtrl",function($scope,userSetting){

	console.log(userSetting.userSetting);

	$scope.submit=function(){
		userSetting.save($scope.location);
		console.log($scope.location);
		userSetting.retrieve();

	};

	

	// body...
});