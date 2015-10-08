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