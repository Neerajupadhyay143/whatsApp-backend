import { Router } from "express";
import { adduser, getUsers } from "../controllers/user-controller.js";
const route = Router()

route.post('/add', adduser)
route.get('/users', getUsers)

export default route;