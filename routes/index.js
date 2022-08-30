const express = require('express');
const bookRouter = require('./book');

const router = express.Router();

const path = require('path');

router.get('/', (req, res) => {
    res.render('index', {name: 'Chandan'});
});

router.use('/book',bookRouter);


router.all('/*', (req, res) => {
    res.render('404');
});



module.exports = router;
