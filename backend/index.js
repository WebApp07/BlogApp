import express from "express";
import userRouter from "./routes/user.routes.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
import webhookRouter from "./controllers/webhook.controller.js";

const app = express();
app.use("/webhooks", webhookRouter);

app.use(express.json());

///app.get("/test", (req, res) => {
//res.status(200).send("It works!");
//});

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running!");
});
