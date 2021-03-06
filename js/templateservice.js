var templateservicemod = angular.module('templateservicemod', []);
templateservicemod.service('TemplateService', function() {
  this.title = "Home";
  this.meta = "Google";
  this.metadesc = "Home";

  var d = new Date();
  this.year = d.getFullYear();

  this.init = function() {
    this.header = "views/header.html";
    this.header2 = "views/header2.html";
    this.menu = "views/menu.html";
    this.content = "views/content/content.html";
    this.tabcontent = "views/content/tabs.html";
    this.tabmenu = "views/content/tabs-menu.html";
    this.footer = "views/footer.html";
  };
  this.changetabcontent = function(page) {
    this.init();
    var data = this;
    data.tabcontent = "views/content/tabs/" + page + ".html";
    return data;
  };

  this.changecontent = function(page) {
    this.init();
    var data = this;
    data.content = "views/content/" + page + ".html";
    return data;
  };

  this.init();

});
