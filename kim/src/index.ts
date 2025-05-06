(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

import express from "express";
import router from "./router/user/route";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", router);

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
