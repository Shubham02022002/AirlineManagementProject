const express = require("express");

const { PORT } = require("./config/serverConfig.js");

const setupAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Sever started at ${PORT}`);
  });
};

setupAndStartServer();
