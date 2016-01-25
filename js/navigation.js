var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "About Us",
    classis: "active",
    anchor: "about",
  }, {
    name: "Services",
    classis: "active",
    anchor: "services",
  }, {
    name: "Happyness Quotient",
    classis: "active",
    anchor: "happyness-quotient",
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

  return {
    getnav: function() {
      return navigation;
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
