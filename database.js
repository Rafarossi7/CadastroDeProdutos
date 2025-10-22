
const sqlite3 = require('sqlite3');
const { open } = require('sqlite'); 
const path = require('path');

async function startDatabase() {
   
    const db = await open({
        filename: path.join(__dirname, 'meubanco.db'),
        driver: sqlite3.Database
    });


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
