Handlebars.registerHelper('nav_link', function (url, options) {
  var linkText = options.fn(this); //options.fn(this);
  classAttr = '';
  Session.get('nav_link');
  if(window.location.pathname == url) {
    classAttr = 'class="active"';
  }
  return '<li '+classAttr+'><a href="'+url+'">'+linkText+'</a>'+'</li>';
});