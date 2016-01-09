/**
 * Created by Jiachi on 1/9/2016.
 */
(function(){
    angular.module('ui-components').directive('textCenter', function(){

        return {
            restrict: 'A',
            controller: function($scope, $timeout){
            },
            link: function(scope, elem, attrs, controller){
                elem.css('textAlign', 'center');
            }
        };
    });
})();