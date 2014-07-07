function PresetCtrl($scope, $rootScope) {
	var selectedPreset = '';

	$scope.data = {
		label: 'Preset',
		items: [
			'All',
			'Albums',
			'Live'
		]
	};

	$scope.preset = $scope.data.items[0];

	// add the preset to the input's query model
	$scope.$watch('preset', function(newPreset, oldPreset){
		if (angular.equals(newPreset, oldPreset)) { 
			return;
		};
		// if 'All' is selected, send a empty string value
		newPreset = newPreset === $scope.data.items[0] ? '' : newPreset;
		$rootScope.$broadcast('preset-change', newPreset);
	});
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
function AppCtrl($scope, $http, $rootScope){
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
}