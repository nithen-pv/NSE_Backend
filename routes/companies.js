const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
    db.query("SELECT * FROM tbcompany", function (err, result, fields) {
        if (err) throw err;
        res.status(200).json({message:"success",data:result});
    })
});


router.post("/cmpname", (req, res) => {
    db.query("SELECT * FROM tbcompany WHERE Name LIKE ?", req.body.Name+"%", function (err, result, fields) {
        if (err) throw err;
        res.status(200).json({message:"success",data:result});
    })
});


module.exports = router;
