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

