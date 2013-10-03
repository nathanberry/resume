var workService = angular.module('resume.workService', ['ngResource']);

workService.factory('Work', function ($resource) {
    return $resource('/api/work/:skillId', {}, {});
});
