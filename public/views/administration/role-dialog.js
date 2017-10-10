angular.module('koKard').controller('roleDialogCtrl', function ($scope, $mdDialog, Dialog) {
    let s = $scope;
    var dialogSvc = new Dialog();

    // set dialog title
    s.dialogTitle = s.newDialogTitle;

    s.roleDialog = {
        listPage: [
            { value: "CardSummary", description: "Card -> Summary" },
            { value: "CardCardholderInformation", description: "Card -> Cardholder Information" },
            { value: "CardAlertsAndNotification", description: "Card -> Alerts & Notification" },
            { value: "CardCreditCardLimits", description: "Card -> Credit Card Limits" },
            { value: "CardCreditCardStatementCycle", description: "Card -> Credit Card Statement Cycle" },
            { value: "CardSupplementaryCard", description: "Card -> Supplementary Card" },
            { value: "CardHistory", description: "Card -> History" },
            { value: "CardholderProfile", description: "Cardholder -> Profile" },
            { value: "CardholderCardsByMemberId", description: "Cardholder -> Cards by Member ID" },
            { value: "CardProgramDetails", description: "Card Program -> Details" },
            { value: "CardProgramCreditCardRules", description: "Card Program -> Credit Card Rules" },
            { value: "CardProgramFraud", description: "Card Program -> Fraud" },
            { value: "CardProgramMCCPrivileges", description: "Card Program -> MCC Privileges" },
            { value: "CardProgramParameters", description: "Card Program -> Parameters" },
            { value: "CardProgramRestrictions", description: "Card Program -> Restrictions" },
            { value: "CardProgramRewards", description: "Card Program -> Rewards" },
            { value: "CardProgramServices", description: "Card Program -> Services" },
            { value: "TransactionsDetails", description: "Transactions -> Details" },
            { value: "TransactionsDirectDeposits", description: "Transactions -> Direct Deposits" },
            { value: "TransactionsDeclinedTransactions", description: "Transactions -> Declined Transactions" },
            { value: "TransactionsAccountStatements", description: "Transactions -> Account Statements" },
            { value: "OthersCallsHistory", description: "Others -> Calls History" },
            { value: "OthersChangeResetPin", description: "Others -> Change/Reset PIN" },
            { value: "OthersBlockCloseCard", description: "Others -> Block/Close Card" },
            { value: "OthersAddComments", description: "Others -> AddComments" },
            { value: "OthersApplyFee", description: "Others -> ApplyFee" },
            { value: "OthersCloseACall", description: "Others -> Close a Call" },
            { value: "OthersLinkExternalCard", description: "Others -> Link External Card" },
            { value: "OthersReissueCard", description: "Others -> Reissue Card" },
            { value: "OthersOnlinePaymentActivity", description: "Others -> Online Payment Activity" },
            { value: "OthersUpgradeCard", description: "Others -> Upgrade Card" },
            { value: "OthersAdministrativeServices", description: "Others -> Administrative Services" },
            { value: "AdministrationRoles", description: "Administration -> Roles" },
            { value: "AdministrationUsers", description: "Administration -> Users" },
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
            dialogSvc.showAlert("Information", "Successfully Added", "Ok", true, "parent", ev)
                .then(function (res) {
                    $mdDialog.hide(s.role);
                });
        } else {
            // edit
            dialogSvc.showAlert("Information", "Successfully Updated", "Ok", true, "parent", ev)
                .then(function (res) {
                    $mdDialog.hide(s.role);
                });
        }
    }
});