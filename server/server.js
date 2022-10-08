const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const bodyParser = require('body-parser');

// handle parsing request body, json parser, cors module.
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// required Routers
const loginRouter = require('./routes/login.js');
const userRouter = require('./routes/user.js');
const petRouter = require('./routes/pet.js');
const reservationRouter = require('./routes/reservation.js');

// Router endpoints
app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/pet', petRouter);
app.use('/api/reservation', reservationRouter);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).json({"unknown": "route"}));

// ERROR HANDLER
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return JSON.stringify(errorObj.status, errorObj.message);
});

// Express app will use port 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;