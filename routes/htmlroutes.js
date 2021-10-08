const path = require('path');

module.exports = funstion(app) {
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get('/exercises', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get('/stats', function (req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}