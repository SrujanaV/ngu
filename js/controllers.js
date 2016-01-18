angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'duScroll'])

.controller('HomeCtrl', function($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    function makeAnimation(id) {
      if (_.isEmpty(id)) {
        id = "home";
      }
      var someElement = angular.element(document.getElementById(id));
      $document.scrollToElement(someElement, 0, 1400);
    }

    $scope.$on('$viewContentLoaded', function(event) {
      setTimeout(function() {
        makeAnimation($stateParams.id);
      }, 1000);
    });


    $scope.changeURL = function(id) {
      $state.transitionTo('homeid', {
        id: id
      }, {
        notify: false
      });
      makeAnimation(id);
      $location.replace();
    };

    $scope.clientSpeakThumbArr = ["img/home/client-speak.png", "img/home/abt-girl.png", "img/home/abt-girl.png"];
    $scope.activeThumb = 0;
    $scope.speakChange = function() {
      $scope.activeThumb = $(".client-speaks .slider-client ol.flex-control-nav.flex-control-paging li a").index($(".client-speaks .slider-client ol.flex-control-nav.flex-control-paging li a.flex-active"));

    };



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
      ten: "views/content/section/home/section10.html",
    };
    $scope.clients = [{
      image: "img/client/client1.png"
    }, {
      image: "img/client/client2.png"
    }, {
      image: "img/client/client3.png"
    }, {
      image: "img/client/client4.png"
    }, {
      image: "img/client/client5.png"
    }, {
      image: "img/client/client6.png"
    }, {
      image: "img/client/client7.png"
    }, {
      image: "img/client/client8.png"
    }, {
      image: "img/client/client9.png"
    }, {
      image: "img/client/client10.png"
    }, {
      image: "img/client/client11.png"
    }, {
      image: "img/client/client12.png"
    }];
    $scope.clients = _.chunk($scope.clients, 12);
    for (var i = 0; i < $scope.clients.length; i++) {
      $scope.clients[i] = _.chunk($scope.clients[i], 4);
    }
    $scope.clientSpeaks = [{
      desc: "The Never Grow Up ® team is a highly motivated &amp; a passionate team always willing to go the extra mile to solve problems. They listen to problems very carefully and come up with break through solutions. Maxus has been working with them for more than five years and they are our key partners. What I like about them is their frank opinions &amp; willingness to speak their mind &amp; not hide behind words. They are a big asset to anyone considering working with them. Just go ahead",
      name: "Kartik Sharma",
      designation: "Managing Director,",
      place: "South Asia, Maxus."
    }, {
      desc: "The team at Never Grow Up ® has been associated as Employee Engagement partners with Shoppers Stop for some time now managing a host of activities and initiatives that have helped create a positive impact. We have found their team to be creative, optimistic and dedicated to the task at hand. Key ideas presented and executed by them have also got us recognition in industry forums and have been well appreciated across the company. Would be happy to recommend Never Grow Up and look forward to a long and healthy association.",
      name: "BVM Rao",
      designation: "Customer Care Associate & Head,",
      place: "Human Resources, Shoppers Stop Ltd."
    }, {
      desc: "It's been an absolute pleasure to have been associated with Never Grow Up ®. I’ve had the opportunity to see this team working with various groups in our organisation across levels. Every time, they've done something unique, whacky and creative. And the good thing is that everything is linked back to the business/organisation objective in a rather interesting way. All the best and never grow up because that's your USP.",
      name: "Apoorva Vig",
      designation: "Talent Partner – Digital,",
      place: "Lead-Engagement and Fulfilment, GroupM."
    }];
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
    $scope.testimonial = [{
      desc: "The Never Grow Up &reg; team is a highly motivated &amp; a passionate team always willing to go the extra mile to solve problems. They listen to problems very carefully and come up with break through solutions. Maxus has been working   them for more than five years and they are our key partners.What I like about them is their frank opinions &amp; willingness to speak their mind & amp;not hide behind words.They are a big asset to anyone considering working with them.Just go ahead.",
      name: "Kartik Sharma",
      designation: "Managing Director,",
      place: "South Asia, Maxus."
    }, {
      desc: "The team at Never Grow Up &reg; has been associated as Employee Engagement partners with Shoppers Stop for some time now managing a host of activities and initiatives that have helped create a positive impact. We have found their team to be creative, optimistic and dedicated to the task at hand. Key ideas presented and executed by them have also got us recognition in industry forums and have been well appreciated across the company. Would be happy to recommend Never Grow Up and look forward to a long and healthy association.",
      name: "BVM Rao",
      designation: "Customer Care Associate & Head,",
      place: "Human Resources, Shoppers Stop Ltd."
    }, {
      desc: "It's been an absolute pleasure to have been associated with Never Grow Up ®. I’ve had the opportunity to see this team working with various groups in our organisation across levels. Every time, they've done something unique, whacky and creative. And the good thing is that everything is linked back to the business/organisation objective in a rather interesting way. All the best and never grow up because that's your USP.",
      name: "Apoorva Vig",
      designation: "Talent Partner – Digital,",
      place: "Lead-Engagement and Fulfilment, GroupM."
    }];
    new WOW().init();
  })
  .controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.section = {
      one: "views/content/section/home/section1.html"
    };
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('PaymentCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("payment");
    $scope.menutitle = NavigationService.makeactive("Payment");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.section = {
      one: "views/content/section/home/section1.html"
    };
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('ConsultingCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("consulting");
    $scope.menutitle = NavigationService.makeactive("Consulting");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";

    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };

  })
  .controller('HappynessCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("happyness");
    $scope.menutitle = NavigationService.makeactive("Happyness");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('WorkshopsCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("workshops");
    $scope.menutitle = NavigationService.makeactive("Workshops");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('EmployerCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("employer-branding");
    $scope.menutitle = NavigationService.makeactive("Employer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('InternalCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("internal");
    $scope.menutitle = NavigationService.makeactive("Internal");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('WorkspaceCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("workspace");
    $scope.menutitle = NavigationService.makeactive("Workspace");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('CorporateCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("corporate");
    $scope.menutitle = NavigationService.makeactive("Corporate");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('DigitalCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("digital");
    $scope.menutitle = NavigationService.makeactive("Digital");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('QuirkyCtrl', function($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("quirky");
    $scope.menutitle = NavigationService.makeactive("Quirky");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function(id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
  })

;
