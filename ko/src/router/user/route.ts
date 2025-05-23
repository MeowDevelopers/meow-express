import { Router } from "express";
import {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } from "../../modules/user/controllers/controller";

  const router = Router();
  
  router.get("/", getUsers);
  router.post("/", createUser);
  router.put("/:id", updateUser);
  router.delete("/:id", deleteUser);

export default router;
