const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;
const v1WorkoutRouter = require('./src/v1/routes/workoutRoutes');
// const v2Router = require('./src/v1/routes/routes');

app.listen()
app.use(express());



app.use('/api/v1', v1WorkoutRouter)
// app.use('/api/v2', v2Router)

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});