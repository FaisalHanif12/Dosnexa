const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Database connection
require("./db/conn");

// Router imports
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);

// Serve static files from React app
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all handler for any request that doesn't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
