const router = require("express").Router();
const users = require("../database/schemas/user");

//CAE
router.get("/:mail&:pass", async (req, res) => {
    var flag = "false";
    const user = await users.findOne({'mail':req.params["mail"], 'pass':req.params["pass"]},(err) => {
        if (err) console.error(err)
        return;
    });

    if (user != null) {
        flag = "true";
        req.session["nombre"] = user["nombre"];
        req.session["mail"] = req.params["mail"];
    }
    
    res.send(flag);
});

module.exports = router;