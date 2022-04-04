const express   = require('express')
const connectDB = require('./config/db')
//! const cors      = require('cors')

const app = express()

connectDB()

app.use(express.json({ extended: false }))

//app.get('/', (req, res) => res.send('API Running'))


//* Define routes

app.use('/users',   require('./routes/users'))
app.use('/login',   require('./routes/login'))
app.use('/level',   require('./routes/level'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))