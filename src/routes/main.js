const express = require("express");
const router = express.Router();

const {index} = require("../controllers/mainController")
const ingresoUsers = require('../../middlewares/ingresoUsers');

router.get("/", index);
router.get("/admin", ingresoUsers,index);

module.exports = router;