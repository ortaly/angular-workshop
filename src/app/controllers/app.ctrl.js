app.controller('AppCtrl', function AppCtrl($scope, $http, $rootScope){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: 'AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk',
        q: '',
        maxResults: 50
      }
    };

	$scope.searchYoutube = function () {
		config.params.q = $scope.query;
		$http.get(url, config).success(function(res){
	    	$scope.videos = res.items;
	    });
	};

    $scope.isVideoItem = function (video) {
    	return video.id.kind === 'youtube#video';
    };

    $scope.isChannelItem = function(video){
    	return video.id.kind === 'youtube#channel';
    };

    
    var selectedPreset = '';

    var setPreset = function(newPreset){
		var query = $scope.query || '';
    	query = query.replace(selectedPreset, '').trim();
		selectedPreset = newPreset.toLowerCase();
		query += ' ' + selectedPreset;
		$scope.query = query;
    };

    // or use $rootScope
    $scope.$on('preset-change', function (ev, preset) {
    	setPreset(preset);
    });

    $scope.searchYoutube();
});