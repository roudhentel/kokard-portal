/**
 * INSPINIA - Responsive Admin Theme
 *
 * Inspinia theme use AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in theme.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds

    $urlRouterProvider.otherwise("/login");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });

    $stateProvider

        .state('main', {
            abstract: true,
            url: "/main",
            templateUrl: "views/common/content.html",
        })
        .state('main.card-search', {
            url: "/card-search",
            templateUrl: "views/search/card-search.html",
            data: { pageTitle: 'Card Search' },
            controller: 'cardSearchCtrl',
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/controllers/card-search.js']
                        },
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('main.search-result', {
            url: "/search-result",
            templateUrl: "views/search/search-result.html",
            data: { pageTitle: 'Card Search' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('card', {
            abstract: true,
            url: "/card",
            templateUrl: "views/common/content.html",
        })
        .state('card.main', {
            url: "/main",
            templateUrl: "views/card/index.html",
            data: { pageTitle: 'Card Details' }
        })
        .state('card.details', {
            url: "/card-details",
            templateUrl: "views/card/card-details.html",
            data: { pageTitle: 'Card Details' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                    ]);
                }
            }
        })
        .state('card.cardholder-information', {
            url: "/cardholder-information",
            templateUrl: "views/card/cardholder-information.html",
            data: { pageTitle: 'Cardholder Information' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([]);
                }
            }
        })
        .state('card.alerts-notifications', {
            url: "/alerts-notifications",
            templateUrl: "views/card/alerts-notifications.html",
            data: { pageTitle: 'Alerts and Notifications' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                    ]);
                }
            }
        })
        .state('card.creditcard-limits', {
            url: "/creditcard-limits",
            templateUrl: "views/card/creditcard-limits.html",
            data: { pageTitle: 'Credit Card Limits' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('card.creditcard-statement-cycle', {
            url: "/creditcard-statement-cycle",
            templateUrl: "views/card/creditcard-statement-cycle.html",
            data: { pageTitle: 'Credit Card Statement Cycle' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('card.supplementary-card', {
            url: "/supplementary-card",
            templateUrl: "views/card/supplementary-card.html",
            data: { pageTitle: 'Supplementary Card' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('card.history', {
            url: "/history",
            templateUrl: "views/card/history.html",
            data: { pageTitle: 'History' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                    ]);
                }
            }
        })
        .state('cardholder', {
            abstract: true,
            url: "/cardholder",
            templateUrl: "views/common/content.html",
        })
        .state('cardholder.main', {
            url: "/main",
            templateUrl: "views/cardholder/index.html",
            data: { pageTitle: 'Cardholder' }
        })
        .state('cardholder.profile', {
            url: "/cardholder-profile",
            templateUrl: "views/cardholder/profile.html",
            data: { pageTitle: 'Cardholder Profile' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'ui.knob',
                            files: ['js/plugins/jsKnob/jquery.knob.js', 'js/plugins/jsKnob/angular-knob.js']
                        },
                        {
                            files: ['css/plugins/ionRangeSlider/ion.rangeSlider.css', 'css/plugins/ionRangeSlider/ion.rangeSlider.skinFlat.css', 'js/plugins/ionRangeSlider/ion.rangeSlider.min.js']
                        },
                        {
                            insertBefore: '#loadBefore',
                            name: 'localytics.directives',
                            files: ['css/plugins/chosen/bootstrap-chosen.css', 'js/plugins/chosen/chosen.jquery.js', 'js/plugins/chosen/chosen.js']
                        },
                        {
                            name: 'nouislider',
                            files: ['css/plugins/nouslider/jquery.nouislider.css', 'js/plugins/nouslider/jquery.nouislider.min.js', 'js/plugins/nouslider/angular-nouislider.js']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        },
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        },
                        {
                            files: ['css/plugins/dropzone/basic.css', 'css/plugins/dropzone/dropzone.css', 'js/plugins/dropzone/dropzone.js']
                        },
                        {
                            files: ['js/plugins/jasny/jasny-bootstrap.min.js', 'css/plugins/jasny/jasny-bootstrap.min.css']
                        }
                    ]);
                }
            }
        })
        .state('cardholder.cardby-memberid', {
            url: "/cardholder-cardby-memberid",
            templateUrl: "views/cardholder/cardby-memberid.html",
            data: { pageTitle: 'Cardholder Card by Member Id' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {

                            serie: true,
                            name: 'angular-flot',
                            files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js',]
                        },
                        {
                            name: 'angles',
                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                        },
                        {
                            name: 'angular-peity',
                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                        }
                    ]);
                }
            }
        })
        .state('cardprogram', {
            abstract: true,
            url: "/cardprogram",
            templateUrl: "views/common/content.html",
        })
        .state('cardprogram.main', {
            url: "/main",
            templateUrl: "views/cardprogram/index.html",
            data: { pageTitle: 'Card Program' }
        })
        .state('cardprogram.details', {
            url: "/details",
            templateUrl: "views/cardprogram/details.html",
            data: { pageTitle: 'Card Program' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('cardprogram.creditcard-rules', {
            url: "/creditcard-rules",
            templateUrl: "views/cardprogram/creditcard-rules.html",
            data: { pageTitle: 'Credit Card Rules' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('cardprogram.fraud', {
            url: "/fraud",
            templateUrl: "views/cardprogram/fraud.html",
            data: { pageTitle: 'Fraud' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            },
            controller: "fraudCtrl"
        })
        .state('cardprogram.mcc-priviledges', {
            url: "/mcc-priviledges",
            templateUrl: "views/cardprogram/mcc-priviledges.html",
            data: { pageTitle: 'MCC Priviledges' }
        })
        .state('cardprogram.parameters', {
            url: "/parameters",
            templateUrl: "views/cardprogram/parameters.html",
            data: { pageTitle: 'Parameters' }
        })
        .state('cardprogram.restrictions', {
            url: "/restrictions",
            templateUrl: "views/cardprogram/restrictions.html",
            data: { pageTitle: 'Restrictions' }
        })
        .state('cardprogram.rewards', {
            url: "/rewards",
            templateUrl: "views/cardprogram/rewards.html",
            data: { pageTitle: 'Rewards' }
        })
        .state('cardprogram.services', {
            url: "/services",
            templateUrl: "views/cardprogram/services.html",
            data: { pageTitle: 'Services' },
            controller: "servicesCtrl",
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('transactions', {
            abstract: true,
            url: "/transactions",
            templateUrl: "views/common/content.html",
        })
        .state('transactions.main', {
            url: "/main",
            templateUrl: "views/transactions/index.html",
            data: { pageTitle: 'Transactions' }
        })
        .state('transactions.details', {
            url: "/details",
            templateUrl: "views/transactions/details.html",
            data: { pageTitle: 'Transactions Details' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('transactions.direct-deposits', {
            url: "/direct-deposits",
            templateUrl: "views/transactions/direct-deposits.html",
            data: { pageTitle: 'Direct Deposits' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('transactions.declined-transactions', {
            url: "/declined-transactions",
            templateUrl: "views/transactions/declined-transactions.html",
            data: { pageTitle: 'Declined Transaction' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('transactions.account-statements', {
            url: "/account-statements",
            templateUrl: "views/transactions/account-statements.html",
            data: { pageTitle: 'Account Statements' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('main.admin-services', {
            url: "/admin-services",
            templateUrl: "views/admin-services.html",
            data: { pageTitle: 'Administrative Services' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([

                    ]);
                }
            }
        })
        .state('others', {
            abstract: true,
            url: "/others",
            templateUrl: "views/common/content.html",
        })
        .state('others.main', {
            url: "/main",
            templateUrl: "views/others/index.html",
            data: { pageTitle: 'Others' }
        })
        .state('others.calls-history', {
            url: "/calls-history",
            templateUrl: "views/others/calls-history.html",
            data: { pageTitle: 'Calls History' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            name: 'datePicker',
                            files: ['css/plugins/datapicker/angular-datapicker.css', 'js/plugins/datapicker/angular-datepicker.js']
                        }
                    ]);
                }
            }
        })
        .state('others.change-reset-pin', {
            url: "/change-reset-pin",
            templateUrl: "views/others/change-reset-pin.html",
            data: { pageTitle: 'Change Reset PIN' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                    ]);
                }
            }
        })
        .state('others.block-close-card', {
            url: "/block-close-card",
            templateUrl: "views/others/block-close-card.html",
            data: { pageTitle: 'Block/Close Card' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('others.add-comments', {
            url: "/add-comments",
            templateUrl: "views/others/add-comments.html",
            data: { pageTitle: 'Add Comments' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                    ]);
                }
            }
        })
        .state('others.apply-fee', {
            url: "/apply-fee",
            templateUrl: "views/others/apply-fee.html",
            data: { pageTitle: 'Apply Fee' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                    ]);
                }
            }
        })
        .state('others.close-a-call', {
            url: "/close-a-call",
            templateUrl: "views/others/close-a-call.html",
            data: { pageTitle: 'Close a Call' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        }
                    ]);
                }
            }
        })
        .state('others.link-external-card', {
            url: "/link-external-card",
            templateUrl: "views/others/link-external-card.html",
            data: { pageTitle: 'Link External Card' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([

                    ]);
                }
            }
        })
        .state('others.reissue-card', {
            url: "/reissue-card",
            templateUrl: "views/others/reissue-card.html",
            data: { pageTitle: 'Reissue Card' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('others.online-payment-activity', {
            url: "/online-payment-activity",
            templateUrl: "views/others/online-payment-activity.html",
            data: { pageTitle: 'Link External Card' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([

                    ]);
                }
            }
        })
        .state('others.upgrade-card', {
            url: "/upgrade-card",
            templateUrl: "views/others/upgrade-card.html",
            data: { pageTitle: 'Upgrade Card' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('logins', {
            url: "/login",
            templateUrl: "views/login.html",
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/register.html",
            data: { pageTitle: 'Register', specialClass: 'gray-bg' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['css/plugins/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css']
                        },
                        {
                            files: ['css/plugins/iCheck/custom.css', 'js/plugins/iCheck/icheck.min.js']
                        }
                    ]);
                }
            }
        })
        .state('lockscreen', {
            url: "/lockscreen",
            templateUrl: "views/lockscreen.html",
            data: { pageTitle: 'Lockscreen', specialClass: 'gray-bg' }
        })
        .state('forgot_password', {
            url: "/forgot_password",
            templateUrl: "views/forgot_password.html",
            data: { pageTitle: 'Forgot password', specialClass: 'gray-bg' }
        })
        .state('errorOne', {
            url: "/errorOne",
            templateUrl: "views/errorOne.html",
            data: { pageTitle: '404', specialClass: 'gray-bg' }
        })
        .state('errorTwo', {
            url: "/errorTwo",
            templateUrl: "views/errorTwo.html",
            data: { pageTitle: '500', specialClass: 'gray-bg' }
        });

}
angular
    .module('inspinia')
    .config(config)
    .run(function ($rootScope, $state) {
        $rootScope.$state = $state;
    });
