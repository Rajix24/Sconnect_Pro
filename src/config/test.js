const database = require("./db");

async function testDatabase() {
    try {
        const pool = database.getPool();
        const result = await pool.query("SELECT NOW()");

        console.log("✔ Database connected!");
        console.log("Database time:", result.rows[0].now);
    } catch (error) {
        console.error("❌ Database connection failed!");
        console.error(error.message);
    }
}
testDatabase();
module.exports = {
    testDatabase    
}