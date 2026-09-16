const { home, about, contact } = require("../controllers/page.controller");
const   router = require("find-my-way")({
    defaultRoute: (req, res) => {
    res.statusCode = 404
    res.end()
  }
})


router.get('/', home)
router.get('/about', about)
router.get('/contact', contact)

module.exports = router;