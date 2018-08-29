const express = require("express");
const router = express.Router();

// @route   GET api/users/test
// @dsc     Tests the route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "OH HERRRO USERS" }));

module.exports = router;
