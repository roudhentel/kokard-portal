angular.module('koKard').controller('rolesCtrl', function ($scope, $http, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.rolePage = {
        listRoles: [],
        searchText: ""
    }

    s.getAllRoles = function () {
        $http({
            method: "GET",
            url: "/api/role"
        }).then(function (res) {
            if (res.data.success) {
                var newArr = [];
                res.data.rows.forEach(item => {
                    // var newObj = {
                    //     id: item.Id,
                    //     name: item.RoleName,
                    //     permission: {}
                    // }

                    // for (let prop in item) {
                    //     if (prop.toLowerCase() !== "id" && prop.toLowerCase() !== "rolename") {
                    //         newObj.permission[prop] = item[prop];
                    //     }
                    // }
                    newArr.push(parseRole(item));
                });

                s.rolePage.listRoles = newArr;
            }
        }, function (err) {
            console.log(err);
        });
    }

    let parseRole = function(item) {
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

        return newObj;
    }

    s.getAllRoles();

    s.showDialog = function (action, ev) {
        switch (action) {
            case 0: { // add event
                s.newDialogTitle = "Add a Role";
                break;
            }
            case 1: { // edit event
                s.newDialogTitle = "Edit a Role";
                break;
            }
            case 2: { // view event
                s.newDialogTitle = "View Role"
                break;
            }
        }

        dialogSvc.showDialog("roleDialogCtrl", s, "views/administration/role-dialog.html", false, "parent", ev)
            .then(function (res) {
                if (res) {
                    switch (action) {
                        case 0: { // add event
                            s.rolePage.listRoles.push(parseRole(res));
                            break;
                        }
                        case 1: { // edit event
                            s.rolePage.listRoles[s.rolePage.listRoles.indexOf(s.selectedRole)] = res;
                            break;
                        }
                    }
                }
            });
    }

    s.view = function (item, ev) {
        s.selectedRole = item;
        s.showDialog(2, ev);
    }

    s.edit = function (item, ev) {
        s.selectedRole = item;
        s.showDialog(1, ev);
    }

    s.delete = function (item, ev) {
        dialogSvc.showConfirm("Confirmation", ("Are you sure you want to delete role: " + item.name), "Yes", "No", false, "parent", ev)
            .then(function (res) {
                if (res) {
                    $http({
                        method: "DELETE",
                        url: "/api/role",
                        params: {
                            Id: item.id
                        }
                    }).then(function (res) {
                        if (res.data.success) {
                            dialogSvc.showAlert("Information", "Successfully Deleted", "Ok", true, "parent", ev).then(function (res) {
                                s.rolePage.listRoles.splice(s.rolePage.listRoles.indexOf(item), 1);
                            });
                        }
                    }, function (err) {
                        console.log(err);
                        dialogSvc.showAlert("Error", "Transaction went something wrong. Contact IT for assistance", "Ok", true, "parent", ev);
                    });

                }
            });
    }
});