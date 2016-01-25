var express = require('express');
var router = express.Router();
var pages = require('../controllers/pagesController');

/* GET home page. */
router.get('/', pages.home);
  // Front page template checks whether logged in
  // If logged out, shows generic front page

router.get('/dashboard', pages.dashboard);
  // If logged in, Front Page shows admin dashboard as a partial


router.get('/about', pages.about);
  // Generic copy editable with an on-page editor that is enabled when logged in

router.get('/docs', pages.docs);
  // Generic copy editable with an on-page editor that is enabled when logged in

router.get('/login', pages.login);
  // Empty page template that renders the Login partial

router.get('/signup', pages.signup);
  // Empty page template that renders the Signup partial


module.exports = router;
