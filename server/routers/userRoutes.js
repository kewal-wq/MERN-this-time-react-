import express from "express";
import {getUsers, createUser} from "../controllers/user.js";

const router = express.Router();

router.get('/', getUsers);

router.post('/new', createUser);

export default router;