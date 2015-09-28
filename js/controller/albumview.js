(function() {
    app.controller('AlbumViewController', function($scope, $routeParams) {
        $scope.load_error_text = '';
        $scope.album_name = $routeParams.album_name;
        var photos = {
            'madrid1309':[
                {
                    filename: 'images/7SAIBDOJWM.jpg',
                    date: '2013/09/05',
                    description: 'alo balo',
                },
                {
                    filename: 'images/CS5KND10L2.jpg',
                    date: '2013/09/06',
                    description: 'alo balo lo',
                },
            ],
            'iceland1404':[
                {
                    filename: 'images/DXYN4QYNUJ.jpg',
                    date: '2014/06/05',
                    description: 'alo balo',
                },
                {
                    filename: 'images/GCLNI8L92T.jpg',
                    date: '2014/06/06',
                    description: 'alo balo lo',
                },
            ],
            'thailand1210':[
                {
                    filename: 'images/I54H0TYV9C.jpg',
                    date: '2014/09/05',
                    description: 'alo balo',
                },
                {
                    filename: 'images/ISM0CM7KAF.jpg',
                    date: '2014/09/06',
                    description: 'alo balo lo',
                },
            ],
            'australia1207':[
                {
                    filename: 'images/RSQRM9Y1FQ.jpg',
                    date: '2015/09/05',
                    description: 'alo balo',
                },
                {
                    filename: 'images/UCEBZORVVB.jpg',
                    date: '2015/09/06',
                    description: 'alo balo lo',
                },
            ],
        };

        if(photos[$scope.album_name]) {
            $scope.photos = photos[$scope.album_name];
        } else {
            $scope.load_error_text = 'No image here!';
        }
    });
})();