var settingCtrl = timelyApp.controller("settingCtrl",function($scope,userSetting){

	console.log(userSetting.user);

	$scope.submit=function(){
		userSetting.save($scope.location);
		console.log($scope.location);
	};


	// body...
});