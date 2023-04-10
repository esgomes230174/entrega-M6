import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware";

import announcementRoutes from "./routes/announcement.routes";
import loginRoutes from "./routes/login.routes";
import userRoutes from "./routes/user.routes";
import addressRoutes from "./routes/address.routes";
import commentsRoutes from "./routes/comments.routes";

const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/announcement", announcementRoutes);
app.use("/address", addressRoutes);
app.use("/comments", commentsRoutes);

app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("Server running");
});
