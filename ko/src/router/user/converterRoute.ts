import { Router } from "express";
import { converter } from "../../modules/user/controllers/converterController";

  const router = Router();
  
  router.get("/", converter);

export default router;
