<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Deck</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" type="text/css" href="css/ngswippy.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body ng-app="black-label" ng-controller="MainController" style="overflow-x: hidden;"> 
  <script>
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1798124750444148',
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
  <div class="container deck">
    <a href="index.php" class="icon back-arrow"></a>
    <h1>Select 4</h1>
    <ul class="circles">
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
      <li class="circle"></li>
    </ul>
    <div class="clearfix"></div>
    <ng-swippy collection='deck' clickLike = "clickLike" item-click='myCustomFunction' data='showinfo' collection-empty='swipeend' swipe-left='swipeLeft'  swipe-right='swipeRight' cards-number='4' label-ok='Cool' label-negative='Bad'></ng-swippy>
  </div>
  <!-- Scripts -->
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script> -->
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="js/ng-swippy.js"></script>
  <script src="js/angular-touch.js"></script>
  <script src="js/controller.js"></script>
</body>
</html>