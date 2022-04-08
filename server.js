const express   = require('express')
const connectDB = require('./config/db')
//! const cors      = require('cors')

const app = express()

connectDB()

app.use(express.json({ extended: false }))

//* Define routes

app.use('/users',   require('./routes/users'))
app.use('/login',   require('./routes/login'))
app.use('/level',   require('./routes/level'))
app.use('/bullet',   require('./routes/bullet'))
app.use('/enemy',   require('./routes/enemy'))
app.use('/item',   require('./routes/item'))
app.use('/boss',   require('./routes/boss'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))