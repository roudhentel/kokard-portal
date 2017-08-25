angular
    .module('inspinia')
    .controller('searchPageCtrl', function ($scope, $state) {
        setTimeout(function () {
            toastrConfig.closeButton = true;
            toastrConfig.progressBar = true;
            toastrConfig.showMethod = 'slideDown';
            toastrConfig.timeOut = 4000;

            // toaster.info('Responsive Admin Theme', 'Welcome to INSPINIA');
            toastr["success"]('Gary Sproule', 'Welcome to Ko-Kard Portal');

        }, 1300);
    })