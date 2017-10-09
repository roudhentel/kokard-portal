angular.module('koKard').controller('roleDialogCtrl', function ($scope) {
    let s = $scope;
    s.roleDialog = {
        pageList: {
            "Search": [],
            "Card": [
                "Summary",
                "Cardholder Information",
                "Alerts & Notification",
                "Credit Card Limits",
                "Credit Card Statement Cycle",
                "Supplementary Card",
                "History"
            ],
            "Cardholder": [
                "Profile",
                "Cards by Member Id"
            ],
            "Card Program": [
                "Details",
                "Credit Card Rules",
                "Fraud",
                "MCC Privileges",
                "Parameters",
                "Restrictions",
                "Rewards",
                "Services"
            ],
            "Transactions": [
                "Details",
                "Direct Deposits",
                "Declined Transactions",
                "Account Statements"
            ],
            "Others": [
                "Calls History",
                "Change/Reset PIN",
                "Block/Close Card",
                "Add Comments",
                "Apply Fee",
                "Close a Call",
                "Link External Card",
                "Reissue Card",
                "Online Payment Activity",
                "Upgrade Card",
                "Administrative Services"
            ],
            "Administration": [
                "Roles",
                "Users"
            ]
        }
    }

    s.role = {
        name: "",
        permission: {

        }
    }

    s.updatePermission = function (pageMain, pageSub, permission) {
        if (!pageSub) {
            if (!s.role.permission[pageMain]) s.role.permission[pageMain] = 10000;

            s.role.permission[pageMain] = permission;
        } else {
            if (!s.role.permission[pageMain]) s.role.permission[pageMain] = {};

            if (!s.role.permission[pageMain][pageSub]) s.role.permission[pageMain][pageSub] = 10000;

            s.role.permission[pageMain][pageSub] = permission;
        }
    }

    s.changePermission = function (pageMain, pageSub, idx) {
        var isView = $("#chkView" + pageMain + idx).is(":checked");
        var isAdd = $("#chkAdd" + pageMain + idx).is(":checked");
        var isEdit = $("#chkEdit" + pageMain + idx).is(":checked");
        var isDelete = $("#chkDelete" + pageMain + idx).is(":checked");
        var permission = 10000;
        permission = isView ? permission += 1000 : permission;
        permission = isAdd ? permission += 100 : permission;
        permission = isEdit ? permission += 10 : permission;
        permission = isDelete ? permission += 1 : permission;

        s.updatePermission(pageMain, pageSub, permission);
    }

    s.save = function () {
        console.log(s.role);
    }

    // set dialog title
    s.dialogTitle = s.newDialogTitle;

    console.log($scope.dialogTitle);
});