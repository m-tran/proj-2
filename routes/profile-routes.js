const express = require("express");
const router = express.Router();
const {
  getProfile,
  createProfile,
  deleteProfile,
} = require("../controllers/profile-controller");

router.post("/profile/new", createProfile);

router.get("/profile", getProfile);

router.get("/profile", deleteProfile);

module.exports = router;