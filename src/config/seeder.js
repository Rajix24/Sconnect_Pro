const fs = require("node:fs/promises");
const path = require("node:path");

const pool = require("./db").getPool();


async function seeder() {
    try {
        const filePath = path.join(__dirname,"../../Database/seed.sql");
        console.log(filePath)
        const sql = await fs.readFile(filePath, "utf8");
        await pool.query(sql);
        console.log("seeders initialized successfully");
    } catch (error) {
        console.error("seeders initialization failed:");
        console.error(error);
    }
}

seeder();