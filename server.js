// Import express and assign to app so that we can use it
const express = require('express')
const app = express()

// Set View engine to EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', require('./routes/gallery'));


const PORT = process.env.PORT || 8000
app.listen(PORT, console.log(`WE LIVE BABY! COMING FROM PORT ${PORT}`))