const express = require('express')
const router = express.Router()


router.get('/water', (req, res) => {
    let waterSigns = ['Pisces', 'Cancer', 'Scorpio']
    let waterTraits = ['private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensative']
    res.render('waterElement', {signs: waterSigns, traits: waterTraits})
})

router.get('/Cancer', (req, res)=>{
    res.render('cancer')
})

router.get('/Scorpio', (req, res)=>{
    res.render('scorpio')
})

router.get('/Pisces', (req, res)=>{
    res.render('pisces')
})

module.exports = router