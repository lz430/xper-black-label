angular.module('black-label', ['ngTouch', 'ngSwippy'])
  .controller('MainController', function($scope, $timeout){
    $scope.cardsCollection = [{
      thumbnail: 'images/thor_01.jpg',
      collection: 'Thoroughbred',
    },{
      thumbnail: 'images/thor_02.jpg',
      collection: 'Thoroughbred',
    },{
      thumbnail: 'images/thor_03.jpg',
      collection: 'Thoroughbred',
    },{
      thumbnail: 'images/thor_04.jpg',
      collection: 'Thoroughbred',
    },{
      thumbnail: 'images/thor_05.jpg',
      collection: 'Thoroughbred',
    },{
      thumbnail: 'images/thor_06.jpg',
      collection: 'Thoroughbred',
    },{
      thumbnail: 'images/rhap_01.jpg',
      collection: 'Rhapsody',
    },{
      thumbnail: 'images/rhap_02.jpg',
      collection: 'Rhapsody',
    },{
      thumbnail: 'images/rhap_03.jpg',
      collection: 'Rhapsody',
    },{
      thumbnail: 'images/rhap_04.jpg',
      collection: 'Rhapsody',
    },{
      thumbnail: 'images/rhap_05.jpg',
      collection: 'Rhapsody',
    },{
      thumbnail: 'images/rhap_06.jpg',
      collection: 'Rhapsody',
    },{
      thumbnail: 'images/cha_01.jpg',
      collection: 'Chalet',
    },{
      thumbnail: 'images/cha_02.jpg',
      collection: 'Chalet',
    },{
      thumbnail: 'images/cha_03.jpg',
      collection: 'Chalet',
    },{
      thumbnail: 'images/cha_04.jpg',
      collection: 'Chalet',
    },{
      thumbnail: 'images/cha_05.jpg',
      collection: 'Chalet',
    },{
      thumbnail: 'images/cha_06.jpg',
      collection: 'Chalet',
    },{
      thumbnail: 'images/mod_01.jpg',
      collection: 'Modern',
    },{
      thumbnail: 'images/mod_02.jpg',
      collection: 'Modern',
    },{
      thumbnail: 'images/mod_03.jpg',
      collection: 'Modern',
    },{
      thumbnail: 'images/mod_04.jpg',
      collection: 'Modern',
    },{
      thumbnail: 'images/mod_05.jpg',
      collection: 'Modern',
    },{
      thumbnail: 'images/mod_06.jpg',
      collection: 'Modern',
    },{
      thumbnail: 'images/ind_01.jpg',
      collection: 'Indulgence',
    },{
      thumbnail: 'images/ind_02.jpg',
      collection: 'Indulgence',
    },{
      thumbnail: 'images/ind_03.jpg',
      collection: 'Indulgence',
    },{
      thumbnail: 'images/ind_04.jpg',
      collection: 'Indulgence',
    },{
      thumbnail: 'images/ind_05.jpg',
      collection: 'Indulgence',
    },{
      thumbnail: 'images/ind_06.jpg',
      collection: 'Indulgence',
    },{
      thumbnail: 'images/cnt_01.jpg',
      collection: 'Center Stage',
    },{
      thumbnail: 'images/cnt_02.jpg',
      collection: 'Center Stage',
    },{
      thumbnail: 'images/cnt_03.jpg',
      collection: 'Center Stage',
    },{
      thumbnail: 'images/cnt_04.jpg',
      collection: 'Center Stage',
    },{
      thumbnail: 'images/cnt_05.jpg',
      collection: 'Center Stage',
    },{
      thumbnail: 'images/cnt_06.jpg',
      collection: 'Center Stage',
    },{
      thumbnail: 'images/vin_01.jpg',
      collection: 'Vineyard',
    },{
      thumbnail: 'images/vin_02.jpg',
      collection: 'Vineyard',
    },{
      thumbnail: 'images/vin_03.jpg',
      collection: 'Vineyard',
    },{
      thumbnail: 'images/vin_04.jpg',
      collection: 'Vineyard',
    },{
      thumbnail: 'images/vin_05.jpg',
      collection: 'Vineyard',
    },{
      thumbnail: 'images/vin_06.jpg',
      collection: 'Vineyard',
    },
  ];

    $scope.myCustomFunction = function(){
      $timeout(function(){
        $scope.clickedTimes = $scope.clickedTimes + 1;
        $scope.actions.unshift({name: 'Click on item'});
      });
      
    };

    $scope.size = {
      width: 300,
      height: 400
    };

    $scope.showinfo = true;

    $scope.swipeend = function(){
      $scope.actions.unshift({name: 'Collection Empty'});
    };

    $scope.clickedTimes = 0;

    $scope.actions = [];

    $scope.swipeLeft = function(person){
      $scope.actions.unshift({name: 'Left swipe'});
    };

    $scope.swipeRight = function(person){
      $scope.actions.unshift({name: 'Right swipe'});
    };

  });