var submissionForm = angular.module('evvnt.evvnt-submission-form', ['formly', 'formlyBootstrap']);

submissionForm.directive('evvntSubmissionForm', function() {
  return {
    restrict: 'E',
    replace: true,
    template: '<div>' +
                '<h1>Register an Event</h1>' +
                '<formly-form model="vm.event" fields="vm.eventFields" form="vm.eventForm">' +
                  '<button type="submit" class="btn btn-primary" ng-disabled="vm.eventForm.$invalid">Submit</button>' +
                '</formly-form>' +
                '<hr>' +
                '<pre>vm.eventForm = {{ vm.eventForm | json }}</pre>' +
              '</div>',
    controller: ['$scope', '$http', function($scope, $http) {
      $scope.vm = this;

      // The model object that we reference
      // on the  element in index.html
      $scope.vm.event = {};

      // An array of our form fields with configuration
      // and options set. We make reference to this in
      // the 'fields' attribute on the  element
      $scope.vm.eventFields = [
        {
            key: 'first_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'First Name',
                placeholder: 'Enter your first name',
                required: true
            }
        },
        {
            key: 'last_name',
            type: 'input',
            templateOptions: {
                type: 'text',
                label: 'Last Name',
                placeholder: 'Enter your last name',
                required: true
            }
        },
        {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email',
                required: true
            }
        }]
    }]
  }
});
