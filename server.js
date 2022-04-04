const express   = require('express')
const connectDB = require('./config/db')
var bodyParser = require('body-parser');
const app = express()

connectDB()

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.get('/', (req, res) => res.send('API Running'))


//* Define routes

app.use('/users',   require('./routes/users'))
app.use('/login',   require('./routes/login'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))