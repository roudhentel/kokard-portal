angular.module('koKard').controller('rolesCtrl', function ($scope, Dialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.rolePage = {
        listRoles: [
            {
                name: "Role 1",
                permission: {
                    CardAlertsAndNotification: 11100,
                    CardCardholderInformation: 11010,
                    CardCreditCardLimits: 11100,
                    CardCreditCardStatementCycle: 11110,
                    CardSummary: 11001,
                    CardSupplementaryCard: 11011
                }
            },
            {
                name: "Role 2",
                permission: {
                    CardAlertsAndNotification: 11001,
                    CardCardholderInformation: 11100,
                    CardCreditCardLimits: 11101,
                }
            },
            {
                name: "Role 3",
                permission: {
                    CardSummary: 11000
                }
            }
        ]
    }

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
                if (res) {
                    switch (action) {
                        case 0: { // add event
                            s.rolePage.listRoles.push(res);
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

    s.edit = function (item, ev) {
        s.selectedRole = item;
        s.showDialog(1, ev);
    }

    s.delete = function (item, ev) {
        dialogSvc.showConfirm("Confirmation", ("Are you sure you want to delete role: " + item.name), "Yes", "No", false, "parent", ev)
            .then(function (res) {
                if (res) {
                    s.rolePage.listRoles.splice(s.rolePage.listRoles.indexOf(item), 1);
                }
            });
    }
});