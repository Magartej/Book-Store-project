const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
require("dotenv").config();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://book-store-frontend-git-main-magartejs-projects.vercel.app",
    ],
    credentials: true,
  })
);

// ✅ SESSION MIDDLEWARE (Insert Before Routes)
app.use(
  session({
    name: "sessionId",
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
      ttl: 60 * 60, // 1 hour
    }),
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 1000, // 1 hour
    },
  })
);

// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// test route
app.get("/test", (req, res) => {
  res.send("Test route working!");
});

// MongoDB connect + start server
async function startServer() {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

startServer();

module.exports = app;
