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
                            templateUrl: '/templates/sprint.list.html',
                            controller: 'SprintHomeController'
                        }
                    },
                    resolve: {
                        sprints: function ($http, $q) {
                            var deferred = $q.defer();

                            $http.get('/sprint/list').success(function (data, status) {
                                deferred.resolve(data);
                            });

                            return deferred.promise;
                        }
                    }
                })
                .state('create', {
                    url: '/create',
                    views: {
                        'main@': {
                            templateUrl: '/templates/sprint.create.html',
                            controller: 'SprintController'
                        }
                    }
                }).state('create.submit', {});
        })
        .controller('SprintController', ['$state', '$http', '$scope', '$q', function ($state, $http, $scope, $q) {
            $scope.sprint = {};

            $scope.createSprint = function () {
                var sprint = $scope.sprint;

                var data = {
                    sprint: sprint
                };

                $http.post('/sprint/create', data).success(function (data, status) {
                    console.log(data);
                    $state.go('home');
                });
            };

        }])
        .controller('SprintHomeController', ['$scope', 'sprints', function ($scope, sprints) {
            console.log('SprintHomeController');
            $scope.sprints=  sprints;
        }]);
})();