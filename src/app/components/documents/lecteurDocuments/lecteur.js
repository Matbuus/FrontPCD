angular.module('testApp', ['pdf'])
  .controller('AppCtrl', [
    '$scope',
    'pdfDelegate',
    function($scope, pdfDelegate, $log) {
      $scope.pdfUrl = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/149125/relativity.pdf';
    }]);
