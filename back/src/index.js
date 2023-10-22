const server = require("./app");
const { conn } = require("./DB_connection");
const PORT = 3001;
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log("server raise in port " + PORT);
  });
});
