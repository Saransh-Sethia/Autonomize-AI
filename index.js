
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./backend/passport/github.auth.js";

import userRoutes from "./backend/routes/userRoutes.js";
import exploreRoutes from "./backend/routes/exploreRoutes.js";
import authRoutes from "./backend/routes/authRoutes.js";

import connectMongoDB from "./backend/db/connectMongoDB.js";


dotenv.config({path: "./"});
const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve("./");
console.log("__dirname",__dirname);

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/build")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});
app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
	connectMongoDB();
});