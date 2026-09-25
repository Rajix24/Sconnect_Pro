const db = require("../config/db").getPool();

async function getAllFacilities() {
    const query = `
        SELECT
            f.id,
            f.name,
            f.erp_capacity,
            f.is_divisible,
            f.parent_facility_id,
            f.association_id,
            a.name AS association_name
        FROM facilities AS f
        LEFT JOIN associations AS a ON a.id = f.association_id
        ORDER BY f.name ASC;
    `;

    const result = await db.query(query);
    return result.rows;
}

async function getFacilityFormOptions() {
    const [associations, parentFacilities] = await Promise.all([
        db.query("SELECT id, name FROM associations ORDER BY name ASC"),
        db.query("SELECT id, name FROM facilities ORDER BY name ASC")
    ]);

    return {
        associations: associations.rows,
        parentFacilities: parentFacilities.rows
    };
}

async function saveFacility({ name, erp_capacity, is_divisible, parent_facility_id, association_id }) {
    const query = `
        INSERT INTO facilities (name, erp_capacity, is_divisible, parent_facility_id, association_id)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;

    const result = await db.query(query, [
        name,
        erp_capacity,
        is_divisible,
        parent_facility_id || null,
        association_id
    ]);

    return result.rows[0];
}

module.exports = {
    getAllFacilities,
    getFacilityFormOptions,
    saveFacility
};
