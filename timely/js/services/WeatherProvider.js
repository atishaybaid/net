timelyApp.provider("Weather",function () {
	var apiKey = "";

	this.setApiKey = function(key){
		if(key){
			this.apiKey = key;
			console.log(this.apiKey);
		};
	};

	this.getUrl = function(type,city){

		return 'http://api.wunderground.com/api/' + this.apiKey +'/'
				+type+'/q/' +city +'.json';

	};

	this.$get = function($q,$http){

		var self =  this;

		return{
			getWeatherForecast:function(city){	

				
				console.log(self.getUrl("forecast",city));
                var defered = $q.defer();
				$http({
					method: 'GET',
					url: self.getUrl("forecast",city),
					cache:true		 
				}).success(function(data){
					defered.resolve(data.forecast.simpleforecast);
				}).error(function(err){
					defered.reject(err);
				});

				return defered.promise;
			}
		};	
	};

	


});

timelyApp.config(["WeatherProvider",function(WeatherProvider){

	WeatherProvider.setApiKey('9b702ccc56f4da90');

}]);