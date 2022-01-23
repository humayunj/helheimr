const express = require("express");
const path = require("path");
const app = express();

app.get("/token/:tokenId", async (req, res) => {
  return res.json({
    description: `Persephone/Kore (Περσεφόνη/ Κόρη) is a goddess, Demeter’s daughter by Zeus, wife of Hades, and queen of the underworld. Her most important myth is that of her abduction by Hades, her father’s brother. In Orphic literature, she is Dionysus’ mother by Zeus. Persephone/Kore is often worshipped in association with Demeter and Hades, but independent cults of the goddess are also attested. Persephone was adopted by the Romans as Proserpina. Image by https://www.instagram.com/subeeh22`,
    external_url: "https://helheimr.herokuapp.com/1",
    image: "https://helheimr.herokuapp.com/images/1.jpg",
    name: "Persephone",
    attributes: [
      {
        trait_type: "Parent",
        value: "Demeter",
      },
    ],
  });
});
app.get("/:tokenId", (req, res) => {
  res.send("<h1>Comming Soon!</h1>");
});

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => {
  console.log("Running on %d", PORT);
});
