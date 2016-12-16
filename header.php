<!DOCTYPE html>
<html lang="en">
<head>
  <?php 
    $body_class = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
  ?>
  <meta charset="UTF-8">
  <title><?php $body_class; ?></title>
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