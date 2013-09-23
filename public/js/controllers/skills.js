function SkillsController($scope, Skills) {
    $scope.skills = Skills.get();
}