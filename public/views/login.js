angular.module('koKard').controller('loginCtrl', function ($scope, $http, $state) {
    let s = $scope;

    s.loginPage = {
        username: "",
        password: ""
    }

    s.login = function (isFormValid) {
        if (!isFormValid) return;

        $http({
            method: "POST",
            url: "http://localhost:3000/api/user/authenticate",
            data: s.loginPage
        }).then(function (res) {
            if (res.data.success) {
                $state.go('main.card-search');
            }
        }, function (err) {
            console.log(err);
        })
    }
});