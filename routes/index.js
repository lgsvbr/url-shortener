const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Encurtador' });
});

router.post('/new', (req, res, next) => {
  const url = req.body.url;
  console.log(url);
  res.send(url);
})

module.exports = router;
