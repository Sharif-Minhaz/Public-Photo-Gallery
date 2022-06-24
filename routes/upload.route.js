const router = require("express").Router();
const { postImagesController, deleteImageGetController } = require("../controllers/upload.controller");
const upload = require("../middlewares/upload.middleware");

router.post("/upload", upload.single("image"), postImagesController);
router.get("/delete/:id", deleteImageGetController);

module.exports = router;
