const express = require('express')
const cors = require('cors')
const app = express()



const port = process.env.PORT || 5000;

const corsOptions = { origin: ['http://localhost:3000'] };

app.use(express.json())
app.use(cors(corsOptions))

 const userRouter = require('./router/userRouter');
 app.use('/user', userRouter);

 const podcastRouter = require('./router/podcastRouter');
 app.use('/user', podcastRouter);

app.get("/", (req, res) => {
    res.send("podcast");
})

app.post("/login", (req, res) => {
    res.send("podcast");
})

app.post("/register", (req, res) => {
    res.send("podcast");
})

app.listen(port, () => {
    console.log("server started successfully");
})