/**
 * Created by Jiachi on 11/29/2015.
 */
(function(){
    var sprintController =  ['$state', '$scope', 'sprints', 'SprintService', function ($state, $scope, sprints, SprintService) {
        $scope.sprints=  sprints;

        $scope.sprint = {};

        $scope.createSprint = function(){
            SprintService.createSprint($scope.sprint).then(function(savedSprint){
                console.log(savedSprint);
                $state.go('home');
            });
        }

    }];
    angular.module('scrumNote').controller('SprintController', sprintController);
})();