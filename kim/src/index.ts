(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

import express from "express";
import { getUSerController } from "./modules/user/controllers/controller"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", getUSerController);

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
