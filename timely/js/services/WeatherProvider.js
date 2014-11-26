timelyApp.provider("Weather",function () {
	var apiKey = "";

	this.setApiKey = function(key){
		if(key){
			this.apiKey = key;
			console.log(this.apiKey);
		};
	};

	this.$get = function($http){

		$http({
			method:'GET',
			url:this.getUrl("forecast",city),
			cache:true
		}).success(function(data){
			

		}).error(function(data){

		});
			
	};

	this.getUrl = function(type,city){

		return 'http://api.wunderground.com/api/' + this.apiKey +'/'
				+type+'/q/' +city +'.json';

	};


});

timelyApp.config(["WeatherProvider",function(WeatherProvider){

	WeatherProvider.setApiKey('9b702ccc56f4da90');

}]);