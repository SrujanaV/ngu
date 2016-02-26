var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "About Us",
    classis: "active",
    anchor: "about",
  }, {
    name: "Services",
    classis: "active",
    anchor: "employeeengagement",
  }, {
    name: "Happyness Quotient",
    classis: "active",
    anchor: "happynessquotient",
  }, {
    name: "Blog",
    link: "http://www.willnevergrowup.com/blog/",
    anchor: ""
  }, {
    name: "Media",
    anchor: "media",
  }, {
    name: "Clients",
    anchor: "clients",
  }, {
    name: "Contact Us",
    classis: "active",
    anchor: "contact",
  }];

  var navigation2 = [{
    name: "Client Work",
    anchor: "clientwork",
  }, {
    name: "Business Award",
    anchor: "businessaward",
  }, {
    name: "Testimonial",
    anchor: "testimonial",
  }, {
    name: "A New Wave",
    anchor: "newwave",
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
    makeactive2: function(id) {
      console.log(id);
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
