    angular
        .module('mediaDeck')
        .controller('YoutubeCtrl', YoutubeCtrl);

    /* @ngInject */
    function YoutubeCtrl($scope, YoutubePlayerSettings) {
        $scope.video = {
        	id: YoutubePlayerSettings.getCurrentId
        };
        $scope.$watch('video.id()', function (n,o) {
        	console.log('changed video', n, o);
        });
    }