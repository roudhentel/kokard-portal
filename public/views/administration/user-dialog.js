angular.module("koKard").controller("userDialogCtrl", function ($scope, Dialog, $mdDialog) {
    let s = $scope;
    let dialogSvc = new Dialog();

    s.userDialog = {
        listRole: [
            {
                id: 1,
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
                id: 2,
                name: "Role 2",
                permission: {
                    CardAlertsAndNotification: 11001,
                    CardCardholderInformation: 11100,
                    CardCreditCardLimits: 11101,
                }
            },
            {
                id: 3,
                name: "Role 3",
                permission: {
                    CardSummary: 11000
                }
            }
        ]
    }

    s.dialogTitle = s.newDialogTitle;

    s.user = {
        username: "",
        password: "",
        retypepassword: "",
        roleId: 0,
        roleName: ""
    }

    s.isEdit = s.dialogTitle.toLowerCase().indexOf("edit") > -1;

    if (s.isEdit) {
        s.user = JSON.parse(JSON.stringify(s.selectedUser));
    }

    s.updateRole = function () {
        s.user.roleName = s.userDialog.listRole.find(obj => obj.id === s.user.roleId).name;
    }

    s.save = function (isFormValid, ev) {
        if (!isFormValid) return;

        console.log(s.user);
        if (!s.isEdit) {
            // add
            dialogSvc.showAlert("Information", "Successfully Added", "Ok", true, "parent", ev)
                .then(function (res) {
                    $mdDialog.hide(s.user);
                });
        } else {
            // edit
            dialogSvc.showAlert("Information", "Successfully Updated", "Ok", true, "parent", ev)
                .then(function (res) {
                    $mdDialog.hide(s.user);
                });
        }
    }
});