angular.module('koKard').controller('usersCtrl', function ($scope, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.usersPage = {
        listUser: [
            {
                username: "user1",
                roleId: 1,
                roleName: "Role 1",
                isActive: 1
            },
            {
                username: "user2",
                roleId: 2,
                roleName: "Role 2",
                isActive: 1
            },
            {
                username: "user3",
                roleId: 3,
                roleName: "Role 3",
                isActive: 1
            }
        ]
    };

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
        dialogSvc.showConfirm("Confirmation", ("Are you sure you want to delete user: " + item.username), "Yes", "No", false, "parent", ev)
            .then(function (res) {
                if (res) {
                    s.usersPage.listUser.splice(s.usersPage.listUser.indexOf(item), 1);

                    dialogSvc.showAlert("Information", "Successfully Deleted", "Ok", true, "parent", ev);
                }
            });
    }
});