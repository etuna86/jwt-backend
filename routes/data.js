var express = require('express');
var router = express.Router();


let userData = {
    username: "e.tuna@extratik.com",
    password: "123"
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(userData);
});

module.exports = router;
