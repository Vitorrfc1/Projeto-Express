require("dotenv").config();

const express = require("express");
const routes = require("./routes");

const app = express(); // PRIMEIRO cria o app

console.log("Estou no server correto");

app.use(express.json());

// rota de teste
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.use(routes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});