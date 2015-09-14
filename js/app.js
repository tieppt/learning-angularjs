/**
 * Created by NTQ on 9/8/2015.
 */
angular
    .module('anapp', [])
    .controller('MainController', function($scope){

        $scope.albums = [
            { name: 'madrid1309', title: 'Weekend in Madrid', date: '2013-09-01', description: 'My favourite trip' },
            { name: 'iceland1404', title: 'Holiday in Iceland', date: '2014-04-15', description: 'This place is cold' },
            { name: 'thailand1210', title: 'Surfing in Thailand', date: '2012-10-01', description: 'So hot!' },
            { name: 'australia1207', title: 'Wedding in Australia', date: '2012-07-31', description: 'So many kangaroos and koalas!' }
        ];
    })