angular.module('mediaDeck')
.service('YoutubeSearch', function($http, $q, YOUTUBE_API_KEY, YoutubeVideo){
	var url = 'https://www.googleapis.com/youtube/v3/search';
	var config = {
      params: {
        part: 'snippet,id',
        key: YOUTUBE_API_KEY,
        q: '',
        maxResults: 50
      }
    };
  this.types = {
    VIDEO: 'video',
    PLAYLIST: 'playlist'
  };

	this.search = function(query){
    config.params.q = query;
    return $http.get(url, config).then(function(res){
      var videoIds = res.data.items.map(function(video){
        return video.id.videoId;
      });
      return YoutubeVideo.fetch(videoIds.join(','));
    });
	};

  this.setType = function(type){
    config.params.type = type;
  };

  this.setDuration = function (duration) {
    config.params.videoDuration = duration;
  };
});