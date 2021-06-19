const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const PORT = process.env.PORT || 4000;

app.use(
  express.json({
    extended: false,
  })
);
require("./db");

app.use(bodyParser.json());
app.use(cors());

const companies = require("./routes/companies");

app.use("/api/companies", companies);

app.listen(PORT, () => {
  console.log(`Server is up and running on port :${PORT}`);
});
