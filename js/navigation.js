var admin = "http://admin.willnevergrowup.com/";
var adminUrl = admin + "index.php/json/";
var imageUrl = admin + "uploads/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
    link: "http://www.willnevergrowup.com/blog/",
    anchor: ""
  }, {
    name: "Media",
    anchor: "media",
    target: "_self",
  }, {
    name: "Clients",
    anchor: "clients",
    target: "_self",
  }, {
    name: "Contact Us",
    classis: "active",
    anchor: "contact",
    target: "_self",
  }];

  var navigation2 = [{
    name: "Client Work",
    anchor: "clientwork",
    target: "_self",
  }, {
    name: "Business Award",
    anchor: "businessaward",
    target: "_self",
  }, {
    name: "Testimonials",
    anchor: "testimonials",
    target: "_self",
  }, {
    name: "A New Wave",
    anchor: "newwave",
    target: "_self",
  }];

  return {
    getnav: function() {
      return navigation;
    },
    getnav2: function() {
      return navigation2;
    },
    makeactive: function(id) {
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
    subscribe: function(email, callback) {
      $http.get(adminUrl + "subscribe?email=" + email).success(callback);
    },
    formSubmit: function(form, callback) {
      $http.post(adminUrl + "contactSubmit", form).success(callback);
    },
    getAllTestimonial: function(callback) {
      $http.get(adminUrl + "getalltestimonial").success(callback);
    },
    getAllClient: function(callback) {
      $http.get(adminUrl + "getallclient?maxlength=" + 100).success(callback);
    },
    getAllMedia: function(callback) {
      $http.get(adminUrl + "getallmedia").success(callback);
    },
    makeactive2: function(id) {
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
