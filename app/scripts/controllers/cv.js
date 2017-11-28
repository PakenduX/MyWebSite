'use strict';

/**
 * @ngdoc function
 * @name pakenduxApp.controller:CvCtrl
 * @description
 * # CvCtrl
 * Controller of the pakenduxApp
 */
angular.module('pakenduxApp')
  .controller('CvCtrl', function ($scope) {

      document.getElementById('titre').innerHTML = "Mama-CV";
    	$scope.name = 'Mama DEMBELE';
    	$scope.job = 'Élève-Ingénieur en 3ème année Informatique';
      $scope.school = 'Polytech Marseille';

    	var c = document.getElementById("java");
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.arc(50,50,40,0,17*Math.PI/10);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 3;
      ctx.fillText("85%", 39, 53);
      ctx.stroke();

      var c2 = document.getElementById("htmlCss");
      var ctx2 = c2.getContext("2d");
      ctx2.beginPath();
      ctx2.arc(50,50,40,0,17*Math.PI/10);
      ctx2.strokeStyle = "blue";
      ctx2.lineWidth = 3;
      ctx2.fillText("85%", 39, 53);
      ctx2.stroke();

      var c3 = document.getElementById("linuxC");
      var ctx3 = c3.getContext("2d");
      ctx3.beginPath();
      ctx3.arc(50,50,40,0,15*Math.PI/10);
      ctx3.strokeStyle = "blue";
      ctx3.lineWidth = 3;
      ctx3.fillText("75%", 39, 53);
      ctx3.stroke();

      var c4 = document.getElementById("androidLatex");
      var ctx4 = c4.getContext("2d");
      ctx4.beginPath();
      ctx4.arc(50,50,40,0,7*Math.PI/5);
      ctx4.strokeStyle = "blue";
      ctx4.lineWidth = 3;
      ctx4.fillText("70%", 39, 53);
      ctx4.stroke();

      var c5 = document.getElementById("scilabMaple");
      var ctx5 = c5.getContext("2d");
      ctx5.beginPath();
      ctx5.arc(50,50,40,0,13*Math.PI/10);
      ctx5.strokeStyle = "blue";
      ctx5.lineWidth = 3;
      ctx5.fillText("65%", 39, 53);
      ctx5.stroke();

      var c6 = document.getElementById("matlab");
      var ctx6 = c6.getContext("2d");
      ctx6.beginPath();
      ctx6.arc(50,50,40,0,6*Math.PI/5);
      ctx6.strokeStyle = "blue";
      ctx6.lineWidth = 3;
      ctx6.fillText("60%", 39, 53);
      ctx6.stroke();

      var c7 = document.getElementById("word");
      var ctx7 = c7.getContext("2d");
      ctx7.beginPath();
      ctx7.arc(50,50,40,0,8*Math.PI/5);
      ctx7.strokeStyle = "blue";
      ctx7.lineWidth = 3;
      ctx7.fillText("80%", 39, 53);
      ctx7.stroke();

      var c8 = document.getElementById("powerPoint");
      var ctx8 = c8.getContext("2d");
      ctx8.beginPath();
      ctx8.arc(50,50,40,0,15*Math.PI/10);
      ctx8.strokeStyle = "blue";
      ctx8.lineWidth = 3;
      ctx8.fillText("75%", 39, 53);
      ctx8.stroke();

      var c9 = document.getElementById("osi");
      var ctx9 = c9.getContext("2d");
      ctx9.beginPath();
      ctx9.arc(50,50,40,0,7*Math.PI/5);
      ctx9.strokeStyle = "blue";
      ctx9.lineWidth = 3;
      ctx9.fillText("70%", 39, 53);
      ctx9.stroke();

      var c10 = document.getElementById("protocole");
      var ctx10 = c10.getContext("2d");
      ctx10.beginPath();
      ctx10.arc(50,50,40,0,13*Math.PI/10);
      ctx10.strokeStyle = "blue";
      ctx10.lineWidth = 3;
      ctx10.fillText("65%", 39, 53);
      ctx10.stroke();

      var c11 = document.getElementById("fr");
      var ctx11 = c11.getContext("2d");
      ctx11.beginPath();
      ctx11.arc(50,50,40,0,9*Math.PI/5);
      ctx11.strokeStyle = "blue";
      ctx11.lineWidth = 3;
      ctx11.fillText("90%", 39, 53);
      ctx11.stroke();

      var c12 = document.getElementById("en");
      var ctx12 = c12.getContext("2d");
      ctx12.beginPath();
      ctx12.arc(50,50,40,0,7*Math.PI/5);
      ctx12.strokeStyle = "blue";
      ctx12.lineWidth = 3;
      ctx12.fillText("70%", 39, 53);
      ctx12.stroke();

      var c13 = document.getElementById("bm");
      var ctx13 = c13.getContext("2d");
      ctx13.beginPath();
      ctx13.arc(50,50,40,0,19*Math.PI/10);
      ctx13.strokeStyle = "blue";
      ctx13.lineWidth = 3;
      ctx13.fillText("95%", 39, 53);
      ctx13.stroke();

      var c14 = document.getElementById("bootstrap");
      var ctx14 = c14.getContext("2d");
      ctx14.beginPath();
      ctx14.arc(50,50,40,0,15*Math.PI/10);
      ctx14.strokeStyle = "blue";
      ctx14.lineWidth = 3;
      ctx14.fillText("75%", 39, 53);
      ctx14.stroke();

      var c15 = document.getElementById("angularjs");
      var ctx15 = c15.getContext("2d");
      ctx15.beginPath();
      ctx15.arc(50,50,40,0,13*Math.PI/10);
      ctx15.strokeStyle = "blue";
      ctx15.lineWidth = 3;
      ctx15.fillText("65%", 39, 53);
      ctx15.stroke();


  });
