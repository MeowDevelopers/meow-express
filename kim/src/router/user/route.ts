// src/routes/user.route.ts
import { Router } from "express";
import { getAllUserList, createUser, deleteUser, updateUserNickName} from "../../modules/user/controller";

const router = Router();

router.get("/", getAllUserList);
router.post("/", createUser);
router.delete("/:id", deleteUser)
router.patch("/",updateUserNickName )

export default router;
