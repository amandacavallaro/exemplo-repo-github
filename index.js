const express = require("express");
const app = express();
const port = 3001;

// TODO - aqui adicionei uma nota TODO, ou seja algo que ainda está para ser feito
app.get("/", (res) => {
  res.send("Exemplo de aplicação!");
  console.log('Aqui temos uma linha com um console.log que poderia ser retirada');
});

app.listen(port, () => {
  console.log(`App está escutando na porta ${port}`);
});
