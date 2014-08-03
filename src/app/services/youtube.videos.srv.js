angular.module('mediaDeck')
.service('YoutubeSearch', function($http, YOUTUBE_API_KEY){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: YOUTUBE_API_KEY,
        q: '',
        maxResults: 50
      }
    };

	this.search = function(query){
		config.params.q = query;
		return $http.get(url, config);
	};

  this.setType = function(type){
    config.params.type = type;
  };
})