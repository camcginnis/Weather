var app = angular.module("WeatherAngTake2",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/home", {
        templateUrl: "html/home.html",
        controller: "HomeController"
    })
    
    $routeProvider.when("/weather",{
        templateUrl: "html/weather.html",
        controller: "WeatherController"
    })
    .otherwise({
        redirectTo: "/home"
    })

});

app.factory("weatherService", function($http){
    var service ={};
    var baseUrl = "https://api.forecast.io/forecast/";
    var baseUrlApi = baseUrl + apiKey + "/";
    
    //http GET
    service.get = function(latitude, longitude){
        
    return  $http.jsonp(baseUrlApi+latitude+","+longitude+"?callback=JSON_CALLBACK")
        .success(function(response){
            console.log(response);
            return response;
            })
        .error(function(err){
            console.log(err);
            
        });
    };
    
    
    return service;
    
});
