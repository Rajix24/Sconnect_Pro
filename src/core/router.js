const pageController = require("../controllers/page.controller");

function router(req, res) {

    if (req.method === "GET" && req.url === "/") {
        pageController.home(req, res);
        return;
    }

    if (req.method === "GET" && req.url === "/activities") {
        pageController.activities(req, res);
        return;
    }

    if (req.method === "GET" && req.url === "/members") {
        pageController.members(req, res);
        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain"
    });

    res.end("404 - Page not found");
}

module.exports = router;