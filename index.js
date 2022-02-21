const express = require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(8080, () => console.log("server listening on port 8080"));
