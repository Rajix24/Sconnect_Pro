const ejs = require("ejs");
const path = require("node:path");
const {
    getAllFacilities,
    getFacilityFormOptions,
    saveFacility
} = require("../services/Facilities.service.js");

async function FacilitiesHomePage(req, res) {
    const [facilities, options] = await Promise.all([
        getAllFacilities(),
        getFacilityFormOptions()
    ]);

    const html = await ejs.renderFile(
        path.join(__dirname, "../../views/pages/facilities.ejs"),
        {
            title: "Facilities",
            facilities,
            associations: options.associations,
            parentFacilities: options.parentFacilities
        }
    );

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(html);
}

async function CreateFacility(req, res) {
    await saveFacility({
        name: req.body.name,
        erp_capacity: req.body.erp_capacity,
        is_divisible: req.body.is_divisible === "on",
        parent_facility_id: req.body.parent_facility_id,
        association_id: req.body.association_id
    });

    res.writeHead(302, { Location: "/facilities" });
    res.end();
}



module.exports = {
    FacilitiesHomePage,
    CreateFacility
}