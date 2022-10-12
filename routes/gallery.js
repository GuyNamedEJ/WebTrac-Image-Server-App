const images = require('../wtimages.json')
const express = require('express')
const {imageView} = require('../controllers/appController')
const router = express.Router()
const fetch = require('node-fetch')
const fs = require('fs')

console.log(images.images)

// router.get('/', imageView)

// try {
//     let data = fs.readFileSync('wtimages.json', 'utf8')
//     console.log(data[0].images);    
// } catch(e) {
//     console.log('Error:', e.stack);
// }

router.get('/', async(req, res) => {

    res.render('gallery.ejs',{imgSrc:images})
})






module.exports = router