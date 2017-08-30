angular.module('inspinia').controller('fraudCtrl', function ($scope) {
    var s = $scope;

    s.limits = [
        {
            srno: 1,
            fraudParameter: 'Maximum Cash Back Amount',
            checkTime: 'PRE',
            units: {
                value: 0,
                unit: 'B'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 2,
            fraudParameter: 'Maximum Cash Withdrawal Amount in Given Interval',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 3,
            fraudParameter: 'Maximum Cash Withdrawal Transaction Amount',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 4,
            fraudParameter: 'Maximum Cash Withdrawal Transactions in Given Interval',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 5,
            fraudParameter: 'Maximum Domestic Cash Withdrawal Amount in Given Interval',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 6,
            fraudParameter: 'Maximum International Transactions in Given Interval',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 7,
            fraudParameter: 'Maximum Load Amount',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 8,
            fraudParameter: 'Maximum Purchase Amount',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 9,
            fraudParameter: 'Maximum Purchase Amount in Given Interval',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 10,
            fraudParameter: 'Maximum Purchase Transactions in Given Interval',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 11,
            fraudParameter: 'Maximum Transaction Amount for International Transactions',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 12,
            fraudParameter: 'Maximum Transaction Amount in Given Interval for International Transactions',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 13,
            fraudParameter: 'Minimum Load Amount',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        },
        {
            srno: 14,
            fraudParameter: 'Minimum Purchase Amount',
            checkTime: 'PRE',
            units: {
                value: 1,
                unit: 'D'
            },
            values: {
                value: 0,
                minimum: 0,
                maximum: 0,
                percentage: 0
            },
            alerts: {
                cardholder: false,
                fraudcenter: false
            },
            actions: {
                blocktrans: true,
                blockcard: false,
                active: true
            }
        }

    ]
});