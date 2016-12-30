<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Deck</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  
  <!-- Facebook Open Graph -->
  <meta property="og:url" content="http://lincolnblacklabelapp.com/xperience/black-label-app/deck.php" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Black Label Deck" />
  <meta property="og:description" content="" />
  <meta property="og:image" content="http://lincolnblacklabelapp.com/xperience/black-label-app/images/logo-black.png" />
  <meta property="og:image:width" content="250" />
  <meta property="og:image:height" content="63" />
  <meta property="fb:app_id" content="243271086111491" />

  <link rel="stylesheet" type="text/css" href="css/ngswippy.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  
  <!-- GA Tracking-->
  <script>
     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
     ga('create', 'UA-69403202-6', 'auto');
     ga('send', 'pageview');
  </script>
</head>
<body ng-app="black-label" ng-controller="MainController" style="overflow-x: hidden;"> 
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '243271086111491',
        xfbml      : true,
        version    : 'v2.8'
      });
    };
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  </script>
  <!-- Start actual code -->
  <!-- <div class="fb-like" data-share="true" data-width="450" data-show-faces="true">  </div> -->
  <div class="container deck" ng-cloak>
    <h1>Select 4</h1>
    <ul class="circles">
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
    </ul>
    <div class="clearfix"></div>
    <ng-swippy ng-cloak collection='deck' item-click='myCustomFunction' data='showinfo' collection-empty='swipeend' swipe-left='swipeLeft'  swipe-right='swipeRight' cards-number='5' label-ok='Cool' label-negative='Bad'></ng-swippy>
    <div class="like-dislike" ng-cloak>  
      <div class="dislike fake-swipe">
        <img src="images/icon-x-white.png" alt="Dislike" class="top">
        <img src="images/icon-x-fill.png" alt="Dislike" class="bottom">
      </div>
      <div class="like fake-swipe swippy-like">
        <img src="images/icon-heart-white.png" alt="Like" class="top">
        <img src="images/icon-heart-fill.png" alt="Like" class="bottom">
      </div>
    </div>
  </div>
  <!-- Scripts -->
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script> -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.2/es6-shim.min.js"></script>
  <script type="text/javascript" src="js/ng-swippy.js"></script>
  <script type="text/javascript" src="js/angular-touch.js"></script>
  <script type="text/javascript" src="js/controller.js"></script>
</body>
</html>