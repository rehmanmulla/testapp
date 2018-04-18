angular.module('MyApp', ["ngRoute"]).
config(["$routeProvider" , "$locationProvider" ,function ($routeProvider, $locationProvider) {
    $routeProvider.
        when('/home', { 
            templateUrl: "views/home.html", 
            activetab: "home" }).
        when('/about', { 
            templateUrl: "views/about.html", 
            activetab: "about" }).
        when('/gallery', { 
            templateUrl: "views/gallery.html", 
        activetab: "gallery" }).
        when('/contact', { 
            templateUrl: "views/contact.html", 
        activetab: "contact" }).
        when('/services', { 
            templateUrl: "views/services.html", 
        activetab: "services" }).
        when('/client', { 
            templateUrl: "views/client.html", 
        activetab: "house" }).
        otherwise({ redirectTo: '/home', 
        activetab: "home"});
    $locationProvider.html5Mode(true);
}]).run(function ($rootScope, $route) {
    $rootScope.$route = $route;
});