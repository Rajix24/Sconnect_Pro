CREATE TABLE facilities (
    id_facilities SERIAL PRIMARY KEY,
    name_facilities VARCHAR(150) NOT NULL,
    erp_capacity_facilities INTEGER NOT NULL CHECK (erp_capacity_facilities > 0),
    divisible_facilities BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE associations (
    id_associations SERIAL PRIMARY KEY,
    name_associations VARCHAR(150) NOT NULL UNIQUE
);


CREATE TABLE families (
    id_families SERIAL PRIMARY KEY,
    quotient_familial_families NUMERIC(10,2) NOT NULL
        CHECK (quotient_familial_families >= 0)
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
    id_activities SERIAL PRIMARY KEY,

    association_id_activities INTEGER NOT NULL
        REFERENCES associations(id_associations)
        ON DELETE RESTRICT,

    facility_id_activities INTEGER NOT NULL
        REFERENCES facilities(id_facilities)
        ON DELETE RESTRICT,

    name_activities VARCHAR(150) NOT NULL,

    base_price_activities NUMERIC(10,2) NOT NULL
        CHECK (base_price_activities >= 0),

    max_capacity_activities INTEGER NOT NULL
        CHECK (max_capacity_activities > 0),

    age_category_activities age_category_enum NOT NULL,

    requires_recent_certificate_activities BOOLEAN NOT NULL DEFAULT FALSE,

    day_of_week_activities SMALLINT NOT NULL
        CHECK (day_of_week_activities BETWEEN 0 AND 6),

    start_time_activities TIME NOT NULL,

    end_time_activities TIME NOT NULL
        CHECK (end_time_activities > start_time_activities),

    sub_zone_activities VARCHAR(50)
);


CREATE TABLE members (
    id_members SERIAL PRIMARY KEY,

    family_id_members INTEGER NOT NULL
        REFERENCES families(id_families)
        ON DELETE CASCADE,

    first_name_members VARCHAR(100) NOT NULL,

    last_name_members VARCHAR(100) NOT NULL,

    birth_date_members DATE NOT NULL,

    is_resident_members BOOLEAN NOT NULL DEFAULT FALSE,

    medical_certificate_date_members DATE,

    medical_status_members VARCHAR(30) NOT NULL DEFAULT 'compliant'
        CHECK (
            medical_status_members IN (
                'compliant',
                'medical_non_compliant'
            )
        ),

    pass_sport_code_members VARCHAR(20)
);


CREATE TABLE registrations (
    id_registrations SERIAL PRIMARY KEY,

    member_id_registrations INTEGER NOT NULL
        REFERENCES members(id_members)
        ON DELETE CASCADE,

    activity_id_registrations INTEGER NOT NULL
        REFERENCES activities(id_activities)
        ON DELETE RESTRICT,

    final_price_registrations NUMERIC(10,2) NOT NULL
        CHECK (final_price_registrations >= 15.00),

    payment_plan_registrations VARCHAR(15) NOT NULL DEFAULT 'full'
        CHECK (
            payment_plan_registrations IN (
                'full',
                'installments'
            )
        ),

    status_registrations VARCHAR(20) NOT NULL DEFAULT 'confirmed'
        CHECK (
            status_registrations IN (
                'confirmed',
                'cancelled'
            )
        ),

    registered_at_registrations TIMESTAMPTZ NOT NULL DEFAULT now(),

    UNIQUE (
        member_id_registrations,
        activity_id_registrations
    )
);


CREATE TABLE payments (
    id_payments SERIAL PRIMARY KEY,

    registration_id_payments INTEGER NOT NULL
        REFERENCES registrations(id_registrations)
        ON DELETE CASCADE,

    installment_number_payments SMALLINT NOT NULL
        CHECK (installment_number_payments BETWEEN 1 AND 3),

    amount_payments NUMERIC(10,2) NOT NULL
        CHECK (amount_payments >= 0),

    due_date_payments DATE NOT NULL,

    paid_at_payments TIMESTAMPTZ,

    status_payments VARCHAR(20) NOT NULL DEFAULT 'pending'
        CHECK (
            status_payments IN (
                'pending',
                'paid',
                'failed'
            )
        ),

    UNIQUE (
        registration_id_payments,
        installment_number_payments
    )
);


CREATE TABLE waiting_list (
    id_waiting_list SERIAL PRIMARY KEY,

    activity_id_waiting_list INTEGER NOT NULL
        REFERENCES activities(id_activities)
        ON DELETE CASCADE,

    member_id_waiting_list INTEGER NOT NULL
        REFERENCES members(id_members)
        ON DELETE CASCADE,

    priority_score_waiting_list INTEGER NOT NULL DEFAULT 0,

    status_waiting_list VARCHAR(20) NOT NULL DEFAULT 'waiting'
        CHECK (
            status_waiting_list IN (
                'waiting',
                'promoted_pending',
                'expired',
                'confirmed'
            )
        ),

    deadline_confirmation_waiting_list TIMESTAMPTZ,

    created_at_waiting_list TIMESTAMPTZ NOT NULL DEFAULT now(),

    UNIQUE (
        member_id_waiting_list,
        activity_id_waiting_list
    )
);