'use strict';

/**
 * @ngdoc function
 * @name pakenduxApp.controller:AcceuilCtrl
 * @description
 * # AcceuilCtrl
 * Controller of the pakenduxApp
 */
angular.module('pakenduxApp')
  .controller('AcceuilCtrl', function ($scope) {
    $scope.myInterval = 1000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    slides.push({
        image: '/images/moi2.jpg',
        text: ['Nice image','Awesome photograph','That is so cool','I love that'],
        id: currIndex
    });

    /*$scope.image = '/images/moi2.jpg';
    $scope.id = '0';
    $scope.text = 'mama';
    $scope.active = '0';
    $scope.myInterval = 1000;
    $scope.noWrapSlides = false;
    $scope.currentIndex = '0';*/
});
