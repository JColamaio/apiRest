const express = require('express');
const router = express.Router();
const workoutController = require('../../controllers/workoutController');


router
    .get('/all', workoutController.getAllWorkouts)
    .get('/:workoutId', workoutController.getOneWorkout)
    .post('/:workoutId', workoutController.createNewWorkout)
    .patch('/:workoutId', workoutController.updateOneWorkout)
    .delete('/:workoutId', workoutController.deleteOneWorkout)

    module.exports = router
