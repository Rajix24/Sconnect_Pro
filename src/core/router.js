
// CONTROLLER:
const { home, about, contact } = require("../controllers/page.controller");
const { 
  AssociationHomePage, 
  CreateAssociation, 
  AssociationOnePage, 
  DeleteAssociationController,
  AssociationEditPage,
  EditAssociation
 } = require("../controllers/Association.controller.js");
const { ActivitiesHomePage  } = require("../controllers/activites.controller.js");
const { FacilitiesHomePage, CreateFacility } = require("../controllers/facilities.controller.js");


const   router = require("find-my-way")({
    defaultRoute: (req, res) => {
    res.statusCode = 404
    res.end()
  }
  })
router.get('/', home)
// router.get('/about', about)
// router.get('/contact', contact)

// ROUTERS FRO ASSOCIATIONS:

router.get('/associations', AssociationHomePage)
router.get('/associations/:id1', AssociationOnePage)
router.get('/register/:association_id', (req, res) => {
    console.log(req.params.association_id);
});
router.get('/association/edit/:id', AssociationEditPage)
router.post('/assocaitions/:id/delete',DeleteAssociationController)

router.post('/association/edit/:id', EditAssociation)



router.get("/facilities", FacilitiesHomePage)
router.post("/facilities_post", CreateFacility)




router.get('/activities', ActivitiesHomePage)
router.post('/activities_post', CreateAssociation);
route.get("/activities/:id", (req, res) => {
    console.log(req.params.id);
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`<h1>Activity ID: ${req.params.id}</h1>`);
});

module.exports = router;