const express = require("express");
const server = express();

const routes = require("./routes/handler.js");

server.all("*", routes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`
        \nLink: http://localhost:${port}
        \nNode.js HTTP server is running on port ${port}`);
});
