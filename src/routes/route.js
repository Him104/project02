const express = require('express');
const router = express.Router();
const College = require("../controllers/collegeController")
const Intern = require("../controllers/inernController")


router.post("/functionup/colleges", College.CollegeController)

router.post("/functionup/interns", Intern.InternController)

router.get("/functionup/collegeDetails", Intern.InternDetails);




module.exports = router;