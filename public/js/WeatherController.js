app.controller("WeatherController", function($scope, weatherService){
    $scope.latitude = 0;
    $scope.longitude = 0;
    $scope.name = "Weather";
    $scope.weatherData = {};
    
    
    $scope.getWeather = function(){
       weatherService.get($scope.latitude, $scope.longitude)
                .success(function(response){
                    $scope.weatherData = response;
                    $scope.showWeather = true;
           
                    })
       
                .error(function(err){
                    $scope.showWeather = false;
                });

    };
});