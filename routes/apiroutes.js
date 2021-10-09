const router = require("express").Router();

const {
    addWorkout,
    addExercise,
    getWorkouts
} = require("../controller/WorkoutController");

router.route("/api/workouts").get(getWorkouts).post(addWorkout);

router.route("/api/workouts/:id").put(addExercise);

router.route("/api/workouts/range").get(getWorkouts);

module.exports = router;