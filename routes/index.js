var express = require('express');
var router = express.Router();

const ENV_VAR_HELLO = process.env.HELLO

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello EnvKey', env: ENV_VAR_HELLO });
});

module.exports = router;
