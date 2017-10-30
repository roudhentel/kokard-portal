/**
 * MainCtrl - controller
 * Contains several global data used in different view
 *
 */
function MainCtrl($scope, $mdDialog, $http, toastr, toastrConfig) {
    let s = $scope;

    s.closeDialog = function () {
        $mdDialog.hide();
    }

    s.gbl = {
        token: "",
        role: undefined
    }

    if (localStorage.getItem("x-access-token")) {
        s.gbl.token = localStorage.getItem("x-access-token");
    };

};

/**
 * translateCtrl - Controller for translate
 */
function translateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
    };
}

/**
 *
 * Pass all functions into module
 */
angular
    .module('koKard')
    .controller('MainCtrl', MainCtrl)
    .controller('translateCtrl', translateCtrl);