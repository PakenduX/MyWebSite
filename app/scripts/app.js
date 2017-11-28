'use strict';

/**
 * @ngdoc overview
 * @name pakenduxApp
 * @description
 * # pakenduxApp
 *
 * Main module of the application.
 */
angular
  .module('pakenduxApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/acceuil', {
        templateUrl: 'views/acceuil.html',
        controller: 'AcceuilCtrl',
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl',
      })
      .when('/astuce', {
        templateUrl: 'views/tuto.html',
        controller: 'tutoCtrl',
      })
      .otherwise({
        redirectTo: '/acceuil'
      });
  });

function trigger(element) {
  element.parent().find(".active").removeClass("active");
  element.addClass("active");
}