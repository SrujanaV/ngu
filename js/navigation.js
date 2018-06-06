var admin = "http://admin.willnevergrowup.com/";
// var admin = "http://localhost/ngubackend/";
var adminUrl = admin + "index.php/json/";
// var imageUrl = admin + "uploads/";
var imageUrl = "http://admin.willnevergrowup.com/uploads/";

var navigationservice = angular.module('navigationservice', [])

  .factory('NavigationService', function ($http) {
    var navigation = [{
      name: "About Us",
      classis: "active",
      anchor: "about",
      target: "_self",
    }, {
      name: "Services",
      classis: "active",
      anchor: "employeeengagement",
      target: "_self",
    }, {
      name: "Happyness Quotient",
      classis: "active",
      anchor: "happynessquotient",
      target: "_self",
    }, {
      name: "Blog",
      link: "http://blog.willnevergrowup.com/",
      anchor: ""
    }, {
      name: "Media",
      classis: "active",
      anchor: "media",
      target: "_self",
    }, {
      name: "Clients",
      classis: "active",
      anchor: "clients",
      target: "_self",
    }, {
      name: "Contact Us",
      classis: "active",
      anchor: "contact",
      target: "_self",
    }, {
      name: "Unpluggd",
      classis: "active",
      anchor: "unplugged",
      target: "_self",
    }];

    var navigation2 = [{
      name: "Client Work",
      classis: "active",
      anchor: "clientwork",
      target: "_self",
    }, {
      name: "Business Award",
      classis: "active",
      anchor: "businessaward",
      target: "_self",
    }, {
      name: "Testimonials",
      classis: "active",
      anchor: "testimonials",
      target: "_self",
    }, {
      name: "A New Wave",
      classis: "active",
      anchor: "newwave",
      target: "_self",
    }];

    return {
      getnav: function () {
        return navigation;
      },
      getnav2: function () {
        return navigation2;
      },
      makeactive: function (id) {
        console.log(id);
        for (var i = 0; i < navigation.length; i++) {
          if (navigation[i].anchor == id) {
            navigation[i].classis = "active";
          } else {
            navigation[i].classis = "";
          }
        }
        return id;
      },
      subscribe: function (email, callback) {
        $http.get(adminUrl + "subscribe?email=" + email).success(callback);
      },
      formSubmit: function (form, callback) {
        $http.post(adminUrl + "contactSubmit", form).success(callback);
      },
      unpluggedSubmit: function (form, callback) {
        $http.post(adminUrl + "unpluggedSubmit", form).success(callback);
      },
      getAllTestimonial: function (callback) {
        $http.get(adminUrl + "getalltestimonial").success(callback);
      },
      getClientWithDescription: function (callback) {
        $http.get(adminUrl + "getClientWithDescription").success(callback);
      },
      getAllClient: function (callback) {
        $http.get(adminUrl + "getallclient?maxlength=" + 100).success(callback);
      },
      getAllMedia: function (callback) {
        $http.get(adminUrl + "getallmedia").success(callback);
      },
      makeactive2: function (id) {
        for (var i = 0; i < navigation2.length; i++) {
          if (navigation2[i].anchor == id) {
            navigation2[i].classis = "actives";
          } else {
            navigation2[i].classis = "";
          }
        }
        return id;
      },
    };
  });