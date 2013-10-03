app.get('/api/work', function (req, res) {
    var work = {
        items: [
            {
                company: 'PTC',
                location: 'Fort Collins, CO',
                title: 'Principal Software Engineer',
                from: '2007 to Present',
                highlights: [
                    '',
                    ''
                ]
            },
            {
                company: 'CoCreate',
                location: 'Fort Collins, CO',
                title: 'Software Architect',
                from: '2002 to 2007',
                highlights: [
                    '',
                    ''
                ]
            }
        ]
    };

    return res.send(work);
});
