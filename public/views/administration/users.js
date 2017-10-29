angular.module('koKard').controller('usersCtrl', function ($scope, $http, $state, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.usersPage = {
        listUser: []
    };

    s.getAllUsers = function () {
        $http({
            method: "GET",
            url: "/api/user",
            headers: {
                'x-access-token': s.gbl.token
            }
        }).then(function (res) {
            if (res.data.success) {
                s.usersPage.listUser = res.data.rows;
            }
        }, function (err) {
            if (err.data.tokenError) {
                dialogSvc.showAlert("Information", "Token expired", "Ok", true, "parent", undefined)
                    .then(function (res) {
                        $state.go('logins');
                    });
            }
            console.log(err);
        });
    }();

    s.showDialog = function (action, ev) {
        switch (action) {
            case 0: { // add event
                s.newDialogTitle = "Add a User";
                break;
            }
            case 1: { // edit event
                s.newDialogTitle = "Edit a User";
                break;
            }
        }

        dialogSvc.showDialog("userDialogCtrl", s, "views/administration/user-dialog.html", false, "parent", ev)
            .then(function (res) {
                if (res) {
                    switch (action) {
                        case 0: { // add event
                            console.log(res);
                            s.usersPage.listUser.push(res);
                            break;
                        }
                        case 1: { // edit event
                            s.usersPage.listUser[s.usersPage.listUser.indexOf(s.selectedUser)] = res;
                            break;
                        }
                    }
                }
            });
    }

    s.edit = function (item, ev) {
        s.selectedUser = item;
        s.showDialog(1, ev);
    }

    s.delete = function (item, ev) {
        dialogSvc.showConfirm("Confirmation", ("Are you sure you want to delete user: " + item.Username), "Yes", "No", false, "parent", ev)
            .then(function (res) {
                if (res) {
                    $http({
                        method: "DELETE",
                        url: "/api/user",
                        params: {
                            Id: item.Id
                        },
                        headers: {
                            'x-access-token': s.gbl.token
                        }
                    }).then(function (res) {
                        if (res.data.success) {
                            s.usersPage.listUser.splice(s.usersPage.listUser.indexOf(item), 1);
                            dialogSvc.showAlert("Information", "Successfully Deleted", "Ok", true, "parent", ev);
                        }
                    }, function (err) {
                        if (err.data.tokenError) {
                            dialogSvc.showAlert("Information", "Token expired", "Ok", true, "parent", undefined)
                                .then(function (res) {
                                    $state.go('logins');
                                });
                        }
                    });

                }
            });
    }
});