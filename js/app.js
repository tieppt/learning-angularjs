var app = angular.module('anapp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/albums', {
            controller: 'MainController',
            templateUrl: 'partials/album_list_partial.html',
        })
        .when('/album/:album_name', {
            controller: 'AlbumViewController',
            templateUrl: 'partials/album_view_partial.html',
        })
        .when('/', {
            redirectTo: '/albums',
        })
        .when('/404_page', {
            controller: 'Controller404',
            templateUrl: 'partials/404_page_partial.html',
        })
        .otherwise({
            redirectTo: '/404_page',
        });
});