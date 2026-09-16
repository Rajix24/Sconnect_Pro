const pageController = require("../controllers/page.controller");

function router(req, res) {

    if (req.method === "GET" && req.url === "/") {
        pageController.getAll(req, res);
        return
    }

    if (req.method === "GET" && req.url === "/about") {
        pageController.about(req, res);
        return;
    }

    if (req.method === "GET" && req.url === "/contact") {
        pageController.contact(req, res);
        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain"
    });

    res.end("404 - Page not found");
}

module.exports = router;