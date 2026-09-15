const ejs = require("ejs");
const path = require("node:path");

async function home(req, res) {

    const html = await ejs.renderFile(
        path.join(__dirname, "../../views/pages/Home.ejs"),
        {
            title: "Home"
        }
    );

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(html);
}

async function activities(req, res) {

    const html = await ejs.renderFile(
        path.join(__dirname, "../../views/pages/about.ejs"),
        {
            title: "about"
        }
    );

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(html);
}

async function members(req, res) {

    const html = await ejs.renderFile(
        path.join(__dirname, "../../views/pages/contact.ejs"),
        {
            title: "contact"
        }
    );

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(html);
}

module.exports = {
    home,
    activities,
    members
};