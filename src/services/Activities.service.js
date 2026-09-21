const db = require("../config/db").getPool()

async function getAllActivites(){
    const query = `
            SELECT
                ac.id_activities AS activity_id,
                ac.name_activities AS activity_name,
                ac.base_price_activities AS base_price,
                ac.max_capacity_activities AS max_capacity,
                ac.age_category_activities AS age_category,
                ac.requires_recent_certificate_activities AS requires_recent_certificate,
                ac.day_of_week_activities AS day_of_week,
                ac.start_time_activities AS start_time,
                ac.end_time_activities AS end_time,
                ac.sub_zone_activities AS sub_zone,

                asso.name_associations AS association_name,

                f.name_facilities AS facility_name,
                f.erp_capacity_facilities AS erp_capacity,
                f.divisible_facilities AS divisible

            FROM activities AS ac

            JOIN associations AS asso
                ON ac.association_id_activities = asso.id_associations

            JOIN facilities AS f
                ON ac.facility_id_activities = f.id_facilities;
            `
    const Activities = await db.query(query)
    return Activities;
}

async function getActivityById(activityId) {
    const query = `
        SELECT
            ac.id_activities AS activity_id,
            ac.name_activities AS activity_name,
            ac.base_price_activities AS base_price,
            ac.max_capacity_activities AS max_capacity,
            ac.age_category_activities AS age_category,
            ac.requires_recent_certificate_activities AS requires_recent_certificate,
            ac.day_of_week_activities AS day_of_week,
            ac.start_time_activities AS start_time,
            ac.end_time_activities AS end_time,
            ac.sub_zone_activities AS sub_zone,

            asso.name_associations AS association_name,

            f.name_facilities AS facility_name,
            f.erp_capacity_facilities AS erp_capacity,
            f.divisible_facilities AS divisible

        FROM activities AS ac

        JOIN associations AS asso
            ON ac.association_id_activities = asso.id_associations

        JOIN facilities AS f
            ON ac.facility_id_activities = f.id_facilities

        WHERE ac.id_activities = $1;
    `;

    const result = await db.query(query, [activityId]);
    return result.rows[0];
}


async function getActivitiesByAssociationId(associationId) {
    const query = `
        SELECT
            ac.id_activities AS activity_id,
            ac.name_activities AS activity_name,
            ac.base_price_activities AS base_price,
            ac.max_capacity_activities AS max_capacity,
            ac.age_category_activities AS age_category,
            ac.requires_recent_certificate_activities AS requires_recent_certificate,
            ac.day_of_week_activities AS day_of_week,
            ac.start_time_activities AS start_time,
            ac.end_time_activities AS end_time,
            ac.sub_zone_activities AS sub_zone,

            asso.name_associations AS association_name,

            f.name_facilities AS facility_name,
            f.erp_capacity_facilities AS erp_capacity,
            f.divisible_facilities AS divisible

        FROM activities AS ac

        JOIN associations AS asso
            ON ac.association_id_activities = asso.id_associations

        JOIN facilities AS f
            ON ac.facility_id_activities = f.id_facilities

        WHERE ac.association_id_activities = $1;
    `;

    const result = await db.query(query, [associationId]);
    return result.rows;
}

module.exports = {
    getAllActivites,
    getActivityById,
    getActivitiesByAssociationId
}