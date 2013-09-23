var resume = angular.module('resume', ['resume.skillsService']);

resume.config(['$routeProvider', function ($routerProvider) {
    $routerProvider
        .when('/', {templateUrl: 'views/index.html', controller: IndexController})
        .when('/skills', {templateUrl: 'views/skills.html', controller: SkillsController})
        .when('/work', {templateUrl: 'views/work.html', controller: WorkController})
        .when('/education', {templateUrl: 'views/education.html', controller: EducationController})
        .when('/contact', {templateUrl: 'views/contact.html', controller: ContactController})
        .otherwise({redirectTo: '/'});
}]);
