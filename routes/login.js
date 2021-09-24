const express = require("express");
const users = require("../services/users");
const router = express.Router();

router.post('', users.login);

module.exports = router;