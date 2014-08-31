angular.module('ui-controls', [])
.directive('dropdown', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'app/directives/ui/dropdown.tpl.html',
		scope: {
			label: '@',
			icon: '@',
			items: '=',
			onSelect: '&'
		},
		link: function (scope, element, attrs) {
			scope.handleClick = function (item) {
				scope.onSelect({
					item: item
				});
			}
		}
	}
})