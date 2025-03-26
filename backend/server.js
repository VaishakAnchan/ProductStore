import express, { json } from "express";
import { connectDB } from "./config/Db.js";
import productRoutes from "./routes/Product.route.js";
import path from "path";
const PORT = process.env.PORT;
const app = express();

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server is live at  ${PORT} `);
});
