const { Pool } = require("pg");
require("dotenv").config();


class Database {
    constructor() {
        if (!Database.instance) {
            this.pool = new Pool({
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                host: process.env.DATABASE_HOST,
                port: process.env.DATABASE_PORT,
                database: process.env.DATABASE_NAME
            });

            Database.instance = this;
        }

        return Database.instance;
    }

    getPool() {
        return this.pool;
    }
}

module.exports = new Database();
