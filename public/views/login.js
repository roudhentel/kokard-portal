angular.module('koKard').controller('loginCtrl', function ($scope, $http, $state) {
    let s = $scope;

    s.loginPage = {
        username: "",
        password: "",
        isLoginFailed: false
    }

    s.login = function (isFormValid) {
        if (!isFormValid) return;

        $http({
            method: "POST",
            url: "http://localhost:3000/api/user/authenticate",
            data: s.loginPage
        }).then(function (res) {
            if (res.data.success) {
                s.gbl.token = res.data.token;
                localStorage.setItem("x-access-token", res.data.token);
                s.loginPage.isLoginFailed = false;
                s.gbl.role = parseRole(res.data.user);
                $state.go('main.card-search');
            }
        }, function (err) {
            console.log(err);
            s.loginPage.isLoginFailed = true;
        })
    }

    let parseRole = function (item) {
        var newObj = {};

        for (let prop in item) {
            if (prop.toLowerCase() !== "id"
                && prop.toLowerCase() !== "username"
                && prop.toLowerCase() !== "rolename") {
                newObj[prop] = item[prop];
            }
        }

        return newObj;
    }
});