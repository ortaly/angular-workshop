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

})
.directive('mediaList', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'app/directives/youtube/media.list.tpl.html',
		// template: "<youtube-media \
		// 	ng-repeat=\"video in videos | orderBy:'snippet.publishedAt':'reverse' | limitTo:25\"> \
		// </youtube-media>",
		scope: {
			videos: '=model'
		},
		link: function(scope, element, attrs){

		}
	}
});