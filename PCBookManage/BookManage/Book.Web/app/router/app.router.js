var module = angular.module('app.router', ['ui.router']);

//home page
import indexRoute from './index.router';
module.config(['$stateProvider','$locationProvider','$urlRouterProvider',indexRoute]);

export default module;
