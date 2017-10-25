angular.module('koKard').controller('roleDialogCtrl', function ($scope, $mdDialog, $http, Dialog) {
    let s = $scope;
    var dialogSvc = new Dialog();

    // set dialog title
    s.dialogTitle = s.newDialogTitle;

    s.roleDialog = {
        listPage: [
            { value: "Card_Summary", description: "Card -> Summary" },
            { value: "Card_CardholderInformation", description: "Card -> Cardholder Information" },
            { value: "Card_AlertsAndNotification", description: "Card -> Alerts & Notification" },
            { value: "Card_CreditCardLimits", description: "Card -> Credit Card Limits" },
            { value: "Card_CreditCardStatementCycle", description: "Card -> Credit Card Statement Cycle" },
            { value: "Card_SupplementaryCard", description: "Card -> Supplementary Card" },
            { value: "Card_History", description: "Card -> History" },
            { value: "Cardholder_Profile", description: "Cardholder -> Profile" },
            { value: "Cardholder_CardsByMemberId", description: "Cardholder -> Cards by Member ID" },
            { value: "CardProgram_Details", description: "Card Program -> Details" },
            { value: "CardProgram_CreditCardRules", description: "Card Program -> Credit Card Rules" },
            { value: "CardProgram_Fraud", description: "Card Program -> Fraud" },
            { value: "CardProgram_MCCPrivileges", description: "Card Program -> MCC Privileges" },
            { value: "CardProgram_Parameters", description: "Card Program -> Parameters" },
            { value: "CardProgram_Restrictions", description: "Card Program -> Restrictions" },
            { value: "CardProgram_Rewards", description: "Card Program -> Rewards" },
            { value: "CardProgram_Services", description: "Card Program -> Services" },
            { value: "Transactions_Details", description: "Transactions -> Details" },
            { value: "Transactions_DirectDeposits", description: "Transactions -> Direct Deposits" },
            { value: "Transactions_DeclinedTransactions", description: "Transactions -> Declined Transactions" },
            { value: "Transactions_AccountStatements", description: "Transactions -> Account Statements" },
            { value: "Others_CallsHistory", description: "Others -> Calls History" },
            { value: "Others_ChangeResetPIN", description: "Others -> Change/Reset PIN" },
            { value: "Others_BlockCloseCard", description: "Others -> Block/Close Card" },
            { value: "Others_AddComments", description: "Others -> AddComments" },
            { value: "Others_ApplyFee", description: "Others -> ApplyFee" },
            { value: "Others_CloseACall", description: "Others -> Close a Call" },
            { value: "Others_LinkExternalCard", description: "Others -> Link External Card" },
            { value: "Others_ReissueCard", description: "Others -> Reissue Card" },
            { value: "Others_OnlinePaymentActivity", description: "Others -> Online Payment Activity" },
            { value: "Others_UpgradeCard", description: "Others -> Upgrade Card" },
            { value: "Others_AdministrativeServices", description: "Others -> Administrative Services" },
            { value: "Administration_Roles", description: "Administration -> Roles" },
            { value: "Administration_Users", description: "Administration -> Users" },
            { value: "Search", description: "Home -> Search" }
        ]
    }

    s.role = {
        name: "",
        permission: {}
    }

    s.isEdit = false;
    if (s.dialogTitle.toLowerCase().indexOf("edit") > -1) {
        s.role = JSON.parse(JSON.stringify(s.selectedRole));
        s.isEdit = true;
        setTimeout(function () {
            s.loadRolePermission();
        }, 100);
    }

    s.isView = false;
    if (s.dialogTitle.toLowerCase().indexOf("view") > -1) {
        s.role = JSON.parse(JSON.stringify(s.selectedRole));
        s.isView = true;
        setTimeout(function () {
            s.loadRolePermission();
        }, 100);
    }

    s.changePermission = function (page, idx) {
        var isView = $("#chkView" + idx).is(":checked");
        var isAdd = $("#chkAdd" + idx).is(":checked");
        var isEdit = $("#chkEdit" + idx).is(":checked");
        var isDelete = $("#chkDelete" + idx).is(":checked");

        if (isAdd || isEdit || isDelete) {
            $("#chkView" + idx).prop("checked", true);
            isView = true;
        }
        var permission = 10000;
        permission = isView ? permission += 1000 : permission;
        permission = isAdd ? permission += 100 : permission;
        permission = isEdit ? permission += 10 : permission;
        permission = isDelete ? permission += 1 : permission;

        s.role.permission[page.value] = permission;
    }

    s.loadRolePermission = function () {
        var page = {}, idx = -1;
        for (var prop in s.role.permission) {
            page = s.roleDialog.listPage.find(obj => obj.value === prop);
            if (page) {
                idx = s.roleDialog.listPage.indexOf(page);
                if (idx > -1) {
                    var permission = s.role.permission[prop].toString();
                    $("#chkView" + idx).prop("checked", permission.charAt(1) === '1');
                    $("#chkAdd" + idx).prop("checked", permission.charAt(2) === '1');
                    $("#chkEdit" + idx).prop("checked", permission.charAt(3) === '1');
                    $("#chkDelete" + idx).prop("checked", permission.charAt(4) === '1');
                }
            }
        }
        s.roleDialog.listPage
    }

    s.save = function (isFormValid, ev) {
        if (!isFormValid) return;

        if (!s.isEdit) {
            // add
            let newRole = { RoleName: s.role.name };
            for (let prop in s.role.permission) {
                newRole[prop] = s.role.permission[prop];
            }

            console.log(newRole);

            $http({
                method: "POST",
                url: "/api/role",
                data: newRole
            }).then(function (res) {
                if (res.data.success) {
                    s.role = res.data.rows[0];
                    dialogSvc.showAlert("Information", "Successfully Added", "Ok", true, "parent", ev)
                        .then(function (res) {
                            $mdDialog.hide(s.role);
                        });
                }
            }, function (err) {
                console.log(err);
                dialogSvc.showAlert("Error", "Transaction went something wrong. Contact IT for assistance", "Ok", true, "parent", ev);
            });

        } else {
            // edit
            let newRole = { RoleName: s.role.name, Id: s.role.id };
            for (let prop in s.role.permission) {
                newRole[prop] = s.role.permission[prop];
            }

            $http({
                method: "PUT",
                url: "/api/role",
                data: newRole
            }).then(function (res) {
                if (res.data.success) {
                    dialogSvc.showAlert("Information", "Successfully Updated", "Ok", true, "parent", ev)
                        .then(function (res) {
                            $mdDialog.hide(s.role);
                        });
                }
            }, function (err) {
                console.log(err);
                dialogSvc.showAlert("Error", "Transaction went something wrong. Contact IT for assistance", "Ok", true, "parent", ev);
            });
        }
    }
});