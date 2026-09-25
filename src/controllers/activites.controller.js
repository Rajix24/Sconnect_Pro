const {getAllActivites} = require("../services/Activities.service.js");
const ejs = require("ejs");
const path = require("node:path");



async function ActivitiesHomePage(req, res) {
    const Activities = await getAllActivites();
    res.writeHead(200, {"Content-Type": "text/html"});
    const html = await ejs.renderFile(path.join(__dirname, "../../views/pages/activity.ejs"),{title: "Activities", data: Activities});
    res.end(html);     
}

module.exports = {
    ActivitiesHomePage
}