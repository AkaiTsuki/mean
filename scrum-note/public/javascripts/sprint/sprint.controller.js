/**
 * Created by Jiachi on 11/29/2015.
 */
(function(){
    var sprintController =  ['$state', '$scope', 'sprints', 'SprintService', function ($state, $scope, sprints, SprintService) {
        $scope.sprints=  sprints;

        $scope.sprint = {};

        $scope.createSprint = function(){
            SprintService.createSprint($scope.sprint).then(function(savedSprint){
                $state.transitionTo('home', null, {reload: true});
            });
        }

    }];
    angular.module('scrumNote').controller('SprintController', sprintController);
})();