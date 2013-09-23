app.get('/api/skills', function (req, res) {
    var skills = {
        Languages: [
            {name: 'C#', description: ''},
            {name: 'Javascript', description: ''},
            {name: 'JSON', description: ''},
            {name: 'Java', description: ''}
        ]
    };
    return res.send(skills);
});