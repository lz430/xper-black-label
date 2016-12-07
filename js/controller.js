angular.module('black-label', ['ngTouch', 'ngSwippy'])
  .controller('MainController', function($scope, $timeout, $window){
    $scope.cardsCollection = [{
      thumbnail: 'images/deck/thor_01.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/deck/thor_02.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/deck/thor_03.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/deck/thor_04.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/deck/thor_05.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/deck/thor_06.jpg',
      collection: 'thoroughbred',
    },{
      thumbnail: 'images/deck/rhap_01.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/deck/rhap_02.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/deck/rhap_03.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/deck/rhap_04.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/deck/rhap_05.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/deck/rhap_06.jpg',
      collection: 'rhapsody',
    },{
      thumbnail: 'images/deck/cha_01.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/deck/cha_02.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/deck/cha_03.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/deck/cha_04.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/deck/cha_05.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/deck/cha_06.jpg',
      collection: 'chalet',
    },{
      thumbnail: 'images/deck/mod_01.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/deck/mod_02.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/deck/mod_03.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/deck/mod_04.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/deck/mod_05.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/deck/mod_06.jpg',
      collection: 'modern',
    },{
      thumbnail: 'images/deck/ind_01.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/deck/ind_02.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/deck/ind_03.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/deck/ind_04.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/deck/ind_05.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/deck/ind_06.jpg',
      collection: 'indulgence',
    },{
      thumbnail: 'images/deck/cnt_01.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/deck/cnt_02.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/deck/cnt_03.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/deck/cnt_04.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/deck/cnt_05.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/deck/cnt_06.jpg',
      collection: 'center-stage',
    },{
      thumbnail: 'images/deck/vin_01.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/deck/vin_02.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/deck/vin_03.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/deck/vin_04.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/deck/vin_05.jpg',
      collection: 'vineyard',
    },{
      thumbnail: 'images/deck/vin_06.jpg',
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


    $scope.showinfo = false;

    $scope.swipeend = function(){
      $scope.actions.unshift({name: 'Collection Empty'});
    };

    $scope.clickedTimes = 0;

    $scope.actions = [];

    var counter = 1;
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
      

      // if (collection && collection.right && collection.right >= 4) {
        if(counter === 4){




        // $window.location.href = 'theme-'+ person.collection +'.html';

        // console.log("Collection '" + person.collection + "' has been swiped right 4 times!");
      } else {
       person = $scope.deck[($scope.deck.indexOf(person) + 1) % $scope.deck.length];
      }

      // Checking the circles
      var circles = $('.circles');
      $('.circle').each(function(){
        if (!$(this).hasClass('checked')){
          $(this).addClass('checked')
          return false;
        }
      });

      // Count the number of right swipes
      $(this).each(function(){
        console.log(counter);
        counter++;
      });

    };//end swipeRight

    
  });