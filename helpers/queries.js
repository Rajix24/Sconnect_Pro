const db = require("../src/config/db.js").getPool()

async function getAllFromTable(TableName){
    const query = `SELECT * FROM ${TableName};`
    const data = await db.query(query)
    return data;
}
async function getOneById(table, id ){
    const query = `SELECT * FROM ${TableName} where id = ${id}`
    const data = await db.query(query)
    return data;
}