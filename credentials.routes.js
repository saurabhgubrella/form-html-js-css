const express = require('express');
const router = express.Router();

const credentials_controller = require('../controllers/credentials_controllers')

router.get("/check",credentials_controller.check);
router.post("/create",credentials_controller.create_credentials);
router.get("/fetch" , credentials_controller.credentials_details);
router.get("/:id",credentials_controller.get_credentials_by_userEmail_id);
router.delete('/delete/:id',credentials_controller.delete_account);
router.put('/update/:id',credentials_controller.update_password_by_email_id);
// router.get("/login",credentials_controller.login);


module.exports = router;