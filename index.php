<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Home</title>
  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no" />
  <?php 
    $pageUrl   = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    $query     = $_SERVER['QUERY_STRING'];
    $theme     = $_GET["theme"]; //get theme from URL
    $imagePath = "http://430designs.com/xperience/black-label-app/images";
    $fbImage   = $imagePath . "/" . $theme . ".jpg";

    switch ($theme) {
      case "center-stage":
          $fbDesc = "I am… CENTER STAGE. I have a flair for the dramatic and love being in the spotlight. What defines you? Find out now.";
          break;
      case "chalet":
          $fbDesc = "I am… CHALET.I live my life as if it were a never-ending luxurious Alpine holiday.What defines you? Find out now.";
          break;
      case "default":
          $fbDesc = "Difficult to please, but love the spotlight. What defines you? Find out now.";
          break;
      case "indulgence":
          $fbDesc = "I am… INDULGENCE. Inspired by the rich allure of chocolate, I savor every moment and indulge in all of life’s pleasures. What defines you? Find out now.";
          break;
      case "modern":
          $fbDesc = "I am… MODERN HERITAGE. Clean lines. Minimalist. Complicated, but I always know how to make it work. What defines you? Find out now.";
          break;
      case "rhapsody":
          $fbDesc = "I am… RHAPSODY.  Driven by the pulse of music, I always know where to find the next “can’t miss” show. What defines you? Find out now.";
          break;
      case "thoroughbred":
          $fbDesc = "I am… THOROUGHBRED. An equestrian enthusiast at heart and the pinnacle of all things “proper.” What defines you? Find out now.";
          break;
      case "vineyard":
          $fbDesc = "I am… VINEYARD.  A luxury tastemaker who admires the rich and storied appeal of the vintner’s world.  What defines you? Find out now.";
          break;
      default:
          $fbDesc = "Difficult to please, but love the spotlight. What defines you? Find out now.";
          break;
    }
  ?>
  <!-- Facebook Open Graph -->
  <meta property="og:url" content="<?php echo $pageUrl; ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Black Label" />
  <meta property="og:description" content="<?php echo $fbDesc; ?>" />
  <meta property="og:image" content="<?php echo $fbImage; ?>" />
  <meta property="og:image:width" content="250" />
  <meta property="og:image:height" content="63" />
  <meta property="fb:app_id" content="1798124750444148" />

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
        <p>Swipe right on images that define you…</p>
      </li>
      <li class="icon icon-arrow-left">
        <p>And left on images that don’t.</p>
      </li>
    </ul>
  </div>
  <div class="container cta">
    <a href="deck.php" class="btn btn-continue">Continue</a>
  </div>
  
  <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
</body>
</html>