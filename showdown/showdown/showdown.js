angular.module('showdownShowdown',['servoy']).directive('showdownShowdown', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
    	  
    	  // get converter
    	  var converter = new showdown.Converter();
    	  
    	  // watch markdown and convert
    	  $scope.$watch('model.markdown', function(newValue, oldValue) {
    		  $scope.model.markup = converter.makeHtml($scope.model.markdown);
    	  });
      },
      templateUrl: 'showdown/showdown/showdown.html'
    };
  })