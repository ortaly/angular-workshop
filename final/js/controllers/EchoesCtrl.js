Echoes.controller( 'EchoesCtrl', function EchoesCtrl( $scope, $http ){
	
	$scope.queryProvider = function() {
		var url = 'https://gdata.youtube.com/feeds/api/videos?q=' + 
			$scope.query + '&alt=jsonc&v=2&start-index=' + 
			1 + 
			'&max-results=' + 24;
		$http.get(url).success(function(data){
			$scope.youtubeResults = data.data.items;
		});
	};

	$scope.queryProvider();
});