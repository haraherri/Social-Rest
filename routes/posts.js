const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const {
  createPostController,
  createPostWithImagesController,
  updatePostController,
  getPostsController,
  getUserPostsController,
  deletePostController,
  likePostController,
  dislikePostController,
} = require("../controllers/postController");

router.post("/create", createPostController);

//create post with images
router.post(
  "/create/:userId",
  upload.array("images", 5),
  createPostWithImagesController
);
router.put("/update/:postId", updatePostController);

router.get("/all/:userId", getPostsController);

router.get("/user/:userId", getUserPostsController);

router.delete("/delete/:postId", deletePostController);

router.post("/like/:postId", likePostController);

router.post("/dislike/:postId", dislikePostController);
module.exports = router;
