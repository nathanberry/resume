app.get('/api/work', function (req, res) {
    var work = [
        {
            company: 'PTC',
            title: 'Principal Software Engineer',

        }
    ];

    return res.send(work);
});
