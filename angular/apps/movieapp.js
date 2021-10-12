var movieApp = angular.module('movieApp', []);

movieApp.controller('MovieAppController', ['$scope', function($scope){

     
    $scope.movies = [
        {
            name: "Halo",
            poster: "images/halo-movie.png",
            age: 15,
            runtime: "150 minutes",
            description: "The battle for survival begins as the human race unleash The Master Chief to balance the tide of war against the mighty Covenant. During this epic 26th century campaign an ancient power is discovered that will raise the stakes to levels never seen before."
        },

        {
            name: "Ghost Mirror",
            poster: "images/ghost-movie.png",
            age: 18,
            runtime: "100 minutes",
            description: "Whilst renovating their new home, Clarissa and Steve discover a very old mirror in their attic and turn to a local antiques dealer to try and sell it however, things are not all as they seem."
        },

        {
            name: "Agent Peels",
            poster: "images/funny-movie.png",
            age: 15,
            runtime: "90 minutes",
            description: "Join Agent Peels as he attempts to track down the mysterious masterminds behind the disappearance of all the worlds milk supply. Breakfast will never be the same again...or will it?"
        },

        {
            name: "Apache",
            poster: "images/western-movie.png",
            age: 18,
            runtime: "110 minutes",
            description: "Achak was born an Apache but soon finds himself at odds with his life as he stumbles upon a new settlement and a different way of life. His past soon returns and he must learn to remember his old life and move towards his future."
        }
    ]
 
}]);