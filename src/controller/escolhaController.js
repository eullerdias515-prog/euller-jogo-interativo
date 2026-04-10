const db = require("../config/db");

exports.salvar = (req, res) => {
const { escolha, etapa } = req.body;

db.query(
"INSERT INTO escolhas (acao, etapa) VALUES (?, ?)",
[escolha, etapa],
(err) => {
if (err) return res.send("Erro");
res.send("OK");
}
);
};

exports.listar = (req, res) => {
db.query("SELECT * FROM escolhas", (err, result) => {
if (err) return res.send("Erro");
res.json(result);
});
};