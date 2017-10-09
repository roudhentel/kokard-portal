angular.module('koKard').controller('roleDialogCtrl', function ($scope) {
    let s = $scope;

    // set dialog title
    s.dialogTitle = s.newDialogTitle;

    console.log($scope.dialogTitle);
});