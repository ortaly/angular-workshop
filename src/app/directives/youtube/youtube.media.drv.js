angular.module('youtube.directives', [])
.directive('youtubeMedia', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'app/directives/youtube/youtube.media.tpl.html'
		// replace: true
	}

});