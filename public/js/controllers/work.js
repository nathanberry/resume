function WorkController($scope, Work) {
    $scope.work = Work.get();
}