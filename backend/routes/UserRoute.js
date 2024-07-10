import express from "express";
import { getUsers, getUsersById, createUser, updateUser, deleteUser } from "../contrellers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users', deleteUser);

export default router;