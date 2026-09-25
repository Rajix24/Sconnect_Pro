-- =========================================================
-- SEED DATA - Sconnect Pro
-- =========================================================

-- =========================================================
-- 1. FAMILIES
-- =========================================================

INSERT INTO families (
    id,
    family_name,
    quotient_familial,
    address
) VALUES
    (1, 'Famille Raji', 450.00, 'Marrakech'),
    (2, 'Famille Alaoui', 750.00, 'Marrakech'),
    (3, 'Famille Benali', 1100.00, 'Marrakech'),
    (4, 'Famille Idrissi', 580.00, 'Safi'),
    (5, 'Famille Amrani', 900.00, 'Essaouira');


-- =========================================================
-- 2. MEMBERS
-- =========================================================

INSERT INTO members (
    is_resident,
    family_id,
    first_name,
    last_name,
    birth_date,
    medical_certificate_date,
    pass_sport_code
) VALUES
    (
        TRUE,
        1,
        'Younes',
        'Raji',
        '2005-05-12',
        '2026-01-15',
        'PASS-SPORT-001'
    ),
    (
        TRUE,
        1,
        'Adam',
        'Raji',
        '2012-08-20',
        '2026-02-10',
        NULL
    ),
    (
        TRUE,
        2,
        'Sara',
        'Alaoui',
        '2010-03-15',
        '2025-12-20',
        NULL
    ),
    (
        TRUE,
        2,
        'Omar',
        'Alaoui',
        '2015-11-02',
        '2026-01-05',
        'PASS-SPORT-002'
    ),
    (
        FALSE,
        3,
        'Lucas',
        'Martin',
        '2008-07-22',
        '2026-02-01',
        NULL
    ),
    (
        TRUE,
        4,
        'Aya',
        'Idrissi',
        '2018-04-10',
        '2026-03-01',
        NULL
    ),
    (
        TRUE,
        5,
        'Mehdi',
        'Amrani',
        '1999-09-18',
        '2026-01-25',
        NULL
    );


-- =========================================================
-- 3. ASSOCIATIONS
-- =========================================================

INSERT INTO associations (
    name,
    contact_email,
    description,
    phone,
    base_price,
    siren_number
) VALUES
    (
        'Marrakech Football Club',
        'contact@mfc.ma',
        'Association sportive spécialisée dans le football.',
        '0524000001',
        300.00,
        '12345678901234'
    ),
    (
        'Atlas Natation',
        'contact@atlas-natation.ma',
        'Association dédiée à la natation et aux activités aquatiques.',
        '0524000002',
        350.00,
        '22345678901234'
    ),
    (
        'Marrakech Basket Association',
        'contact@mba.ma',
        'Club de basketball pour enfants et adultes.',
        '0524000003',
        280.00,
        '32345678901234'
    ),
    (
        'Atlas Arts Martiaux',
        'contact@atlas-martiaux.ma',
        'Association proposant des activités de boxe et arts martiaux.',
        '0524000004',
        320.00,
        '42345678901234'
    );


-- =========================================================
-- 4. FACILITIES
-- =========================================================

INSERT INTO facilities (
    name,
    erp_capacity,
    is_divisible,
    parent_facility_id,
    association_id
) VALUES
    (
        'Stade Municipal Marrakech',
        500,
        TRUE,
        NULL,
        1
    ),
    (
        'Terrain Football A',
        100,
        FALSE,
        1,
        1
    ),
    (
        'Piscine Municipale',
        150,
        FALSE,
        NULL,
        2
    ),
    (
        'Salle Basket Principale',
        200,
        TRUE,
        NULL,
        3
    ),
    (
        'Salle Arts Martiaux',
        80,
        FALSE,
        NULL,
        4
    );


-- =========================================================
-- 5. ACTIVITIES
-- =========================================================

