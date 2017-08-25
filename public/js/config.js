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
            templateUrl: "views/card-search.html",
            data: { pageTitle: 'Card Search' },
            resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['js/controllers/card-search.js']
                        },
                        {
                            files: ['js/plugins/moment/moment.min.js']
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
        .state('card', {
            abstract: true,
            url: "/card",
            templateUrl: "views/common/content.html",
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
                            files: ['js/plugins/moment/moment.min.js']
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
                            files: ['js/plugins/moment/moment.min.js']
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
                    ]);
                }
            }
        })
        .state('cardholder', {
            abstract: true,
            url: "/cardholder",
            templateUrl: "views/common/content.html",
        })
        .state('cardholder.information', {
            url: "/cardholder-information",
            templateUrl: "views/cardholder/information.html",
            data: { pageTitle: 'Cardholder Information' },
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
        .state('cardprogram.details', {
            url: "/cardprogram-details",
            templateUrl: "views/cardprogram/details.html",
            data: { pageTitle: 'Card Program' }
        })
        .state('cardprogram.creditcard-rules', {
            url: "/cardprogram-creditcard-rules",
            templateUrl: "views/cardprogram/creditcard-rules.html",
            data: { pageTitle: 'Credit Card Rules' }
        })
        .state('cardprogram.fraud', {
            url: "/cardprogram-fraud",
            templateUrl: "views/cardprogram/fraud.html",
            data: { pageTitle: 'Fraud' }
        })
        .state('cardprogram.mcc-priviledges', {
            url: "/cardprogram-mcc-priviledges",
            templateUrl: "views/cardprogram/mcc-priviledges.html",
            data: { pageTitle: 'MCC Priviledges' }
        })
        .state('cardprogram.parameters', {
            url: "/cardprogram-parameters",
            templateUrl: "views/cardprogram/parameters.html",
            data: { pageTitle: 'Parameters' }
        })
        .state('cardprogram.restrictions', {
            url: "/cardprogram-restrictions",
            templateUrl: "views/cardprogram/restrictions.html",
            data: { pageTitle: 'Restrictions' }
        })
        .state('cardprogram.rewards', {
            url: "/cardprogram-rewards",
            templateUrl: "views/cardprogram/rewards.html",
            data: { pageTitle: 'Rewards' }
        })
        .state('cardprogram.services', {
            url: "/cardprogram-services",
            templateUrl: "views/cardprogram/services.html",
            data: { pageTitle: 'Services' }
        })
        .state('login', {
            url: "/login",
            templateUrl: "views/login_two_columns.html",
            data: { pageTitle: 'Login two columns', specialClass: 'gray-bg' }
        })
        .state('register', {
            url: "/register",
            templateUrl: "views/register.html",
            data: { pageTitle: 'Register', specialClass: 'gray-bg' }
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
