// Import correto para sqlite3 moderno
const sqlite3 = require('sqlite3');
const { open } = require('sqlite'); // sqlite fornece wrapper Promises
const path = require('path');

async function startDatabase() {
    // Abre ou cria o banco
    const db = await open({
        filename: path.join(__dirname, 'meubanco.db'),
        driver: sqlite3.Database
    });

    // Cria tabela produtos se não existir
    await db.exec(`
        CREATE TABLE IF NOT EXISTS produtos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT,
            valor REAL,
            descricao TEXT
        )
    `);

    return db;
}

module.exports = startDatabase;
