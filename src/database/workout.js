const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
const isALreadyAdded = DB.workouts.findIndex((workout) => workout.name ===newWorkout.name);


if(isALreadyAdded) {
    return;
}

DB.workouts.push(newWorkout);
saveToDatabase(DB);
};

module.exports = { getAllWorkouts, createNewWorkout }