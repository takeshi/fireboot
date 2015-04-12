'use strict';

module fireboot {
  angular.module('fireboot')
  .config(function ($urlRouterProvider:angular.ui.IUrlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  });

}
