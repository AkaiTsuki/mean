/**
 * Created by Jiachi on 1/9/2016.
 */
/**
 * Created by Jiachi on 1/9/2016.
 */
(function(){
    angular.module('ui-components').directive('page', function(){
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: '/javascripts/ui-components/page/page.directive.html',
            scope: {
            },
            controller: function($scope, $timeout){
                $scope.displayFooter = false;
            },
            link: function(scope, elem, attrs, controller){
                scope.pageTitle = attrs.title;
                scope.currentPage = attrs.current;
                scope.totalPage = attrs.total;
                scope.displayFooter = attrs.displayFooter;
            }
        };
    });
})();