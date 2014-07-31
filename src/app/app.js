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
function DurationCtrl($scope, $rootScope){
	$scope.data = {
		label: 'Duration',
		items: [
			{label:'Any', value:"any"},
			{label:'Short (less then 4 minutes)', value:"short"},
			{label:'Medium (4-20 minutes)', value:"medium"},
			{label:'Long (longer than 20 minutes)', value:"long"}
		]
	};

	$scope.duration = $scope.data.items[0].value;
	
	$scope.$watch('duration', function(newDureation, oldDuration){
		if (angular.equals(newDureation, oldDuration)) { 
			return;
		};
		$rootScope.$broadcast('duration-changed', newDureation);
	});
}

function FeedCtrl($scope, $rootScope) {
	$scope.data = {
		items: [
		{ label: 'Videos', icon: 'film', value: 'video' },
		{ label: 'Playlists', icon: 'th-list', value: 'playlist' }
		]
	}
	$scope.active = $scope.data.items[0];

	$scope.setFeed = function(item){
		$scope.active = item;
		$rootScope.$broadcast('feed-type-changed', item.value);
	}
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

    var setDuration = function(newDuration) {
    	config.params.videoDuration = newDuration;
    	config.params.type = "video";
    	$scope.searchYoutube();
    };

    var setFeedType = function(feedType) {
    	config.params.type = feedType;
    	$scope.searchYoutube();
    };

    // or use $rootScope
    $scope.$on('preset-change', function (ev, preset) {
    	setPreset(preset);
    });
	
	$scope.$on('duration-changed', function (ev, duration) {
    	setDuration(duration);
    });

    $scope.$on('feed-type-changed', function (ev, feedType) {
    	setFeedType(feedType);
    });
    $scope.searchYoutube();
}