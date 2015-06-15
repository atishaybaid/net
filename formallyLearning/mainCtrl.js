angular.module('formlyApp').controller('mainCtrl', mainCtrl);

function mainCtrl() {

    var vm = this;
    vm.user = {};
    vm.userFields = [
        {
            key: 'firstName',
            type: 'input',
            templateOptions: {

                type: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            }
        }


    ];



}