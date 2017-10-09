/**
 * INSPINIA - Responsive Admin Theme
 *
 */
(function () {
    angular.module('koKard', [
        'ui.router',                    // Routing
        'oc.lazyLoad',                  // ocLazyLoad
        'ui.bootstrap',                 // Ui Bootstrap
        'pascalprecht.translate',       // Angular Translate
        'ngIdle',                       // Idle timer
        'ngSanitize',                   // ngSanitize
        'toastr',                       // toaster
        'ngMaterial'                    // material
    ])
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad