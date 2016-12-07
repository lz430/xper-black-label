angular.module('black-label', ['ngTouch', 'ngSwippy'])
  .controller('MainController', function($scope, $timeout, $window){
    $scope.cardsCollection = [{
      thumbnail: 'images/thor_01.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/thor_02.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/thor_03.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/thor_04.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/thor_05.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/thor_06.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/rhap_01.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/rhap_02.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/rhap_03.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/rhap_04.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/rhap_05.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/rhap_06.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/cha_01.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/cha_02.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/cha_03.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/cha_04.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/cha_05.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/cha_06.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/mod_01.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/mod_02.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/mod_03.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/mod_04.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/mod_05.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/mod_06.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/ind_01.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/ind_02.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/ind_03.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/ind_04.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/ind_05.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/ind_06.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/cnt_01.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/cnt_02.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/cnt_03.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/cnt_04.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/cnt_05.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/cnt_06.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/vin_01.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/vin_02.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/vin_03.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/vin_04.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/vin_05.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/vin_06.jpg',
      collection: 'vineyard',
    },
  ];
    var shuffleArray = function(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    };
    $scope.deck = shuffleArray($scope.cardsCollection);

    $scope.myCustomFunction = function(){
      $timeout(function(){
        $scope.clickedTimes = $scope.clickedTimes + 1;
        $scope.actions.unshift({name: 'Click on item'});
      });
      
    };


    $scope.showinfo = true;

    $scope.swipeend = function(){
      $scope.actions.unshift({name: 'Collection Empty'});
    };

    $scope.clickedTimes = 0;

    $scope.actions = [];

    var swipes = {};
    var $this = this;

    $scope.swipeLeft = function(person){
      //Essentially do nothing
      $scope.actions.unshift({name: 'Left swipe'});
    };

    $scope.swipeRight = function(person){
      $scope.actions.unshift({name: 'Right swipe'});

      if (swipes[person.collection]) {
        var collection = swipes[person.collection];
        if (collection.right) {
         collection.right += 1;
        } else {
         collection.right = 1;
        }
      } else {
        swipes[person.collection] = {
         right: 1
        };
      }
      

      if (collection && collection.right && collection.right >= 4) {
        //$window.location.href = 'theme-'+ person.collection +'.html';

        // console.log("Collection '" + person.collection + "' has been swiped right 4 times!");
      } else {
       person = $scope.deck[($scope.deck.indexOf(person) + 1) % $scope.deck.length];
      }

      var circles = $('.circles');
      $('.circle').each(function(){
        if (!$(this).hasClass('checked')){
          $(this).addClass('checked')
          return false;
        }
      });
      angular.forEach(circles, function(i){
        //How many times did they swipe
        var swipes = $scope.actions.length;
      });

      angular.forEach(person, function(v, k){
        //This will count how many of each collection was swipped
        if(k === 'collection'){
          //console.log(v);
        }
      });
    };//end swipeRight
      

  });