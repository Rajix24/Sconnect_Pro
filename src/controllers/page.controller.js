const ejs = require("ejs");
const path = require("node:path");

async function home(req, res) {


    const arr = ["younes rajix", "zakaria kssim"]

    const html = await ejs.renderFile(
        path.join(__dirname, "../../views/pages/Home.ejs"),
        {
            title: "Home",
            arr: arr
        }
    );

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(html);
}

async function about(req, res) {

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

async function contact(req, res) {

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
    about,
    contact
};