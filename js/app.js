// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/template.html",
      controller: 'AboutCtrl'
    })
    .state('awesomeness', {
      url: "/awesomeness",
      templateUrl: "views/template.html",
      controller: 'AwesomenessCtrl'
    })
    .state('consulting', {
      url: "/consulting",
      templateUrl: "views/template-tabs.html",
      controller: 'ConsultingCtrl'
    })
    .state('happyness', {
      url: "/happyness",
      templateUrl: "views/template-tabs.html",
      controller: 'HappynessCtrl'
    })
    .state('workshops', {
      url: "/workshops",
      templateUrl: "views/template-tabs.html",
      controller: 'WorkshopsCtrl'
    })
    .state('employer-branding', {
      url: "/employer-branding",
      templateUrl: "views/template-tabs.html",
      controller: 'EmployerCtrl'
    })
    .state('internal', {
      url: "/internal",
      templateUrl: "views/template-tabs.html",
      controller: 'InternalCtrl'
    })
    .state('workspace', {
      url: "/workspace",
      templateUrl: "views/template-tabs.html",
      controller: 'WorkspaceCtrl'
    })
    .state('corporate', {
      url: "/corporate",
      templateUrl: "views/template-tabs.html",
      controller: 'CorporateCtrl'
    })
    .state('digital', {
      url: "/digital",
      templateUrl: "views/template-tabs.html",
      controller: 'DigitalCtrl'
    })
    .state('quirky', {
      url: "/quirky",
      templateUrl: "views/template-tabs.html",
      controller: 'QuirkyCtrl'
    })
  $urlRouterProvider.otherwise("/home");
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('autoHeight', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      var windowHeight = $( window ).height();
      $element.css("min-height", windowHeight);
      setTimeout(function() {
        $element.css("min-height", windowHeight);
      });
    }
  };
});

firstapp.directive('onlyDigits', function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, ngModelCtrl) {
      function fromUser(text) {
        if (text) {
          var transformedInput = text.replace(/[^0-9]/g, '');

          if (transformedInput !== text) {
            ngModelCtrl.$setViewValue(transformedInput);
            ngModelCtrl.$render();
          }
          return transformedInput;
        }
        return undefined;
      }
      ngModelCtrl.$parsers.push(fromUser);
    }
  };
});
