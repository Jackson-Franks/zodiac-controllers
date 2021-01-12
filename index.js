const express = require('express')
const layouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')
app.use(layouts)
app.use('/water', require('./controllers/water'))
app.use('/earth', require('./controllers/earth'))
app.use('/fire', require('./controllers/fire'))
app.use('/air', require('./controllers/air'))

app.get('/', (req, res) => {
    res.render('index.ejs')
})









app.listen(3000, () => {console.log('listening on port 3000')})