angular.module('koKard').controller('rolesCtrl', function ($scope, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

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
        }

        dialogSvc.showDialog("roleDialogCtrl", s, "views/administration/role-dialog.html", false, "parent", ev)
            .then(function (res) {
                console.log(res);
            })
    }
});