angular.module('Bookish', [

])
.controller('MainCtrl', function($scope) {
    $scope.books = [
        { "id": 1, "title": "Introduction to Algorithms", "isbn": "0262033844", "category": "Computer Science"},
        { "id": 2, "title": "Learning the bash shell", "isbn": "0596009658", "category": "Linux" },
        { "id": 3, "title": "Designing Object-Oriented Software", "isbn": "0136298257", "category": "Software Development"}
    ];

    $scope.categories = [
        { "id": 1, "name": "Computer Science"},
        { "id": 2, "name": "Linux" },
        { "id": 3, "name": "Software Development"}
    ];

    $scope.currentCategory = null;
    
    function setCurrentCategory(category) {
        $scope.currentCategory = category;
    }

    function isCurrentCategory(category) {
        return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    $scope.setCurrentCategory = setCurrentCategory;
    $scope.isCurrentCategory = isCurrentCategory;
}); 