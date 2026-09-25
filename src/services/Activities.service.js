const db = require("../config/db").getPool()

async function getAllActivites() {
    const query = `
        SELECT
            ac.id AS activity_id,
            ac.title AS activity_name,
            ac.base_price AS base_price,
            ac.max_capacity AS max_capacity,
            ac.activity_date AS activity_date,
            ac.start_time AS start_time,
            ac.end_time AS end_time,

            asso.name AS association_name,

            f.name AS facility_name,
            f.erp_capacity AS erp_capacity,
            f.is_divisible AS divisible

        FROM activities AS ac

        JOIN associations AS asso
            ON ac.association_id = asso.id

        JOIN facilities AS f
            ON ac.facility_id = f.id;
    `;

    const activities = await db.query(query);

    return activities.rows;
}

async function getActivityById(activityId) {
    const query = `
        SELECT
            ac.id AS activity_id,
            ac.title AS activity_name,
            ac.base_price AS base_price,
            ac.max_capacity AS max_capacity,
            ac.activity_date AS activity_date,
            ac.start_time AS start_time,
            ac.end_time AS end_time,

            asso.name AS association_name,

            f.name AS facility_name,
            f.erp_capacity AS erp_capacity,
            f.is_divisible AS divisible

        FROM activities AS ac

        JOIN associations AS asso
            ON ac.association_id = asso.id

        JOIN facilities AS f
            ON ac.facility_id = f.id

        WHERE ac.id = $1;
    `;

    const result = await db.query(query, [activityId]);

    return result.rows[0];
}


async function getActivitiesByAssociationId(associationId) {
    const query = `
        SELECT
            ac.id AS activity_id,
            ac.title AS activity_name,
            ac.base_price AS base_price,
            ac.max_capacity AS max_capacity,
            ac.activity_date AS activity_date,
            ac.start_time AS start_time,
            ac.end_time AS end_time,

            asso.name AS association_name,

            f.name AS facility_name,
            f.erp_capacity AS erp_capacity,
            f.is_divisible AS divisible

        FROM activities AS ac

        JOIN associations AS asso
            ON ac.association_id = asso.id

        JOIN facilities AS f
            ON ac.facility_id = f.id

        WHERE ac.association_id = $1;
    `;

    const result = await db.query(query, [associationId]);

    return result.rows;
}
module.exports = {
    getAllActivites,
    getActivityById,
    getActivitiesByAssociationId
}