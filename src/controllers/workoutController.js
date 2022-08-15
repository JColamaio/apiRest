const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    const AllWorkouts = workoutService.getAllWorkouts()
    res.send ({status: "OK", data: AllWorkouts})
}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout()
    res.send (`Get workout ${req.param.workoutId}`)
}

const createNewWorkout = (req, res) => {
    const createdWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send (`Get workout ${req.params.workoutId}`)
}

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutid);
    res.send(`Update workout ${req.params.workoutId}`)
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId)
    res.send(`Delete workout ${req,params.workoutId}`)
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout

};