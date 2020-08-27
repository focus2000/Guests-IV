const express = require('express');
const colors = require('colors');
const cors = require('cors');
const path = require('path')

const connectDB = require('./config/db')
connectDB()

const app = express();

app.use(express.json());
app.use(cors());
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/guests', require('./routes/guests'));

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => 
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`.blue .bold))
