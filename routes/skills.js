app.get('/api/skills', function (req, res) {
    var skills = {
        Languages: [
            {name: 'C#'},
            {name: 'Java'},
            {name: 'Javascript'},
            {name: 'HTML'},
            {name: 'CSS'},
            {name: 'JSON'},
            {name: 'XML'}
        ],
        Platforms: [
            {name: 'ASP.NET MVC'},
            {name: 'Java EE'},
            {name: 'Node.js'},
            {name: 'AngularJS'}
        ],
        Libraries: [
            {name: 'NUnit'},
            {name: 'JUnit'},
            {name: 'RESTEasy'},
            {name: 'Guice DI'},
            {name: 'Express (Node)'},
            {name: 'Mocha Test (Node)'},
            {name: 'Mongoose (Node)'},
            {name: 'Sequelize (Node)'}
        ],
        Methodologies: [
            {name: 'Agile (Scrum and XP)'},
            {name: 'Test Driven Development'},
            {name: 'Pair Programming'}
        ],
        SCMs: [
            {name: 'Git (BitBucket, GitHub)'},
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
            {name: 'Gerrit Code Review'},
            {name: 'Trello'},
            {name: 'Bamboo CI'},
            {name: 'Travis CI'}
        ]
    };

    return res.send(skills);
});