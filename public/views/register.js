angular.module('koKard').controller('registerCtrl', function ($scope, $http, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.registerPage = {
        email: "",
        password: "",
        repassword: "",
        agreeTerms: false
    }

    s.register = function (isFormValid, ev) {
        if (!isFormValid || !s.registerPage.agreeTerms) return;

        if (s.registerPage.password !== s.registerPage.repassword) {
            dialogSvc.showAlert("Warning", "Password did not match", "Ok", true, "parent", undefined);
            return;
        } else {
            // add - no token needed when adding user
            $http({
                method: "POST",
                url: "/api/user",
                data: {
                    Username: s.registerPage.email,
                    Password: s.registerPage.password,
                    RoleId: null,
                    IsActive: 0
                }
            }).then(function (res) {
                if (res.data.success) {
                    s.user = res.data.rows[0];
                    dialogSvc.showAlert("Information", "Successfully Registered", "Ok", true, "parent", ev)
                        .then(function (res) {
                            $mdDialog.hide(s.user);
                        });
                }
            }, function (err) {
                console.log(err);
            });
        }
    }
});