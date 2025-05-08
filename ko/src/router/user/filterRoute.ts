import { Router } from "express";
import { filterUser } from "../../modules/user/controllers/filterController";

  const router = Router();
  
  router.get("/", filterUser);

export default router;
