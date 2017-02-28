angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'duScroll'])

  .controller('HomeCtrl', function ($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    console.log($stateParams.id);
    $scope.menutitle = NavigationService.makeactive($stateParams.id);

    function AllTestimonial(data, status) {
      $scope.clientSpeaks = data;
    }

    function AllMedia(data, status) {
      $scope.allmedia = data;
      console.log(data.queryresult);
      $scope.allmedia = _.chunk($scope.allmedia, 5);
    }

    function AllClient(data, status) {
      $scope.clients = data;
      $scope.clients = _.chunk($scope.clients, 12);
      for (var i = 0; i < $scope.clients.length; i++) {
        $scope.clients[i] = _.chunk($scope.clients[i], 4);
      }
    }
    NavigationService.getAllTestimonial(AllTestimonial);
    NavigationService.getAllClient(AllClient);
    NavigationService.getAllMedia(AllMedia);

    $scope.submitContact = function (contactForm, contactFormValid) {
      if (contactFormValid.$valid === true) {
        console.log("All is well");
        console.log(contactForm);
        NavigationService.formSubmit(contactForm, function (data) {
          console.log(data);
          console.log("Form Submitted Sucessfully");
        });
        $scope.contactFormComplete = true;
      } else {
        console.log("There is an error");
      }
    };

    $scope.submitSubscribe = function (subscribeForm, subscribeFormValid) {
      if (subscribeFormValid.$valid === true) {
        console.log("All is well");
        NavigationService.subscribe(subscribeForm.email, function (data) {
          console.log(data);
          console.log("Form Submitted Sucessfully");
        });
        $scope.subscribeFormComplete = true;
      } else {
        console.log("There is an error");
      }
    };

    function makeAnimation(id) {
      if (_.isEmpty(id)) {
        id = "home";
      }
      var someElement = angular.element(document.getElementById(id));
      $document.scrollToElement(someElement, 0, 1400);
    }

    $scope.$on('$viewContentLoaded', function (event) {
      setTimeout(function () {
        makeAnimation($stateParams.id);
      }, 1000);
    });


    $scope.changeURL = function (id) {
      $scope.menutitle = NavigationService.makeactive(id);
      $state.transitionTo('homeid', {
        id: id
      }, {
          notify: false
        });
      makeAnimation(id);
      $location.replace();
    };

    $scope.clientSpeakThumbArr = ["img/home/client/1.png", "img/home/client/2.png", "img/home/client/3.png", "img/home/client/4.png", "img/home/client/5.png", "img/home/client/6.png", "img/home/client/7.png", "img/home/client/8.png", "img/home/client/9.png", "img/home/client/10.png", "img/home/client/11.png", "img/home/client/12.png", "img/home/client/13.png", "img/home/client/15.png"];
    $scope.activeThumb = 0;
    $scope.speakChange = function () {
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
      eleven: "views/content/section/home/section11.html",
    };
    // $scope.myData = [];

    $scope.unplugData = {};
    $scope.unplugDataSubmit = function (data) {
      console.log(data);
      // $scope.myData.push(data);
      // console.log(myData);

    }
    // $scope.clients = [{
    //   image: "img/client/Tata-Sky.png"
    // }, {
    //   image: "img/client/DHLGlobalForwarding.png"
    // }, {
    //   image: "img/client/ABFSG.png"
    // }, {
    //   image: "img/client/Loreal-India.png"
    // }, {
    //   image: "img/client/Aditya-Birla-Nuvo.png"
    // }, {
    //   image: "img/client/Housing.png"
    // }, {
    //   image: "img/client/Flipkart.png"
    // }, {
    //   image: "img/client/Shoppers-Stop.png"
    // }, {
    //   image: "img/client/Maxus.png"
    // }, {
    //   image: "img/client/Reliance-Brands-Limited.png"
    // }, {
    //   image: "img/client/Indus-Towers.png"
    // }, {
    //   image: "img/client/Accenture.png"
    // }, {
    //   image: "img/client/Star-Plus.png"
    // }, {
    //   image: "img/client/HDFC-Home-Loans.png"
    // }, {
    //   image: "img/client/Reliance.png"
    // }, {
    //   image: "img/client/ICICI-Prudential.png"
    // }, {
    //   image: "img/client/Max-Bupa.png"
    // }, {
    //   image: "img/client/DHL.png"
    // }, {
    //   image: "img/client/EMC2.png"
    // }, {
    //   image: "img/client/Timberland.png"
    // }, {
    //   image: "img/client/Groupm.png"
    // }, {
    //   image: "img/client/Hamleys.png"
    // }, {
    //   image: "img/client/Minda.png"
    // }, {
    //   image: "img/client/Barclays.png"
    // }, {
    //   image: "img/client/Cogitate.png"
    // }, {
    //   image: "img/client/Hypercity.png"
    // }, {
    //   image: "img/client/CWD.png"
    // }, {
    //   image: "img/client/Novo-Nordisk.png"
    // }, {
    //   image: "img/client/Infradebt.png"
    // }, {
    //   image: "img/client/ARM.png"
    // }, {
    //   image: "img/client/IMT.png"
    // }, {
    //   image: "img/client/Godrej-Properties.png"
    // }, {
    //   image: "img/client/TRAAIN.png"
    // }, {
    //   image: "img/client/JP-Morgan.png"
    // }, {
    //   image: "img/client/Marsh.png"
    // }, {
    //   image: "img/client/PepsiCo.png"
    // }, {
    //   image: "img/client/KPMG.png"
    // }, {
    //   image: "img/client/Oracle.png"
    // }, {
    //   image: "img/client/NAB.png"
    // }, {
    //   image: "img/client/Quintiles.png"
    // }, {
    //   image: "img/client/RGA.png"
    // }, {
    //   image: "img/client/VVF.png"
    // }, {
    //   image: "img/client/Ingram-Micro.png"
    // }, {
    //   image: "img/client/Pantaloons.png"
    // }, {
    //   image: "img/client/Tata-Teleservices-Limited.png"
    // }, {
    //   image: "img/client/Tata-Docomo.png"
    // }, {
    //   image: "img/client/Phoenix-ARC.png"
    // }, {
    //   image: "img/client/SBI-Life-Insurance.png"
    // }, {
    //   image: "img/client/DHFL_Brand_Logo.png"
    // }, {
    //   image: "img/client/NISOS.png"
    // }, {
    //   image: "img/client/JumboKing.png"
    // }, {
    //   image: "img/client/Raymonds.png"
    // }, {
    //   image: "img/client/Castrol.png"
    // }, {
    //   image: "img/client/Shemaroo.png"
    // }, {
    //   image: "img/client/ESPN.png"
    // }, {
    //   image: "img/client/IndiaFirst.png"
    // }, {
    //   image: "img/client/RBL-bank.png"
    // }, {
    //   image: "img/client/grp.png"
    // }];

    // $scope.clientSpeaks = [{
    //   desc: "The Never Grow Up &reg; team is a highly motivated & a passionate team always willing to go the extra mile to solve problems. They listen to problems very carefully and come up with break through solutions. Maxus has been working with them for more than five years and they are our key partners. What I like about them is their frank opinions & willingness to speak their mind & not hide behind words. They are a big asset to anyone considering working with them. Just go ahead.",
    //   name: "Kartik Sharma,",
    //   designation: "Managing Director,",
    //   place: "South Asia, Maxus."
    // }, {
    //   desc: "The team at Never Grow Up &reg; has been associated as Employee Engagement partners with Shoppers Stop for some time now managing a host of activities and initiatives that have helped create a positive impact. We have found their team to be creative, optimistic and dedicated to the task at hand. Key ideas presented and executed by them have also got us recognition in industry forums and have been well appreciated across the company. Would be happy to recommend Never Grow Up and look forward to a long and healthy association.",
    //   name: "BVM Rao,",
    //   designation: "Customer Care Associate & Head,",
    //   place: "Human Resources, Shoppers Stop Ltd."
    // }, {
    //   desc: "It's been an absolute pleasure to have been associated with Never Grow Up &reg;. I’ve had the opportunity to see this team working with various groups in our organisation across levels. Every time, they've done something unique, whacky and creative. And the good thing is that everything is linked back to the business/organisation objective in a rather interesting way. All the best and never grow up because that's your USP.",
    //   name: "Apoorva Vig,",
    //   designation: "Talent Partner – Digital,",
    //   place: "Lead-Engagement and Fulfilment, GroupM."
    // }, {
    //   desc: "Never Grow Up &reg; is an apt brand name. I would say so since the team never grows up! And that is the best part about the entire team. They have such explosive ideas that can wrap your mind into a whirlpool of thoughts that you would be thinking what to choose from and how exciting this would turn out to be for your organization. There have been quite a few programs that we have been doing with Never Grow Up on the employee engagement front, Shoppers Stop I Pledge event & SSL Radio mainly. Great to have them as a business partner.",
    //   name: "Rahul Nayar,",
    //   designation: "Talent Partner – Digital,",
    //   place: "Lead-Engagement and Fulfilment, Shoppers Stop Limited."
    // }, {
    //   desc: "We were struggling to get all that we wanted in one shot. With no time left in hand to plan, it was only Never Grow Up &reg; who made it possible. Arranging for various activities, training, coaching and workshops all in a day's offsite for the leadership team. Unbelievable and that too within my budget! Hats off to them and their creativity! You guys rock! I am confident you are on the right track. Top qualities: Great Results, Good Value, On Time.",
    //   name: "Anju Jumde,",
    //   designation: "Training Head,",
    //   place: "Barclays Bank"
    // }, {
    //   desc: "Never Grow Up &reg; has worked with us more than once and every time have left us delighted & positively surprised! His team is extremely creative and the ideas they generate are unheard of. Their expertise can be evaluated from the fact that they have worked across the spectrum, right from training the Top Management of Investment Bank to organizing an event for Kids and families and delighting the audience from both the segments. I wish them all the best for his successful journey towards creating a new concept in India! Top Qualities: Great Results, Expert & Creative.",
    //   name: "Sumeet Khutale,",
    //   designation: "Vice President,",
    //   place: "J P Morgan"
    // }, {
    //   desc: "Am falling short of adjectives to describe Never Grow Up &reg;. The word impossible doesn’t exist in their dictionary and that’s what I like the most about them. Life is sorted when you have them. NGU Rocks!",
    //   name: "Sumita Sahu",
    //   designation: "Manager,",
    //   place: "Human Resources, Reliance Capital"
    // }, {
    //   desc: "I have known Never Grow Up &reg; since 2010. The team has a bunch of crazy guys who come up with these weird ideas which ultimately become a super hit with employees. A bunch of dedicated team members who work like there is no tomorrow – all set to meet their deadlines. It’s a fun organization and it ensures that the organizations that they deal with also have a fun element in their engagement activities. They are the creators of great ideas who ensure that the child in you never dies. I thank God for “Never Grow Up”!",
    //   name: "Binny Mathen,",
    //   designation: "Customer Care Associate & Manager Human Resources,",
    //   place: "Crossword Bookstores Ltd"
    // }, {
    //   desc: "Great fun, kept energy levels despite being the graveyard session (post lunch). It was very well structured with lessons, practice and a competition. I'd be happy to refer you to other organizations.",
    //   name: "Seema Padman,",
    //   designation: "Director HR Asia,",
    //   place: "ARM"
    // }];
  })

  .controller('AwesomenessCtrl', function ($scope, $state, TemplateService, NavigationService, $timeout, $stateParams, $document, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("awesomeness");
    // $scope.menutitle = NavigationService.makeactive2("Awesomeness");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav2();
    TemplateService.footer = "views/footer2.html";
    $scope.menutitle = NavigationService.makeactive2($stateParams.id);
    console.log($stateParams.id);

    function AllTestimonial(data, status) {

      $scope.testimonial = data;
    }
    NavigationService.getAllTestimonial(AllTestimonial);

    function ClientWithDescription(data, status) {

      $scope.ClientWithDescription = data;

      $scope.ClientWithDescription = _.chunk($scope.ClientWithDescription, 3);
      console.log($scope.ClientWithDescription);
    }
    NavigationService.getClientWithDescription(ClientWithDescription);

    function makeAnimation(id) {
      if (_.isEmpty(id)) {
        id = "awesomeness";
      }
      var someElement = angular.element(document.getElementById(id));
      $document.scrollToElement(someElement, 0, 1400);
    }
    $scope.$on('$viewContentLoaded', function (event) {
      setTimeout(function () {
        makeAnimation($stateParams.id);
      }, 1000);
    });
    $scope.changeURL = function (id) {
      $scope.menutitle = NavigationService.makeactive2(id);
      $state.transitionTo('awesomenessid', {
        id: id
      }, {
          notify: false
        });
      makeAnimation(id);
      $location.replace();
    };
    $scope.section = {
      one: "views/content/section/awesomeness/section1.html",
      two: "views/content/section/awesomeness/section2.html",
      three: "views/content/section/awesomeness/section3.html",
      four: "views/content/section/awesomeness/section4.html",
      five: "views/content/section/awesomeness/section5.html",
    };
    // $scope.testimonial = [{
    //   desc: "The Never Grow Up &reg; team is a highly motivated & a passionate team always willing to go the extra mile to solve problems. They listen to problems very carefully and come up with break through solutions. Maxus has been working with them for more than five years and they are our key partners. What I like about them is their frank opinions & willingness to speak their mind & not hide behind words. They are a big asset to anyone considering working with them. Just go ahead.",
    //   name: "Kartik Sharma,",
    //   designation: "Managing Director,",
    //   place: "South Asia, Maxus."
    // }, {
    //   desc: "The team at Never Grow Up &reg; has been associated as Employee Engagement partners with Shoppers Stop for some time now managing a host of activities and initiatives that have helped create a positive impact. We have found their team to be creative, optimistic and dedicated to the task at hand. Key ideas presented and executed by them have also got us recognition in industry forums and have been well appreciated across the company. Would be happy to recommend Never Grow Up and look forward to a long and healthy association.",
    //   name: "BVM Rao,",
    //   designation: "Customer Care Associate & Head,",
    //   place: "Human Resources, Shoppers Stop Ltd."
    // }, {
    //   desc: "It's been an absolute pleasure to have been associated with Never Grow Up &reg;. I’ve had the opportunity to see this team working with various groups in our organisation across levels. Every time, they've done something unique, whacky and creative. And the good thing is that everything is linked back to the business/organisation objective in a rather interesting way. All the best and never grow up because that's your USP.",
    //   name: "Apoorva Vig,",
    //   designation: "Talent Partner – Digital,",
    //   place: "Lead-Engagement and Fulfilment, GroupM."
    // }, {
    //   desc: "Never Grow Up &reg; is an apt brand name. I would say so since the team never grows up! And that is the best part about the entire team. They have such explosive ideas that can wrap your mind into a whirlpool of thoughts that you would be thinking what to choose from and how exciting this would turn out to be for your organization. There have been quite a few programs that we have been doing with Never Grow Up on the employee engagement front, Shoppers Stop I Pledge event & SSL Radio mainly. Great to have them as a business partner.",
    //   name: "Rahul Nayar,",
    //   designation: "Talent Partner – Digital,",
    //   place: "Lead-Engagement and Fulfilment, Shoppers Stop Limited."
    // }, {
    //   desc: "We were struggling to get all that we wanted in one shot. With no time left in hand to plan, it was only Never Grow Up &reg; who made it possible. Arranging for various activities, training, coaching and workshops all in a day's offsite for the leadership team. Unbelievable and that too within my budget! Hats off to them and their creativity! You guys rock! I am confident you are on the right track. Top qualities: Great Results, Good Value, On Time.",
    //   name: "Anju Jumde,",
    //   designation: "Training Head,",
    //   place: "Barclays Bank"
    // }, {
    //   desc: "Never Grow Up &reg; has worked with us more than once and every time have left us delighted & positively surprised! His team is extremely creative and the ideas they generate are unheard of. Their expertise can be evaluated from the fact that they have worked across the spectrum, right from training the Top Management of Investment Bank to organizing an event for Kids and families and delighting the audience from both the segments. I wish them all the best for his successful journey towards creating a new concept in India! Top Qualities: Great Results, Expert & Creative.",
    //   name: "Sumeet Khutale,",
    //   designation: "Vice President,",
    //   place: "J P Morgan"
    // }, {
    //   desc: "Am falling short of adjectives to describe Never Grow Up &reg;. The word impossible doesn’t exist in their dictionary and that’s what I like the most about them. Life is sorted when you have them. NGU Rocks!",
    //   name: "Sumita Sahu",
    //   designation: "Manager,",
    //   place: "Human Resources, Reliance Capital"
    // }, {
    //   desc: "I have known Never Grow Up &reg; since 2010. The team has a bunch of crazy guys who come up with these weird ideas which ultimately become a super hit with employees. A bunch of dedicated team members who work like there is no tomorrow – all set to meet their deadlines. It’s a fun organization and it ensures that the organizations that they deal with also have a fun element in their engagement activities. They are the creators of great ideas who ensure that the child in you never dies. I thank God for “Never Grow Up”!",
    //   name: "Binny Mathen,",
    //   designation: "Customer Care Associate & Manager Human Resources,",
    //   place: "Crossword Bookstores Ltd"
    // }, {
    //   desc: "Great fun, kept energy levels despite being the graveyard session (post lunch). It was very well structured with lessons, practice and a competition. I'd be happy to refer you to other organizations.",
    //   name: "Seema Padman,",
    //   designation: "Director HR Asia,",
    //   place: "ARM"
    // }];
    // new WOW().init();
  })
  .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("about");
    $scope.menutitle = NavigationService.makeactive("About");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('PaymentCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("payment");
    $scope.menutitle = NavigationService.makeactive("Payment");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('ConsultingCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("consulting");
    $scope.menutitle = NavigationService.makeactive("Consulting");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";

    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };

  })
  .controller('HappynessCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("happyness");
    $scope.menutitle = NavigationService.makeactive("Happyness");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('WorkshopsCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("workshops");
    $scope.menutitle = NavigationService.makeactive("Workshops");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('EmployerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("employer-branding");
    $scope.menutitle = NavigationService.makeactive("Employer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('InternalCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("internal");
    $scope.menutitle = NavigationService.makeactive("Internal");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('WorkspaceCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("workspace");
    $scope.menutitle = NavigationService.makeactive("Workspace");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('CorporateCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("corporate");
    $scope.menutitle = NavigationService.makeactive("Corporate");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('DigitalCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("digital");
    $scope.menutitle = NavigationService.makeactive("Digital");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })
  .controller('QuirkyCtrl', function ($scope, TemplateService, NavigationService, $timeout, $location) {
    //Used to name the .html file
    $scope.template = TemplateService.changetabcontent("quirky");
    $scope.menutitle = NavigationService.makeactive("Quirky");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    TemplateService.header = "views/header-other.html";
    $scope.changeURL = function (id) {
      console.log(id);
      $location.path("" + id);
    };
  })

  .controller('headerctrl', function ($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      $(window).scrollTop(0);
    });
  });