import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", () => {
      console.error("UTILS > INDEX > Error loading in express");
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server listening on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("UTILS > INDEX > Error connecting database", error);
  });
  