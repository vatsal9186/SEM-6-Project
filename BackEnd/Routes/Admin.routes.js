import express from "express"
import {adminlogin, adminRegister} from "../Controllers/Admin.controller.js"
const Adminrouter = express.Router();

Adminrouter.post("/adminlogin", (req, res) => adminlogin(req, res));
Adminrouter.post("/adminregister", (req, res) => adminRegister(req, res));

export default Adminrouter;