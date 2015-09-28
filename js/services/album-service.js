(function() {
    function albumProvider() {
        this.getData = function() {

        }
        this.interesting_value = 100;
    }

    app.service('albumService', albumProvider);
})();