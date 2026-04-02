const express = require("express");

const app = express();
const port = 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/catway", require("./Backend/Routes/catways.routes"));

app.listen(port, () => {
  console.log("Le serveur a redémarré au port " + port);
});
