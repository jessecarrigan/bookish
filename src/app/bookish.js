angular.module('Bookish', [

])
.controller('MainCtrl', function($scope) {
    $scope.books = [
        { "id": 1, "title": "Introduction to Algorithms", "category": "Computer Science"},
        { "id": 2, "title": "Learning the bash shell", "category": "Linux" },
        { "id": 3, "title": "Designing Object-Oriented Software", "category": "Software Development"}
    ];

    $scope.categories = [
        { "id": 1, "category": "Computer Science"},
        { "id": 2, "category": "Linux" },
        { "id": 3, "category": "Software Development"}
    ];

    $scope.currentCategory = null;
    
    function setCurrentCategory(category) {
        $scope.currentCategory = category;
    }

    $scope.setCurrentCategory = setCurrentCategory;
}); 