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
    classis: "active",
    link: "http://www.willnevergrowup.com/blog/",
  }, {
    name: "Media",
    classis: "active",
    anchor: "media",
  }, {
    name: "Clients",
    classis: "active",
    anchor: "clients",
  }, {
    name: "Contact Us",
    classis: "active",
    anchor: "contact",
  }];

  var navigation2 = [{
    name: "Client Work",
    classis: "active",
    anchor: "clientwork",
  }, {
    name: "Business Award",
    classis: "active",
    anchor: "businessaward",
  }, {
    name: "Testimonial",
    classis: "active",
    anchor: "testimonial",
  }, {
    name: "A New Wave",
    classis: "active",
    anchor: "newwave",
  }];

  return {
    getnav: function() {
      return navigation;
    },
    getnav2: function() {
      return navigation2;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
  };
});
