import express from "express";
import users from "./router/user/route";
import filterUsers from "./router/user/filterRoute";
import converter from "./router/user/converterRoute";
import bodyParser from "body-parser";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use('/users', users);
app.use('/filter', filterUsers);
app.use('/converter', converter);
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
