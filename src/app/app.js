function PresetCtrl($scope) {
	var selectedPreset = '';

	$scope.data = {
		label: 'Preset',
		items: [
			'All',
			'Albums',
			'Live'
		]
	};

	// add the preset to the input's query model
	$scope.setPreset = function (item) {
		var query = $scope.$parent.query;
		query = query.replace(selectedPreset, '').trim();
		selectedPreset = item.toLowerCase();
		query += ' ' + selectedPreset;
		$scope.$parent.query = query;
	}
}
function DurationCtrl($scope){
	$scope.data = {
		label: 'Duration',
		items: [
			'Any',
			'Short (less then 4 minutes)',
			'Medium (4-20 minutes)',
			'Long (longer than 20 minutes)'
		]
	};
}
function AppCtrl($scope, $http){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: 'AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk',
        q: '',
        maxResults: 50
      }
    };

	var searchYoutube = function (newQuery, oldQuery) {
		config.params.q = newQuery;
		$http.get(url, config).success(function(res){
	    	$scope.results = 'number of results: ' + res.pageInfo.totalResults;
	    	$scope.videos = res.items;
	    });
	};

    $scope.isVideoItem = function (video) {
    	return video.id.kind === 'youtube#video';
    };

    $scope.isChannelItem = function(video){
    	return video.id.kind === 'youtube#channel';
    };

    // $scope.getMediaType = function (video) {
    // 	return {
    // 		'video-item': $scope.isVideoItem(video),
    // 		'channel-item': $scope.isChannelItem(video)
    // 	}
    // }
    
    $scope.$watch('query', searchYoutube);
    searchYoutube();
}