var skillsService = angular.module('resume.skillsService', ['ngResource']);

skillsService.factory('Skills', function ($resource) {
    return $resource('/api/skills/:skillId', {}, {});
});
