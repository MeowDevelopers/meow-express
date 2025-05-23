import express from "express";
import users from "./router/user/route";
import typeScriptExample from "./router/type-script-example/route";

const app = express();
const PORT = 3000;

app.use("/users", users);
app.use("/type-script-example", typeScriptExample);

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
