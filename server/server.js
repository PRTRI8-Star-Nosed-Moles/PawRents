const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// handle parsing request body
app.use(express.json());

// login
// sign-up
// user
// pet

// handle requests to server using router

// require routers
const loginRouter = require('./routes/login.js');
const userRouter = require('./routes/user.js');
const petRouter = require('./routes/pet.js');
const reservationRouter = require('./routes/reservation.js');

// www.rentapet.com/login -> login website 8080
// do requests to www.server.com/api/login 3000

// use routers with endpoints
app.use('/api/login', loginRouter);
app.use('/api/user', userRouter);
app.use('/api/pet', petRouter);
app.use('/api/reservation', reservationRouter);


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).json({"unknown": "route"}));

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

/*
React will use port 3000 so use another port
*/
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

module.exports = app;