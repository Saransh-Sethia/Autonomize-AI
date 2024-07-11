dotenv.config();
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./src/passport/github.auth.js";

import userRoutes from "./src/routes/userRoutes.js";
import exploreRoutes from "./src/routes/exploreRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";

import connectMongoDB from "./src/db/connectMongoDB.js";



const app = express();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(session({ secret: "keyboard cat", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
	connectMongoDB();
});