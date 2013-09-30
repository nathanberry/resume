app.get('/api/skills', function (req, res) {
    var skills = {
        Languages: [
            {name: 'C#'},
            {name: 'Javascript'},
            {name: 'JSON'},
            {name: 'Java'},
            {name: 'HTML'},
            {name: 'XML'}
        ],
        Platforms: [
            {name: 'ASP.NET MVC 4'},
            {name: 'Java EE'},
            {name: 'Node.js'},
            {name: 'Angular'}
        ],
        Libraries: [
            {name: 'NUnit'},
            {name: 'JUnit'},
            {name: 'RESTEasy'},
            {name: 'Guice DI'},
            {name: 'Express (Node)'},
            {name: 'Mocha Test (Node)'},
            {name: 'Mongoose (Node)'}
        ],
        Methodologies: [
            {name: 'Agile (SCRUM and XP)'},
            {name: 'Test Driven Development'},
            {name: 'Pair Programming'}
        ],
        SCMs: [
            {name: 'Git'},
            {name: 'Subversion'},
            {name: 'CVS'},
            {name: 'Mercurial'}
        ],
        Databases: [
            {name: 'SQL Server'},
            {name: 'MySQL'},
            {name: 'MongoDB'},
            {name: 'Postgres'},
            {name: 'Oracle'}
        ],
        Tools: [
            {name: 'Visual Studio'},
            {name: 'PHPStorm'},
            {name: 'NetBeans'},
            {name: 'VersionOne'},
            {name: 'Jenkins CI'},
            {name: 'Bamboo CI'},
            {name: 'Gerrit Code Review'}
        ]
    };

    return res.send(skills);
});