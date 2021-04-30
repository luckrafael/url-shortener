const express = require("express");
const UrlShortner = require("./models/index");

const app = express();

function generateCode() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

app.use(express.json());

app.post("/", async (req, res, next) => {
  try {
    const url = req.body.url;
    const code = generateCode();
    await UrlShortner.create({ url, urlCode: code });

    return res.send({ code });
  } catch (err) {
    return res.status(400).send({ error: "Failed to shorten url" });
  }
});

app.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

app.listen(3333);
