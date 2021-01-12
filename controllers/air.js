const express = require('express')
const router = express.Router()

router.get('/air', (req, res) => {
    let airSigns=['Aquarius', 'Gemini', 'Libra']
    let airTraits=['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    res.render('airElement', {signs: airSigns, traits: airTraits})
})

router.get('/Aquarius', (req, res)=>{
    res.render('aquarius')
})

router.get('/Gemini', (req, res)=>{
    res.render('gemini')
})

router.get('/Libra', (req, res)=>{
    res.render('libra')
})




module.exports = router