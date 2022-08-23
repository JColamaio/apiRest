const DB = require('./db.json');
const { saveToDatabase } = require('./utils');

const getAllWorkouts = () => {
    return DB.workouts;
};

const createNewWorkout = (newWorkout) => {
const isALreadyAdded = DB.workouts.findIndex(((workout) => workout.name ===newWorkout.name) > -1);


if(isALreadyAdded) {
    return;
}

DB.workouts.push(newWorkout);
saveToDatabase(DB);
return newWorkout
};

module.exports = { getAllWorkouts, createNewWorkout }