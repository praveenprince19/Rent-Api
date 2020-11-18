const router = require("express").Router();
const bodyParser = require("body-parser");
const UsersController = require('../Controllers/tblUserController');
const MasterController = require('../Controllers/masterController');
const FlatController = require('../Controllers/FlatController');
const ImageUploadController = require('../Controllers/ImageUpload');



router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/healthcheck", (req, res) => {
    res.sendStatus(200); 
});
router.post("/getAllUsers", UsersController.getAllUser); 
router.post("/getParticularUsers", UsersController.getParticularUserList); 
router.post("/getAllUserType", UsersController.getUserTypes); 
router.post("/getAllPropertyType", MasterController.getUserPropertyTypes); 
router.post("/getParticularPropertyType", MasterController.getParticularPropertyTypes); 
router.post("/getAllParkingType", MasterController.getPakringTypes); 
router.post("/getParticularParkingType", MasterController.getParticularPakringType); 

router.post("/getAllFlatDetails", FlatController.getAllFlatDetails); 
router.post("/getParticularFlatDetails", FlatController.getParticularFlatDetails); 
router.post("/flatImageUpload", ImageUploadController.UploadFlatImage); 
router.post("/getFlatDetailsBasedOnUser", FlatController.getFlatDetailsBasedOnUser); 
router.post("/SearchProject", FlatController.SearchProject); 







module.exports = router;
