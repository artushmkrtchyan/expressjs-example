const router = require("express").Router();
const UsersController = require('../../controllers/users')
const {isAuthorized} = require('../../middlewares/auth')

router.get("/:id",  UsersController.getUser);
router.post("/",  UsersController.createUser);
router.get("/", isAuthorized, UsersController.getUsers);

module.exports = router;