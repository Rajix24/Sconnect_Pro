const db = require("../config/db").getPool()

async function getAllActivites(){
    const query = `SELECT
        ac.id AS activity_id,
        ac.name AS activity_name,
        ac.base_price,
        ac.max_capacity,
        ac.age_category,
        ac.requires_recent_certificate,
        ac.day_of_week,
        ac.start_time,
        ac.end_time,
        ac.sub_zone,

        asco.name AS association_name,
        a.name AS facility_name,
        a.erp_capacity,
        a.divisible

        FROM activities AS ac

        JOIN associations AS asco
            ON ac.association_id = asco.id

        JOIN facilities AS a
            ON ac.facility_id = a.id;`
    const Activites = await db.query(query)
    return Activites;
}


module.exports = {
    getAllActivites
}