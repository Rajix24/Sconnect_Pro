const db = require('../config/db.js').getPool()
async function getAllAssociation() {

    const query = `
        SELECT
            asso.id AS association_id,
            asso.name AS association_name,
            asso.contact_email,
            asso.description,
            asso.phone,
            asso.base_price,
            asso.siren_number,
            asso.created_at
        FROM associations AS asso;
    `;

    const Associations = await db.query(query);

    return Associations.rows;
}


async function getAssociationById(id) {

    const query = `
        SELECT
            asso.id AS association_id,
            asso.name AS association_name,
            asso.contact_email,
            asso.description,
            asso.phone,
            asso.base_price,
            asso.siren_number,
            asso.created_at
        FROM associations AS asso
        WHERE asso.id = $1;
    `;

    const Association = await db.query(query, [id]);

    return Association.rows[0];
}

async function SaveAssociation(req, res, params) {
    console.log(req.body)
    const { name, contact_email, description, phone, base_price, siren_number } = req.body;
    const id = params.id;

    const query = `
        UPDATE associations
        SET
            name = $1,
            contact_email = $2,
            description = $3,
            phone = $4,
            base_price = $5,
            siren_number = $6
        WHERE id = $7
    `;

    const values = [
        name,
        contact_email,
        description,
        phone,
        base_price,
        siren_number,
        id
    ];
    await db.query(query, values);
}



async function CreateAssociations(req, res) {
    const { name, contact_email, description, phone, base_price, siren_number } = req.body;
     
    console.log(name ,contact_email,description )
    const query = `
    INSERT INTO associations ( name, contact_email, description, phone, base_price, siren_number ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`
    console.log(query)
    const result = await db.query(query, [name, contact_email, description, phone, base_price, siren_number])
    return result.rows[0]
}


async function DeleteAssociation(req, res, params) {
    try {
        const query = "DELETE FROM associations WHERE id = $1";
        const values = [params.id];
        console.log(params.id)
        const result = await db.query(query, values);
        return
    } catch (error) {
        console.log(error);
        return {
            message: "Failed to delete association",
            error: error.message
        };
    }
}

module.exports = {
    getAllAssociation,
    getAssociationById,
    CreateAssociations,
    DeleteAssociation,
    SaveAssociation
}  
