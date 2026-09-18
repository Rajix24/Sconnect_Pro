const { home, about, contact, activity } = require("../controllers/page.controller");
const   router = require("find-my-way")({
    defaultRoute: (req, res) => {
    res.statusCode = 404
    res.end()
  }
})


router.get('/', home)
router.get('/about', about)
router.get('/contact', contact)
router.get('/activity', activity)

module.exports = router;