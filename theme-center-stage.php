<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Center Stage</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />

  <!-- Facebook Open Graph -->
  <meta property="og:url" content="http://430designs.com/xperience/black-label-app/deck.php" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Center Stage" />
  <meta property="og:description" content="Testing" />
  <meta property="og:image" content="http://430designs.com/xperience/black-label-app/images/logo-black.png" />
  <meta property="og:image:width" content="250" />
  <meta property="og:image:height" content="63" />
  <meta property="fb:app_id" content="1798124750444148" />

  <link rel="stylesheet" type="text/css" href="css/ngswippy.css">
  <!-- <link rel="stylesheet" type="text/cy css" href="css/style.css"> -->
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
  <div class="container theme center-stage">
    <div class="logo">
      <img src="images/logo-black-label.png" alt="Lincoln Black Label">
    </div>
    <div class="container hero-text">
      <h1>YOU ARE WITHOUT A DOUBT CENTER STAGE.</h1>
      <p>
        You have a flair for the dramatic and enjoy being in the spotlight. Your friends know they can find you in the center of a room or the middle of a dance floor. That’s why Black Label’s Center Stage theme is perfect for you. With its Jet Black leather interior accented by Foxfire Red Alcantara®, you can make a bold statement wherever you go.
      </p>
    </div>
    
    <div class="container grid-container">
      <div class="row">
        <img src="images/theme/center-stage/cs-top.png" alt="Chalet" class="full">
      </div>
      <div class="row">
        <div class="col50">
          <img src="images/theme/center-stage/cs-left-1.png" alt="Image 1">
          <img src="images/theme/center-stage/cs-left-2.png" alt="Image 2">
        </div>
        <div class="col50">
          <img src="images/theme/center-stage/cs-right-1.png" alt="Image 3">
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="clearfix"></div>

      <div class="row">
        <img src="images/theme/center-stage/cs-mid.png" alt="Image 4" class="full">
      </div>
      
      <div class="row">
        <img src="images/theme/center-stage/cs-bottom-1.png" alt="Image 5" class="col50">
        <img src="images/theme/center-stage/cs-bottom-2.png" alt="Image 6" class="col50">
        <div class="clearfix"></div>
      </div>
      <div class="row">

        <img src="images/theme/center-stage/cs-bottom-3.png" alt="Image 7">
      </div>
    </div> <!-- end grid-container-->
  </div><!-- end main container-->
  <?php include 'share.php' ?>
  <!-- Scripts -->
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.2/angular.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
  <script src="js/ng-swippy.js"></script>
  <script src="js/angular-touch.js"></script>
  <script src="js/controller.js"></script>
  <script src="js/main.js"></script>
</body>
</html>