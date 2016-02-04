// JavaScript Document
var controller = new ScrollMagic.Controller();
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
      url: "/",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: "/about-do",
      templateUrl: "views/template.html",
      controller: 'AboutCtrl'
    })
    .state('payment', {
      url: "/payment",
      templateUrl: "views/template.html",
      controller: 'PaymentCtrl'
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
    .state('homeid', {
      url: "/:id",
      templateUrl: "views/template.html",
      controller: 'HomeCtrl'
    })
  $urlRouterProvider.otherwise("/");
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
      var windowHeight = $(window).height();
      $element.css("min-height", windowHeight);
      setTimeout(function() {
        $element.css("min-height", windowHeight);
      });
    }
  };
});

firstapp.directive("scroll", function($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      var windowHeight = $(window).height();
      if (this.pageYOffset >= windowHeight) {
        console.log(windowHeight);
        element.addClass('affix');
      } else {
        element.removeClass('affix');
      }
    });
  };
});

var nguAni = true;
var nguAni2 = true;
var nguAni3 = true;
var nguAni4 = true;
var nguAni5 = true;
var nguAni6 = true;
firstapp.directive('ngu', function($compile, $parse) {
  return {
    restrict: 'EA',
    replace: false,
    link: function($scope, element, attrs) {
      new ScrollMagic.Scene({
          triggerElement: ".ngu-2",
          duration: 500
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("NGU Animation");
          setTimeout(function() {
            nguAni = true;
          }, 5000);
          if (nguAni == true) {
            $(".ngu-animation").attr("src", "img/home/ngu.gif");
            nguAni = false;
          }
        })
      new ScrollMagic.Scene({
          triggerElement: ".ngu-2",
          duration: 200
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("shark and snail Enter");
          setTimeout(function() {
            nguAni2 = true;
            console.log("done");
          }, 5000);

          if (nguAni2 == true) {
            $(".ngu-2 .shark-animation").attr("src", "img/home/Shark-Snail1.gif");
            nguAni2 = false;
          }
        })
      new ScrollMagic.Scene({
          triggerElement: ".ngu-2",
          duration: 200
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("Flying plane");
          setTimeout(function() {
            nguAni3 = true;
            console.log("done");
          }, 5000);

          if (nguAni3 == true) {
            $(".ngu-2 .rocket img").attr("src", "img/gif/Paper-Plane-2a.gif");
            nguAni3 = false;
          }
        })
      new ScrollMagic.Scene({
          triggerElement: ".media-ngu",
          duration: 200
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("Flying plane");
          setTimeout(function() {
            nguAni4 = true;
            console.log("done");
          }, 5000);

          if (nguAni4 == true) {
            $(".media-ngu .rocket img").attr("src", "img/gif/Paper-Plane-1.gif");
            nguAni4 = false;
          }
        })
      new ScrollMagic.Scene({
          triggerElement: ".pay-abt-header .rocket",
          duration: 200
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("Flying plane payment");
          setTimeout(function() {
            nguAni5 = true;
            console.log("done");
          }, 5000);

          if (nguAni5 == true) {
            $(".pay-abt-header .rocket img").attr("src", "img/gif/Paper-Plane-2a.gif");
            nguAni5 = false;
          }
        })
      new ScrollMagic.Scene({
          triggerElement: ".work .rocket",
          duration: 200
        })
        .addTo(controller)
        // .addIndicators() // add indicators (requires plugin)
        .on("enter", function(e) {
          console.log("Flying plane work");
          setTimeout(function() {
            nguAni6 = true;
            console.log("done");
          }, 5000);
          if (nguAni6 == true) {
            $(".work .rocket img").attr("src", "img/gif/Paper-Plane-2a.gif");
            nguAni6 = false;
          }
        })
    }
  };
});
