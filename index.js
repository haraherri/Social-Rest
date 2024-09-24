const express = require("express");
const app = express();
const connection = require("./config/db");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");
const { errorHandler } = require("./middlewares/error");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");
const storyRoute = require("./routes/stories");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");
const verifyToken = require("./middlewares/verifyToken");
dotenv.config();

const PORT = process.env.PORT || 8888;
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/auth", authRoute);
app.use("/api/user", verifyToken, userRoute);
app.use("/api/post", verifyToken, postRoute);
app.use("/api/comment", verifyToken, commentRoute);
app.use("/api/story", verifyToken, storyRoute);
app.use("/api/conversation", verifyToken, conversationRoute);
app.use("/api/message", verifyToken, messageRoute);

(async () => {
  try {
    await connection();

    app.listen(PORT, () => {
      console.log(`Backend server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(">>> Error connect to DB: ", error);
  }
})();
