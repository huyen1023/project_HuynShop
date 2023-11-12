const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./database/index");
const route = require("./routes/index");
const swaggerDocs = require("./swagger-ui-dist/swagger");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded())
app.use(express.json()); // request dang json

route(app);

app.listen(process.env.PORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
  // swaggerDocs(app, process.env.PORT)
});
