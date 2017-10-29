angular.module("koKard").controller("userDialogCtrl", function ($scope, Dialog, $http, $mdDialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.userDialog = {
        listRole: []
    }

    s.dialogTitle = s.newDialogTitle;

    s.user = {
        Username: "",
        Password: "",
        RetypePassword: "",
        RoleId: 0,
        RoleName: ""
    }

    s.getAllRoles = function () {
        $http({
            method: "GET",
            url: "/api/role",
            headers: {
                'x-access-token': s.gbl.token
            }
        }).then(function (res) {
            if (res.data.success) {
                var newArr = [];
                res.data.rows.forEach(item => {
                    var newObj = {
                        id: item.Id,
                        name: item.RoleName,
                        permission: {}
                    }

                    for (let prop in item) {
                        if (prop.toLowerCase() !== "id" && prop.toLowerCase() !== "rolename") {
                            newObj.permission[prop] = item[prop];
                        }
                    }
                    newArr.push(newObj);
                });

                s.userDialog.listRole = newArr;
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
    }

    s.isEdit = s.dialogTitle.toLowerCase().indexOf("edit") > -1;

    if (s.isEdit) {
        s.user = JSON.parse(JSON.stringify(s.selectedUser));
        s.user["RetypePassword"] = s.selectedUser.Password;
    }

    s.updateRole = function () {
        s.user.roleName = s.userDialog.listRole.find(obj => obj.id === s.user.roleId).name;
    }

    s.save = function (isFormValid, ev) {
        if (!isFormValid) return;

        if (s.user.Password !== s.user.RetypePassword) {
            dialogSvc.showAlert("Error", "Password did not match!", "Ok", true, "parent", ev);
            return;
        }

        let newUser = {
            Username: s.user.Username,
            Password: s.user.Password,
            RoleId: s.user.RoleId,
            IsActive: 1
        }

        if (!s.isEdit) {
            // add - no token needed when adding user
            $http({
                method: "POST",
                url: "/api/user",
                data: newUser
            }).then(function (res) {
                if (res.data.success) {
                    s.user = res.data.rows[0];
                    dialogSvc.showAlert("Information", "Successfully Added", "Ok", true, "parent", ev)
                        .then(function (res) {
                            $mdDialog.hide(s.user);
                        });
                }
            }, function (err) {
                console.log(err);
            });

        } else {
            // edit
            newUser["Id"] = s.user.Id;
            $http({
                method: "PUT",
                url: "/api/user",
                data: newUser,
                headers: {
                    'x-access-token': s.gbl.token
                }
            }).then(function (res) {
                if (res.data.success) {
                    dialogSvc.showAlert("Information", "Successfully Updated", "Ok", true, "parent", ev)
                        .then(function (res) {
                            $mdDialog.hide(s.user);
                        });
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
        }
    }

    s.getAllRoles();
});