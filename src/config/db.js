const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senacrs",
    database: "jogo"
});

db.connect((err) => {
    if (err) console.log("Banco não conectado");
    else console.log("Conectado ao MySQL!");
});

module.exports = db;