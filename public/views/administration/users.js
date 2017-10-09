angular.module('koKard').controller('usersCtrl', function ($scope, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

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

        dialogSvc.showDialog("roleDialogCtrl", s, "views/administration/user-dialog.html", false, "parent", ev)
            .then(function (res) {
                console.log(res);
            })
    }
});