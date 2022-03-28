var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});




router.get('/admin', function(req, res) {
  res.render('admin', { title: 'Admin Login' });
});




router.get('/visitors', function(req, res) {
  res.render('visitors', { title: 'Visitor menu' });
});

router.get('/Teams', function(req, res) {
  res.render('Teams', { title: 'Teams' });
});

router.get('/detail', function(req, res) {
  res.render('detail', { title: 'Team detail' });
});

module.exports = router;
