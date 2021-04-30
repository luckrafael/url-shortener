const express = require("express");
const UrlShortner = require("./models/index");
const cors = require("cors");

const app = express();

app.use(cors());

function generateCode() {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

const regExUrlValidation = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/gi;

app.use(express.json());

app.post("/shortner", async (req, res, next) => {
  try {
    const url = req.body.url;
    if (url.length <= 0 || !regExUrlValidation.exec(url)) {
      return res.status(400).send({ error: "Precisa de um URL valida" });
    }
    const code = generateCode();
    await UrlShortner.create({ url, urlCode: code });

    return res.send({ code });
  } catch (err) {
    return res.status(400).send({ error: "Failed to shorten url" });
  }
});

app.get("/:urlCode", async (req, res) => {
  try {
    const urlCode = req.params.urlCode;
    const urlFinal = await UrlShortner.findOne({ urlCode });
    console.log(urlFinal);

    return res.status(200).redirect(urlFinal.url);
  } catch (err) {
    return res.status(400).send({ error: "Failed to shorten url" });
  }
});

app.listen(process.env.PORT || 3333);
