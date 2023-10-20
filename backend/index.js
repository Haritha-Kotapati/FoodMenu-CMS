const express = require('express')
const app = express()
const port = 4000
const mongoDB = require("./db")
const cors = require('cors');

// Connect to MongoDB using the imported function
mongoDB();

//Use the CORS middleware to handle CORS headers
app.use(cors());

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Use bodyparsing middleware;

app.use(express.json())

//Define the routes
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require ("./Routes/LoginUser"));
app.use('/api', require('./Routes/DisplayData'));

//Default route
app.get('/', (req, res) => {
    res.send('Hello World! ----')
})

//Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})