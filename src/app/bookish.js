angular.module('Bookish', [

])
.controller('MainCtrl', function($scope) {
    $scope.books = [
        { "id": 1, "title": "Introduction to Algorithms" },
        { "id": 2, "title": "Learning the bash shell" },
        { "id": 3, "title": "Designing Object-Oriented Software"}
    ];
}); 