angular.module('black-label', ['ngTouch', 'ngSwippy'])
    .controller('MainController', function($scope, $timeout, $window) {
        $scope.cardsCollection = [
          {
              thumbnail: 'images/deck/thor_01.jpg',
              collection: 'thoroughbred',
          }, {
              thumbnail: 'images/deck/thor_02.jpg',
              collection: 'thoroughbred',
          }, {
              thumbnail: 'images/deck/thor_03.jpg',
              collection: 'thoroughbred',
          }, {
              thumbnail: 'images/deck/thor_04.jpg',
              collection: 'thoroughbred',
          }, {
              thumbnail: 'images/deck/thor_05.jpg',
              collection: 'thoroughbred',
          }, {
              thumbnail: 'images/deck/thor_06.jpg',
              collection: 'thoroughbred',
          }, {
              thumbnail: 'images/deck/rhap_01.jpg',
              collection: 'rhapsody',
          }, {
              thumbnail: 'images/deck/rhap_02.jpg',
              collection: 'rhapsody',
          }, {
              thumbnail: 'images/deck/rhap_03.jpg',
              collection: 'rhapsody',
          }, {
              thumbnail: 'images/deck/rhap_04.jpg',
              collection: 'rhapsody',
          }, {
              thumbnail: 'images/deck/rhap_05.jpg',
              collection: 'rhapsody',
          }, {
              thumbnail: 'images/deck/rhap_06.jpg',
              collection: 'rhapsody',
          }, {
              thumbnail: 'images/deck/cha_01.jpg',
              collection: 'chalet',
          }, {
              thumbnail: 'images/deck/cha_02.jpg',
              collection: 'chalet',
          }, {
              thumbnail: 'images/deck/cha_03.jpg',
              collection: 'chalet',
          }, {
              thumbnail: 'images/deck/cha_04.jpg',
              collection: 'chalet',
          }, {
              thumbnail: 'images/deck/cha_05.jpg',
              collection: 'chalet',
          }, {
              thumbnail: 'images/deck/cha_06.jpg',
              collection: 'chalet',
          }, {
              thumbnail: 'images/deck/mod_01.jpg',
              collection: 'modern',
          }, {
              thumbnail: 'images/deck/mod_02.jpg',
              collection: 'modern',
          }, {
              thumbnail: 'images/deck/mod_03.jpg',
              collection: 'modern',
          }, {
              thumbnail: 'images/deck/mod_04.jpg',
              collection: 'modern',
          }, {
              thumbnail: 'images/deck/mod_05.jpg',
              collection: 'modern',
          }, {
              thumbnail: 'images/deck/mod_06.jpg',
              collection: 'modern',
          }, {
              thumbnail: 'images/deck/ind_01.jpg',
              collection: 'indulgence',
          }, {
              thumbnail: 'images/deck/ind_02.jpg',
              collection: 'indulgence',
          }, {
              thumbnail: 'images/deck/ind_03.jpg',
              collection: 'indulgence',
          }, {
              thumbnail: 'images/deck/ind_04.jpg',
              collection: 'indulgence',
          }, {
              thumbnail: 'images/deck/ind_05.jpg',
              collection: 'indulgence',
          }, {
              thumbnail: 'images/deck/ind_06.jpg',
              collection: 'indulgence',
          }, {
              thumbnail: 'images/deck/cnt_01.jpg',
              collection: 'center-stage',
          }, {
              thumbnail: 'images/deck/cnt_02.jpg',
              collection: 'center-stage',
          }, {
              thumbnail: 'images/deck/cnt_03.jpg',
              collection: 'center-stage',
          }, {
              thumbnail: 'images/deck/cnt_04.jpg',
              collection: 'center-stage',
          }, {
              thumbnail: 'images/deck/cnt_05.jpg',
              collection: 'center-stage',
          }, {
              thumbnail: 'images/deck/cnt_06.jpg',
              collection: 'center-stage',
          }, {
              thumbnail: 'images/deck/vin_01.jpg',
              collection: 'vineyard',
          }, {
              thumbnail: 'images/deck/vin_02.jpg',
              collection: 'vineyard',
          }, {
              thumbnail: 'images/deck/vin_03.jpg',
              collection: 'vineyard',
          }, {
              thumbnail: 'images/deck/vin_04.jpg',
              collection: 'vineyard',
          }, {
              thumbnail: 'images/deck/vin_05.jpg',
              collection: 'vineyard',
          }, {
              thumbnail: 'images/deck/vin_06.jpg',
              collection: 'vineyard',
          }, 
        ];

        // Do the shuffle
        var shuffleArray = function(array) {
            var m = array.length,
                t, i;
            // While there remain elements to shuffle
            while (m) {
                // Pick a remaining element
                i = Math.floor(Math.random() * m--);
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        };
        $scope.deck = shuffleArray($scope.cardsCollection);

        $scope.myCustomFunction = function() {
          $timeout(function() {
            $scope.clickedTimes = $scope.clickedTimes + 1;
            $scope.actions.unshift({ name: 'Click on item' });
          });
        };

        $scope.count = 0;
        $scope.showinfo = false;
        $scope.clickedTimes = 0;
        $scope.actions = [];
        $scope.picks = [];
        var counterRight = 0;
        var counterLeft = 0;
        var newVar = $scope;

        $scope.swipeend = function() {
            $scope.actions.unshift({ name: 'Collection Empty' });
            $window.location.href = 'theme-default.html';
        }; //endswipeend

        $scope.swipeLeft = function(person) {
            //Essentially do nothing
            $scope.actions.unshift({ name: 'Left swipe' });
            $('.circle.x').addClass('dislike');
            $('.circle.x').removeClass('dislike');
            $(this).each(function() {
                return counterLeft++;
            });
        }; //end swipeLeft

        $scope.swipeRight = function(person) {
          $scope.actions.unshift({ name: 'Right swipe' });

          // Count the number of right swipes
          $(this).each(function() {
              return counterRight++;
          });
          
          $scope.picks.push(person.collection);

          // Checking the circles
          $('.circle').each(function() {
              if (!$(this).hasClass('checked')) {
                  $(this).addClass('checked');
                  return false;
              }
          });

          $('.icon-like').addClass('liked');
          $('.icon-like').removeClass('liked');
          if (counterRight === 4) {
              // Calculate and store the frequency of each swipe
              var frequency = $scope.picks.reduce(function(frequency, swipe) {
                  var sofar = frequency[swipe];
                  if (!sofar) {
                      frequency[swipe] = 1;
                  } else {
                      frequency[swipe] = frequency[swipe] + 1;
                  }
                  return frequency;
              }, {});

              var max = Math.max.apply(null, Object.values(frequency)); // most frequent
              // find key for the most frequent value
              var winner = Object.keys(frequency).find(element => frequency[element] == max);
              $window.location.href = 'theme-' + winner + '.php';

          } //end 4 swipes
        }; //end swipeRight

        $scope.clickLike = function(person) {
          console.log(newVar);
          $scope.swipeRight($scope);
        }; //clickLike
    });
