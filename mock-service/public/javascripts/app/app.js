/**
 * Created by Jiachi on 12/13/2015.
 */
(function () {
    angular.module('MockServiceApp', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");

            $stateProvider.state('home', {
                url: '/home',
                views: {
                    'main@': {
                        templateUrl: '/javascripts/app/mockapi.list.html',
                        controller: 'MockApiController'
                    }
                },
                resolve: {
                    mockedApis: function (MockApiService) {
                        return MockApiService.loadAllApi();
                    }
                }
            }).state('home.create', {
                url: '/create',
                views: {
                    'main@': {
                        templateUrl: '/javascripts/app/mockapi.create.html',
                        controller: 'MockApiController'
                    }
                }
            });

        });
})();