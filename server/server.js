const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

// const cors = require('cors');
// app.use(cors());

app.use(express.json());

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