const Workout = require('../models/workout');

module.exports = function (app) {
    app.get('/api/workouts', function (req, res) {
        Workout.find()
            .then(function (data) {
                console.log(data);
                res.json(data);
            });
    });

    app.post('/api/workouts', function (req, res) {
        console.log(req.body);

        Workout.create({})
            .then(function (data) {
                res.json(data);
            });
    });

    app.put('/api/workouts/:id', function (req, res) {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
            .then(function (data) {
                res.json(data);
            });
    });

    app.get('/api/workouts/range', function (req, res) {
        Workout.find()
            .then(function (data) {
                res.json(data);
            });
    });
}