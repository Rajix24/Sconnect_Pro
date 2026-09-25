

const {
    getAllAssociation,
    CreateAssociations, 
    getAssociationById, 
    DeleteAssociation,
    SaveAssociation
} = require("../services/Association.service.js");
const ejs = require("ejs");
const path = require("node:path");


async function AssociationHomePage(req, res){
    const Associations = await getAllAssociation(req, res);
    res.writeHead(200, {"Content-Type": "text/html"});
    // console.log(Associations);
    const html = await ejs.renderFile(path.join(__dirname, "../../views/pages/association.ejs"),{title: "Association", data: Associations});
    res.end(html);
}

async function AssociationOnePage(req, res , params){
   
    const Associations = await getAssociationById(params.id1, req, res);
    res.writeHead(200, {"Content-Type": "text/html"});
    const html = await ejs.renderFile(path.join(__dirname, "../../views/pages/associationOnePage.ejs"),{title: "Association", data: Associations});
    res.end(html);
}


async function DeleteAssociationController(req, res , params){
    console.log("DeleteAssociation called with params:", params);
    await  DeleteAssociation( req, res, params);
    res.writeHead(301, {Location: "/associations"});
    console.log("name")
    res.end()
}

async function AssociationEditPage(req, res , params){
    const Associations = await getAssociationById(params.id, req, res);
    res.writeHead(200, {"Content-Type": "text/html"});
    const html = await ejs.renderFile(path.join(__dirname, "../../views/pages/associationEditPage.ejs"),{title: "Association", data: Associations});
    res.end(html);
}


async function EditAssociation(req, res, params){
    console.log("EditAssociation called with params:", params.id);
    await  SaveAssociation(req, res, params);
    res.writeHead(301, {Location: "/associations"});
    res.end()
}


async function CreateAssociation(req, res){
    console.log(req.body)

    // const associationCreated =
     await CreateAssociations(req, res)
     res.writeHead(302, {Location: "/associations"});
    res.end();
}

module.exports = {
    AssociationHomePage,
    AssociationOnePage,
    CreateAssociation,
    DeleteAssociationController,
    EditAssociation,
    AssociationEditPage
}