const router = require("express").Router();
const { postImagesController } = require("../controllers/upload.controller");
const upload = require("../middlewares/upload.middleware");

router.post("/upload", upload.single("image"), postImagesController);

module.exports = router;
