/**
 * Created by Jiachi on 12/13/2015.
 */
/**
 * Created by Jiachi on 11/29/2015.
 */
(function(){
    var controller =  ['$state', '$scope', 'mockedApis', 'MockApiService', function ($state, $scope, mockedApis, MockApiService) {
        $scope.mockedApiList=  mockedApis;

        $scope.mockApi = {};

        $scope.createMockApi = function(){
            MockApiService.createMockApi($scope.mockApi).then(function(savedApi){
                $state.transitionTo('home', null, {reload: true});
            });
        }

    }];
    angular.module('MockServiceApp').controller('MockApiController', controller);
})();