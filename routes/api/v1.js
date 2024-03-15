const app = require("express")();

app.use("/users", require("./users"));

module.exports = app;