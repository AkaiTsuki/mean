/**
 * Created by Jiachi on 1/4/2016.
 */
(function(){
    angular.module('ui-components').directive('smartButton', function(){
        return {
            templateUrl: '/javascripts/ui-components/smart-button/smart-button.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
            },
            controller: function($scope, $timeout){
                $scope.buttonClass = 'btn btn-default';
                $scope.defaultText = 'Click';
                $scope.activeText = 'Processing...';
                $scope.onClick = function(){
                    $scope.btnText = $scope.activeText;
                    $timeout(function(){
                        $scope.btnText = 'Done';
                    }, 3000);
                }
            },
            link: function(scope, iElement, iAttrs, controller){
                if(iAttrs.btnText){
                    scope.btnText = iAttrs.btnText;
                }else {
                    scope.btnText = scope.defaultText;
                }

                if(iAttrs.activeText){
                    scope.activeText = iAttrs.activeText;
                }
            }
        };
    });
})();