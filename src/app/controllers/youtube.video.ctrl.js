angular.module('mediaDeck')
.controller('YoutubeVideoCtrl', [
'$scope', 'ytVideo', '$location',
function($scope, ytVideo, $location){
	var getDuration = function (time) {
		var t = time.split("PT")[1]
			.replace(/(H|M)/g, ":")
			.replace("S", "");
		var ts = t.split(":");
		ts = ts.map(function(d){
			return d.length === 1 ? "0" + d : d;
		});
		return ts.join(":");
	};


	$scope.video = ytVideo;
	$scope.time = getDuration(ytVideo.contentDetails.duration)

	$scope.goBack = function () {
		$location.url('/');
	}

}])