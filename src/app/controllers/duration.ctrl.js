angular.module('mediaDeck').controller('DurationCtrl',['$scope', '$rootScope', function DurationCtrl($scope, $rootScope){
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
}])