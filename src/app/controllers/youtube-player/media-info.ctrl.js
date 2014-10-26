    angular
        .module('mediaDeck')
        .controller('MediaInfoCtrl', MediaInfoCtrl);

    /* @ngInject */
    function MediaInfoCtrl($scope, YoutubeVideo, YoutubePlayerSettings) {
    	$scope.video = {
    		title: 'No Media Yet...',
    		desc: '',
    		id: YoutubePlayerSettings.getCurrentId
    	};

    	$scope.$watch('video.id()', function (nid, o) {
    		if (nid) {
    			YoutubeVideo.fetch(nid).then(function(res){
    				$scope.video.title = res.snippet.title;
    				$scope.video.desc = res.snippet.description;
    			});
    		}
    	});
    }
