const fs = require("node:fs/promises");
const path = require("node:path");

const pool = require("./db").getPool();


async function migrate() {
    try {
        const filePath = path.join(__dirname,"../../Database/shema.sql");
        // console.log(filePath)
        const sql = await fs.readFile(filePath, "utf8");

        await pool.query(sql);
        
        console.log("Database initialized successfully");
        return ;
    } catch (error) {
        console.error("Database initialization failed:");
        console.error(error);
        return
    }
}

migrate();