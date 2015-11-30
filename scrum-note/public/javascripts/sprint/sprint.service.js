/**
 * Created by Jiachi on 11/29/2015.
 */
/**
 * Created by Jiachi on 11/29/2015.
 */
(function () {
    var sprintService = ['$http', '$q', function ($http, $q) {
        var me = this;

        me.createSprint = function (sprint) {
            var deferred = $q.defer();

            var data = {
                sprint: sprint
            };

            $http.post('/sprint/create', data).success(function (data) {
                deferred.resolve(data);
            });

            return deferred.promise;
        };

        me.loadAllSprints = function(){
            var deferred = $q.defer();

            $http.get('/sprint/list').success(function (data, status) {
                deferred.resolve(data);
            });

            return deferred.promise;
        }
    }];

    angular.module('scrumNote').service('SprintService', sprintService);
})();