INSERT INTO activities (
    association_id,
    facility_id,
    title,
    base_price,
    max_capacity,
    activity_date,
    start_time,
    end_time
) VALUES
    (
        1,
        2,
        'Football U15',
        300.00,
        30,
        '2026-10-05',
        '17:00',
        '18:30'
    ),
    (
        1,
        2,
        'Football Adultes',
        350.00,
        25,
        '2026-10-06',
        '18:00',
        '20:00'
    ),
    (
        2,
        3,
        'Natation Enfants',
        350.00,
        20,
        '2026-10-07',
        '16:00',
        '17:00'
    ),
    (
        2,
        3,
        'Natation Adultes',
        400.00,
        30,
        '2026-10-08',
        '18:00',
        '19:30'
    ),
    (
        3,
        4,
        'Basketball Jeunes',
        280.00,
        20,
        '2026-10-09',
        '16:30',
        '18:00'
    ),
    (
        4,
        5,
        'Boxe Débutants',
        320.00,
        15,
        '2026-10-10',
        '10:00',
        '11:30'
    );


-- =========================================================
-- 6. REGISTRATIONS
-- =========================================================

INSERT INTO registrations (
    member_id,
    activity_id,
    base_price,
    final_price,
    status
) VALUES
    (
        1,
        1,
        300.00,
        250.00,
        'confirmed'
    ),
    (
        2,
        1,
        300.00,
        255.00,
        'confirmed'
    ),
    (
        3,
        3,
        350.00,
        350.00,
        'confirmed'
    ),
    (
        4,
        3,
        350.00,
        300.00,
        'confirmed'
    ),
    (
        5,
        2,
        350.00,
        385.00,
        'confirmed'
    ),
    (
        6,
        5,
        280.00,
        238.00,
        'confirmed'
    ),
    (
        7,
        6,
        320.00,
        320.00,
        'cancelled'
    );


-- =========================================================
-- 7. WAITING LIST
-- =========================================================

INSERT INTO waiting_list (
    activity_id,
    member_id,
    is_resident,
    family_id,
    first_name,
    last_name,
    birth_date,
    status,
    medical_certificate_date,
    pass_sport_code,
    priority_score
) VALUES
    (
        1,
        3,
        TRUE,
        2,
        'Sara',
        'Alaoui',
        '2010-03-15',
        'waiting',
        '2025-12-20',
        NULL,
        100
    ),
    (
        1,
        4,
        TRUE,
        2,
        'Omar',
        'Alaoui',
        '2015-11-02',
        'waiting',
        '2026-01-05',
        'PASS-SPORT-002',
        120
    ),
    (
        2,
        6,
        TRUE,
        4,
        'Aya',
        'Idrissi',
        '2018-04-10',
        'promoted_pending',
        '2026-03-01',
        NULL,
        110
    ),
    (
        6,
        5,
        FALSE,
        3,
        'Lucas',
        'Martin',
        '2008-07-22',
        'waiting',
        '2026-02-01',
        NULL,
        50
    );


-- =========================================================
-- 8. RESET SEQUENCES
-- =========================================================

SELECT setval(
    pg_get_serial_sequence('members', 'id'),
    COALESCE((SELECT MAX(id) FROM members), 1),
    true
);

SELECT setval(
    pg_get_serial_sequence('associations', 'id'),
    COALESCE((SELECT MAX(id) FROM associations), 1),
    true
);

SELECT setval(
    pg_get_serial_sequence('facilities', 'id'),
    COALESCE((SELECT MAX(id) FROM facilities), 1),
    true
);

SELECT setval(
    pg_get_serial_sequence('activities', 'id'),
    COALESCE((SELECT MAX(id) FROM activities), 1),
    true
);

SELECT setval(
    pg_get_serial_sequence('registrations', 'id'),
    COALESCE((SELECT MAX(id) FROM registrations), 1),
    true
);

SELECT setval(
    pg_get_serial_sequence('waiting_list', 'id'),
    COALESCE((SELECT MAX(id) FROM waiting_list), 1),
    true
);