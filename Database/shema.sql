CREATE TABLE facilities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    erp_capacity INTEGER NOT NULL CHECK (erp_capacity > 0),
    divisible BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE associations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL UNIQUE
);


CREATE TABLE families (
    id SERIAL PRIMARY KEY,
    quotient_familial NUMERIC(10,2) NOT NULL CHECK (quotient_familial >= 0)
);


CREATE TYPE age_category_enum AS ENUM (
    'baby_sport',
    'poussin',
    'benjamin',
    'minime',
    'cadet',
    'junior',
    'senior',
    'veteran',
    'tous_publics'
);


CREATE TABLE activities (
    id SERIAL PRIMARY KEY,

    association_id INTEGER NOT NULL
        REFERENCES associations(id)
        ON DELETE RESTRICT,

    facility_id INTEGER NOT NULL
        REFERENCES facilities(id)
        ON DELETE RESTRICT,

    name VARCHAR(150) NOT NULL,

    base_price NUMERIC(10,2) NOT NULL
        CHECK (base_price >= 0),

    max_capacity INTEGER NOT NULL
        CHECK (max_capacity > 0),

    age_category age_category_enum NOT NULL,

    requires_recent_certificate BOOLEAN NOT NULL DEFAULT FALSE,

    day_of_week SMALLINT NOT NULL
        CHECK (day_of_week BETWEEN 0 AND 6),

    start_time TIME NOT NULL,

    end_time TIME NOT NULL
        CHECK (end_time > start_time),

    sub_zone VARCHAR(50)
);


CREATE TABLE members (
    id SERIAL PRIMARY KEY,

    family_id INTEGER NOT NULL
        REFERENCES families(id)
        ON DELETE CASCADE,

    first_name VARCHAR(100) NOT NULL,

    last_name VARCHAR(100) NOT NULL,

    birth_date DATE NOT NULL,

    is_resident BOOLEAN NOT NULL DEFAULT FALSE,

    medical_certificate_date DATE,

    medical_status VARCHAR(30) NOT NULL DEFAULT 'compliant'
        CHECK (
            medical_status IN (
                'compliant',
                'medical_non_compliant'
            )
        ),

    pass_sport_code VARCHAR(20)
);


CREATE TABLE registrations (
    id SERIAL PRIMARY KEY,

    member_id INTEGER NOT NULL
        REFERENCES members(id)
        ON DELETE CASCADE,

    activity_id INTEGER NOT NULL
        REFERENCES activities(id)
        ON DELETE RESTRICT,

    final_price NUMERIC(10,2) NOT NULL
        CHECK (final_price >= 15.00),

    payment_plan VARCHAR(15) NOT NULL DEFAULT 'full'
        CHECK (
            payment_plan IN (
                'full',
                'installments'
            )
        ),

    status VARCHAR(20) NOT NULL DEFAULT 'confirmed'
        CHECK (
            status IN (
                'confirmed',
                'cancelled'
            )
        ),

    registered_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    UNIQUE (member_id, activity_id)
);


CREATE TABLE payments (
    id SERIAL PRIMARY KEY,

    registration_id INTEGER NOT NULL
        REFERENCES registrations(id)
        ON DELETE CASCADE,

    installment_number SMALLINT NOT NULL
        CHECK (installment_number BETWEEN 1 AND 3),

    amount NUMERIC(10,2) NOT NULL
        CHECK (amount >= 0),

    due_date DATE NOT NULL,

    paid_at TIMESTAMPTZ,

    status VARCHAR(20) NOT NULL DEFAULT 'pending'
        CHECK (
            status IN (
                'pending',
                'paid',
                'failed'
            )
        ),

    UNIQUE (registration_id, installment_number)
);


CREATE TABLE waiting_list (
    id SERIAL PRIMARY KEY,

    activity_id INTEGER NOT NULL
        REFERENCES activities(id)
        ON DELETE CASCADE,

    member_id INTEGER NOT NULL
        REFERENCES members(id)
        ON DELETE CASCADE,

    priority_score INTEGER NOT NULL DEFAULT 0,

    status VARCHAR(20) NOT NULL DEFAULT 'waiting'
        CHECK (
            status IN (
                'waiting',
                'promoted_pending',
                'expired',
                'confirmed'
            )
        ),

    deadline_confirmation TIMESTAMPTZ,

    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),

    UNIQUE (member_id, activity_id)
);