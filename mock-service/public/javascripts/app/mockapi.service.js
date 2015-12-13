/**
 * Created by Jiachi on 12/13/2015.
 */

(function () {
    var service = ['$http', '$q', function ($http, $q) {
        var me = this;

        me.loadAllApi = function(){
            var deferred = $q.defer();

            $http.get('/mockApi/list').success(function (data, status) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        me.createMockApi = function(mockApi){
            var deferred = $q.defer();

            mockApi.mockData = JSON.parse(mockApi.mockData);

            var data = {
                mockApi: mockApi
            };

            $http.post('/mockApi/create', data).success(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };
    }];

    angular.module('MockServiceApp').service('MockApiService', service);
})();