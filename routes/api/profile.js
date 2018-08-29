const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @dsc     Tests the route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "OH HERRRO PROFILE" }));

module.exports = router;
