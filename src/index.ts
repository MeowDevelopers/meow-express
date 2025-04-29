import express from 'express'
import users from './router/user/route'

const app = express();

const PORT = 3000;


app.use('/users', users)

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
