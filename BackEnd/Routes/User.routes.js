import express from "express";
import { userDelete, userlist, userLogin, userRegister } from "../Controllers/User.controller.js";
const Userrouter = express.Router();

Userrouter.post("/register" , (req, res) => userRegister(req, res));
Userrouter.post("/login", (req, res) => userLogin(req, res));
Userrouter.get("/userlist", (req, res) => userlist(req, res));
Userrouter.delete("/delete", (req, res) => userDelete(req, res))

export default Userrouter;