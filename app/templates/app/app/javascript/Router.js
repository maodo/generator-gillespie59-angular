(function(){
	'use strict';

	angular.module('<%= moduleName %>').config(RouterConfig);

	RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider'];
	function RouterConfig($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {
			$locationProvider.html5Mode({
				enabled: true
			});
			$compileProvider.debugInfoEnabled(false);
			$urlRouterProvider.otherwise('/');
			$stateProvider.state('home', {
				url: '/',
				templateUrl: 'template/View/home.html',
				controller: 'HomeController'
			});
	}
})();