const router = require("express").Router();

const login = require("./login");
const disp = require("./disp");
const graficas = require("./graficas");

router.use("/login", login);
router.use("/disp", disp);
router.use("/graficas", graficas);

module.exports = router;