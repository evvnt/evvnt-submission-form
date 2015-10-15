angular.module('evvnt.evvnt-submission-form', [])
  .directive('evvntSubmissionForm', function() {
    return {
      restrict: 'E',
      template: '<form name="evvntSubmission"></form>'
    }
  });
