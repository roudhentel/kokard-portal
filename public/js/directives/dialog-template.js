angular.module("koKard").directive("dialogTemplate", function ($mdDialog) {
    return {
        restrict: 'E',
        scope: {
            title: '@',
            addClass: '@'
        },
        transclude: true,
        templateUrl: 'js/directives/dialog-template.html',
        controller: function ($scope) {
            $scope.closeDialog = function () {
                $mdDialog.hide();
            }
        }
    }
});