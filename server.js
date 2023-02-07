require("dotenv").config();

const cors = require("cors");
const swaggerDocs = require("./swagger");

const bodyParser = require("body-parser");

let port = process.env.APP_PORT || "8000";
let host = process.env.APP_HOST || "localhost";

var express = require("express");
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRouter = require("./routes/user");

app.use('/', userRouter);

swaggerDocs.swagger(app);

app.listen(port, () => {
  console.log(`listening on http://${host}:${port}`);
});

