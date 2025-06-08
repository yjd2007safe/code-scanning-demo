const express = require("express");
const escapeHtml = require("escape-html");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  let sanitizedName = escapeHtml(req.query.name || "");
  let greet = site.replace("%%_USER_NAME%%", sanitizedName);
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});
