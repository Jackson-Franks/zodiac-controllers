const express = require('express')
const router = express.Router()

router.get('/fire', (req, res) => {
    let fireSigns = ['Aries', 'Leo', 'Sagittarius']
    let fireTraits = ['passionate', 'strong emoutions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    res.render('fireElement', {signs: fireSigns, traits: fireTraits})
})

router.get('/Leo', (req, res)=>{
    res.render('leo')
})

router.get('/Aries', (req, res)=>{
    res.render('aries')
})

router.get('/Sagittarius', (req, res)=>{
    res.render('sagittarius')
})

module.exports = router