import express from "express";
import "dotenv/config";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import morgan from "morgan";

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());

// ⭐ FIXED CORS (flexible — localhost + vercel safe)
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(morgan("dev"));

// ================= ROUTES =================
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/cart", cartRoute);
app.use("/api/v1/orders", orderRoute);

// ================= SERVER =================
const port = process.env.PORT || 3000;

app.listen(port, () => {
  connectDB();
  console.log(`app is running at port:${port}`);
});
