import { Hono } from "hono";

import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";

const app = new Hono();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", blogRouter);

export default app;
