angular.module('koKard').controller('servicesCtrl', function ($scope) {
    var s = $scope;

    s.services = [
        {
            name: "ALERT",
            list: [
                {
                    srno: 1,
                    services: "Alert List",
                    retailPrice: 0,
                    rate: 0,
                    percentage: 0,
                    percentageOfNetGross: 0,
                    basis: "B",
                    appyOnBalance: false,
                    active: true
                },
                {
                    srno: 2,
                    services: "Create List",
                    retailPrice: 0,
                    rate: 0,
                    percentage: 0,
                    percentageOfNetGross: 0,
                    basis: "B",
                    appyOnBalance: false,
                    active: true
                }
            ]
        },
        {
            name: "LOAD FUNDS",
            list: [
                {
                    srno: 5,
                    services: "Cash Load on Load Funds",
                    retailPrice: 0,
                    rate: 0,
                    percentage: 0,
                    percentageOfNetGross: 0,
                    basis: "B",
                    appyOnBalance: false,
                    active: true
                }
            ]
        }
    ];
});