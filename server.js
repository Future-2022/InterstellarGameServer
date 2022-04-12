const express   = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

connectDB()
var http = require('http').createServer(app);

app.use(cors({
    origin: '*'
}));

app.use(express.json({ extended: false }))

//* Define routes
app.use('/users',   require('./routes/users'))
app.use('/login',   require('./routes/login'))
app.use('/level',   require('./routes/level'))
app.use('/bullet',   require('./routes/bullet'))
app.use('/enemy',   require('./routes/enemy'))
app.use('/item',   require('./routes/item'))
app.use('/boss',   require('./routes/boss'))
app.use('/playHistory',   require('./routes/playHistory'))

const PORT = process.env.PORT || 3001

http.listen(PORT, ()=> {
    console.log('listening on *:' + PORT);
});