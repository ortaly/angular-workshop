angular.module('mediaDeck').controller('VideosCtrl',
function ($scope, YoutubePlayerSettings){
	$scope.playVideo = function (video) {
		YoutubePlayerSettings.playVideoId(video.id);
	};
});