<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width; initial-scale = 1.0; maximum-scale=1.0; user-scalable=no" />
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
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
  <div class="container logo">
    <img src="images/logo-black-label.png" alt="Lincoln Black Label">
  </div>
  
  <div class="container hero">
    <h1 class="font-Lincoln">What defines you?</h1>
  </div>
  <div class="container instruct">
    <ul>
      <li class="icon icon-arrow-right">
        Swipe right for images that define your ideal lifestyle...
      </li>
      <li class="icon icon-arrow-left">
        And left for images that don't.
      </li>
    </ul>
  </div>
  <div class="container cta">
    <a href="deck.php" class="btn btn-continue">Continue</a>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
</body>
</html>