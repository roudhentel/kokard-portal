angular.module('koKard').controller('cardSearchCtrl', function ($scope, $state) {
    let s = $scope;

    s.searchFields = {
        cardno: {
            program: "",
            accountNumber: ""
        },
        authcard: {
            role: "",
            userId: "",
            cardNumber: ""
        },
        user: {
            id: ""
        },
        ssnnid: {
            id: ""
        },
        cardref: {
            number: ""
        },
        member: {
            id: ""
        },
        callerInfo: {
            fname: "",
            lname: "",
            hphoneno: "",
            wphoneno: "",
            mphoneno: "",
            zipcode: "",
            email: ""
        },
        business: {
            name: "",
            fedTaxId: "",
            zipcode: "",
            phoneno: "",
            email: ""
        },
        dob: {
            date: new Date()
        },
        customer: {
            id: ""
        }
    }

    s.clearSearchFields = function () {
        s.searchFields = {
            cardno: {
                program: "",
                accountNumber: ""
            },
            authcard: {
                role: "",
                userId: "",
                cardNumber: ""
            },
            user: {
                id: ""
            },
            ssnnid: {
                id: ""
            },
            cardref: {
                number: ""
            },
            member: {
                id: ""
            },
            callerInfo: {
                fname: "",
                lname: "",
                hphoneno: "",
                wphoneno: "",
                mphoneno: "",
                zipcode: "",
                email: ""
            },
            business: {
                name: "",
                fedTaxId: "",
                zipcode: "",
                phoneno: "",
                email: ""
            },
            dob: {
                date: new Date()
            },
            customer: {
                id: ""
            }
        }
    }

    s.search = function(isFormValid) {
        if(!isFormValid) return;

        $state.go('main.search-result');
    }
});