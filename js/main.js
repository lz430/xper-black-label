$(document).ready(function() {
  var page = window.location.href;
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '{1798124750444148}',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus();
  });
  $('.share a').on('click', function(){
    FB.ui({
      method: 'share',
      display: 'popup',
      href: page,
    }, function(response){});
  });
});