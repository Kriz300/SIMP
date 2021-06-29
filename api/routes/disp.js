const router = require("express").Router();
const users = require("../database/schemas/user");

//CAE
router.get("/", async (req, res) => {
    var flag = "false";
    const disp = await users.findOne({'mail':req.session["mail"], 'nombre':req.session["nombre"]},(err) => {
        if (err) console.error(err)
        return;
    });

    if (disp != null) {
        flag = disp;
    }
    
    res.send(flag);
});

module.exports = router;