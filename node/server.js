const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const express = require("express");

const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/pi.listingslab.io/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/pi.listingslab.io/cert.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/pi.listingslab.io/chain.pem",
  "utf8"
);

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca
};

const app = express();
app.use(express.static(path.join(__dirname + "/build")));

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

http.all('*', function (req, res) {
  return res.redirect("https://" + req.headers["host"] + req.url);
});

https.all('*', function (req, res) {
  return res.send("Hello, World!");
});

httpServer.listen(1337, () => {
  console.log("HTTP Server running on port 1337");
});

httpsServer.listen(443, () => {
  console.log("HTTPS Server running on port 443");
});

