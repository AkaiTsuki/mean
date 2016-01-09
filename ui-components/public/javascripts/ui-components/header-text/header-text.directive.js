/**
 * Created by Jiachi on 1/9/2016.
 */
(function(){
    angular.module('ui-components').directive('headerText', function(){
        function fontSizeFromString(size, elem){
            if(isPtBasedFontSize(size)){
                elem.css("font-size", size);
            } else {
                return 'header-text-font-size-'+size;
            }
        }

        function isPtBasedFontSize(size){
            return /^(\d)+pt$/.test(size);
        }

        return {
            templateUrl: '/javascripts/ui-components/header-text/header-text.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
            },
            controller: function($scope, $timeout){

            },
            link: function(scope, elem, attrs, controller){
                scope.textContent = attrs.textContent;
                scope.headTextSize = fontSizeFromString(attrs.fontSize, elem);
                elem.css('text-align', attrs.textAlign);
            }
        };
    });
})();