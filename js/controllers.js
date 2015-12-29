angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.section = {
    one: "views/content/section/home/section1.html",
    two: "views/content/section/home/section2.html",
    three: "views/content/section/home/section3.html",
    four: "views/content/section/home/section4.html",
    five: "views/content/section/home/section5.html",
    six: "views/content/section/home/section6.html",
    seven: "views/content/section/home/section7.html",
    eight: "views/content/section/home/section8.html",
    nine: "views/content/section/home/section9.html",
    nine: "views/content/section/home/section10.html",
  };

})
.controller('AwesomenessCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("awesomeness");
  $scope.menutitle = NavigationService.makeactive("Awesomeness");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.section = {
    one: "views/content/section/awesomeness/section1.html",
    two: "views/content/section/awesomeness/section2.html",
    three: "views/content/section/awesomeness/section3.html",
    four: "views/content/section/awesomeness/section4.html",
    five: "views/content/section/awesomeness/section5.html",
  };
})
.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})

;
