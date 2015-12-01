/**
 * Created by Jiachi on 11/29/2015.
 */

(function () {
    angular.module('scrumNote', ['ui.router', 'ui.bootstrap'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");

            $stateProvider.state('home', {
                    url: '/home',
                    views: {
                        'main@': {
                            templateUrl: '/templates/sprint/sprint.list.html',
                            controller: 'SprintController'
                        }
                    },
                    resolve: {
                        sprints: function (SprintService) {
                            return SprintService.loadAllSprints();
                        }
                    }
                })
                .state('home.create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: '/templates/sprint/sprint.create.html',
                            controller: 'SprintController'
                        }
                    }
                });
        });
})();