var app = angular.module('app', ['ngRoute'], RoutingEg);
               
function RoutingEg($routeProvider, $locationProvider) {
  $routeProvider
    .when('/Home', {
      template: `
                <div class="content">
                  <h1>{{data.heading}}</h1>
                  <p>{{data.description}}<p>
                </div>
                `, 
      controller: 'homeController'
    })
    .when('/About', {
      template: `
                <div class="content">
                  <h1>{{data.heading}}</h1>
                  <p>{{data.description}}<p>
                </div>
                `, 
      controller: 'aboutController'
    })
    .otherwise( {
      redirectTo: '/Home'
    });
  
  $locationProvider.html5Mode(true);
}

app.controller('homeController', function($scope) {
  $scope.data = {
    heading: 'Home',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sint odit molestiae, neque repudiandae tenetur quia nihil voluptatum fugiat, ea dicta corrupti dolorum tempora, a reiciendis. Asperiores, eveniet.'
  };
});

app.controller('aboutController', function($scope) {
  $scope.data = {
    heading: 'About Us',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam sint odit molestiae, neque repudiandae tenetur quia nihil voluptatum fugiat, ea dicta corrupti dolorum tempora, a reiciendis. Asperiores, eveniet.'
  };
});
