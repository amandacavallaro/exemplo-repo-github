const express = require("express");
const app = express();
const port = 3001;

app.get("/", (res) => {
  res.send("Exemplo de aplicação!");
});

app.listen(port, () => {
  console.log(`App está escutando na porta ${port}`);
});
