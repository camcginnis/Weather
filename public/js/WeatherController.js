app.controller("WeatherController", function($scope, $http){
    $scope.name = "Weather";
    $scope.weatherData = {};
    var baseUrl = "https://api.forecast.io/forecast/";
    var baseUrlApi = baseUrl + apiKey + "/";
    
    $scope.getWeather = function(){
        $http.jsonp(baseUrlApi+$scope.latitude+","+$scope.longitude+"?callback=JSON_CALLBACK")
        .success(function(response){
            $scope.weatherData = response;
                console.log($scope.weatherData);
            })
        .error(function(err){
            console.log(err);
        });
       
    };
    
    
});