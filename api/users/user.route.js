const {createUser, getUsers, login,  updateUsers} = require("./user.controller");
const { checkToken } = require("../../auth/token_validation");
const router = require("express").Router();
router.post("/",createUser);
router.get("/",checkToken, getUsers);
router.post("/login", login);
router.patch("/",  updateUsers);
module.exports = router;