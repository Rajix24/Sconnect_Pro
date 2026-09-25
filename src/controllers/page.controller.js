const ejs = require("ejs");
const path = require("node:path");
const { getAllActivites } = require("../services/Activities.service");
//TODO: GET LIST FORM DATABASE AND SHOW IT IN BROWSER
async function home(req, res) {
    const Activities = await  getAllActivites()
    const html = await ejs.renderFile(path.join(__dirname, "../../views/pages/Home.ejs"),{title: "Home", data: Activities.rows});
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
}

// SELECT * FROM activities AS ac JOIN associations AS asco ON ac.association_id = asco.id JOIN facilities AS a ON ac.facility_id = a.id;

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