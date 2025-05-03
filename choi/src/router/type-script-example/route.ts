import { Router } from "express";
import {
  filterAndPrintUserData,
  moneyConvert,
} from "../../modules/type-script-example/controller";

const router = Router();

router.get("/filter", filterAndPrintUserData);
router.get("/money-convert", moneyConvert);

export default router;
