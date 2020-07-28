// import { AppController } from "./app";
// const app = new AppController().express;

import app from "./app";

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello Word");
});

// app.routes();
// app.use("/api/v1", require("./routes/routes"));

app.listen(PORT, (HOST) => {
  console.log("Servidor em execução na porta " + PORT);
});
