import express from "express";
import { userLogin, userRegister } from "../Controllers/User.controller.js";
const Userrouter = express.Router();

Userrouter.post("/register" , (req, res) => userRegister(req, res));
Userrouter.post("/login", (req, res) => userLogin(req, res));

export default Userrouter;

