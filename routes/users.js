var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/transfer', function(req, res, next) {
  let data = req.body
  console.log(data, data.id)
  res.send('success')
})

module.exports = router;
