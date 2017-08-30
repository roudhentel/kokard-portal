angular.module('inspinia').controller('fraudCtrl', function ($scope) {
    var s = $scope;

    s.units = [
        { value: 'B', text: 'Boundary' },
        { value: 'W', text: 'Calendar Week' },
        { value: 'C', text: 'Consecutive Accumulation' },
        { value: 'D', text: 'Day' },
        { value: 'H', text: 'Hour' },
        { value: 'L', text: 'Life Time' },
        { value: 'T', text: 'Minute' },
        { value: 'M', text: 'Month' },
        { value: 'S', text: 'Second' },
        { value: 'I', text: 'StandInAccumulation' },
        { value: 'E', text: 'Statement Cycle' },
        { value: 'Z', text: 'Time Restriction' },
        { value: 'Y', text: 'Year' }
    ];

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

    s.limitsForC2C = [
        {
            srno: 15,
            fraudParameter: 'CH Max Daily C2C Load Amount',
            checkTime: 'PRE',
            units: {
                value: 0,
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
    ];

    s.frauds = [
        {
            name: 'LIMITS',
            list: [
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
        },
        {
            name: 'Load Limits For C2C Share Fund',
            list: [
            {
                srno: 15,
                fraudParameter: 'CH Max Daily C2C Load Amount',
                checkTime: 'PRE',
                units: {
                    value: 0,
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
        },
        {
            name: 'Load Limits For Consumer Funds',
            list: [
            {
                srno: 16,
                fraudParameter: 'CH Max Daily Load Amount',
                checkTime: 'PRE',
                units: {
                    value: 0,
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
                srno: 17,
                fraudParameter: 'CH Max Daily Load Frequency',
                checkTime: 'PRE',
                units: {
                    value: 0,
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
        },
        {
            name: 'Load Limits For POS Money Load',
            list: [
            {
                srno: 18,
                fraudParameter: 'CH Max Daily POS Payment Amount',
                checkTime: 'PRE',
                units: {
                    value: 0,
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
        },
        {
            name: 'Transactions',
            list: [
                {
                    srno: 19,
                    fraudParameter: 'Min Time Threshold for Card Present Trans between Different Cities',
                    checkTime: 'PRE',
                    units: {
                        value: 0,
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
                    srno: 20,
                    fraudParameter: 'Min Time Threshold for Card Present Trans between Different Countries',
                    checkTime: 'PRE',
                    units: {
                        value: 0,
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
                    srno: 21,
                    fraudParameter: 'Min Time Threshold for Card Present Trans between Different Regions',
                    checkTime: 'PRE',
                    units: {
                        value: 0,
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
                    srno: 22,
                    fraudParameter: 'Min Time Threshold for Card Present Trans between Different States',
                    checkTime: 'PRE',
                    units: {
                        value: 0,
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
        }
    ];
});