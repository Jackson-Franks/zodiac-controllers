const express = require('express')
const router = express.Router()

router.get('/earth', (req, res) => {
    let earthSigns = ['Taurus', 'Virgo', 'Capricorn']
    let earthTraits = ['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    res.render('earthElement', {signs: earthSigns, traits: earthTraits})
})

router.get('/Taurus', (req, res)=>{
    res.render('taurus')
})

router.get('/Virgo', (req, res)=>{
    res.render('virgo')
})

router.get('/Capricorn', (req, res)=>{
    res.render('capricorn')
})

module.exports = router