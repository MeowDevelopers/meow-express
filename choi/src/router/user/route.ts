// src/routes/user.route.ts
import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  removeUser,
  patchUser,
} from "../../modules/user/controller";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.delete("/", removeUser);
router.patch("/", patchUser);

export default router;
