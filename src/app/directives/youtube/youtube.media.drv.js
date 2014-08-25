angular.module('youtube.directives', [])
.directive('youtubeMedia', function(){
	
	return {
		restrict: 'E',
		templateUrl: 'app/directives/youtube/youtube.media.tpl.html',
		replace: true,
		link: function (scope, element, attrs) {
			scope.isVideoItem = function (video) {
		    	return video.id.kind === 'youtube#video';
		    };

		    scope.isChannelItem = function(video){
		    	return video.id.kind === 'youtube#channel';
		    };
		}
	}

});