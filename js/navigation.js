var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "About Us",
    classis: "active",
    link: "#",
  },{
    name: "Services",
    classis: "active",
    link: "#",
  },{
    name: "HQ",
    classis: "active",
    link: "#",
  },{
    name: "Blog",
    classis: "active",
    link: "#",
  },{
    name: "Media",
    classis: "active",
    link: "#",
  },{
    name: "Clients",
    classis: "active",
    link: "#",
  },{
    name: "Contact Us",
    classis: "active",
    link: "#",
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

  }
});
