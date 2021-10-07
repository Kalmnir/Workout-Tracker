const Workout = require('../models/workout');

module.exports = function (app) {
    app.get('/api/workouts', function (req, res) {
        Workout.find()
            .then(function (data) {
                console.log(data);
                res.json(data);
            });
    });


}