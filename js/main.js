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

  $('.share').on('click', function(){
    FB.ui({
      method: 'share',
      mobile_iframe: true,
      display: 'popup',
      href: page,
    }, function(response){});
  }); //end share

  var exploreUrl;
  var name = page.match(/([^\/]*)\/*$/)[1];


  switch (name){
    case "theme-center-stage.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/centerstage/";
      break; 
    case "theme-chalet.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/chalet/";
      break; 
    case "theme-indulgence.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/indulgence/";
      break; 
    case "theme-modern.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/modernheritage/";
      break; 
    case "theme-rhapsody.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/rhapsody/";
      break; 
    case "theme-thoroughbred.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/thoroughbred/";
      break; 
    case "theme-vineyard.php":
      exploreUrl =  "http://www.lincoln.com/blacklabel/vineyard/";
      break; 
    default: 
    exploreUrl = "http://www.lincoln.com/blacklabel/";
  }


  $('.explore a').attr('href', exploreUrl);

});