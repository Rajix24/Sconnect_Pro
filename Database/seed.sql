 INSERT INTO facilities (name, erp_capacity, divisible)
            VALUES
                ('Complexe Sportif Al Amal', 500, TRUE),
                ('Stade Municipal', 1000, FALSE),
                ('Piscine Municipale', 200, TRUE),
                ('Salle Omnisports', 300, TRUE);

INSERT INTO associations (name)
            VALUES
                ('Association Football Marrakech'),
                ('Club Basket Pro'),
                ('Association Natation'),
                ('Club Athletisme');

 INSERT INTO families (quotient_familial)
            VALUES
                (450.00),
                (750.00),
                (1100.00),
                (550.00),
                (900.00);

INSERT INTO activities (
                association_id,
                facility_id,
                name,
                base_price,
                max_capacity,
                age_category,
                requires_recent_certificate,
                day_of_week,
                start_time,
                end_time,
                sub_zone
            )
            VALUES

                (1,1,'Football U15',300.00,30,'minime',FALSE,1,'16:00','18:00',NULL),
                (2,4,'Basketball Junior',250.00,20,'junior',FALSE,2,'17:00','19:00','Court A'),
                (3,3,'Natation Senior',400.00,25,'senior',TRUE,3,'18:00','20:00','Bassin A'),
                (4,1,'Athletisme',200.00,40,'senior',FALSE,4,'17:00','19:00',NULL),
                (1,2,'Football Senior',350.00,50,'senior',FALSE,5,'18:00','20:00',NULL);

  INSERT INTO members (
                family_id,
                first_name,
                last_name,
                birth_date,
                is_resident,
                medical_certificate_date,
                medical_status,
                pass_sport_code
            )
            VALUES

                (1,'Younes','Raji','2010-05-15',TRUE,'2025-09-01','compliant',NULL),
                (1,'Adam','Raji','2012-08-20',TRUE,'2025-09-01','compliant','PASS2026A'),
                (2,'Ahmed','Amine','2005-03-10',TRUE,'2025-08-15','compliant',NULL),
                (3,'Sara','Bennani','2007-11-25',FALSE,NULL,'medical_non_compliant',NULL),
                (4,'Omar','El Idrissi','2011-02-14',TRUE,'2025-09-05','compliant',NULL),
                (5,'Salma','Naciri','2004-06-30',TRUE,'2025-08-20','compliant','PASS2026B');

INSERT INTO registrations (
                member_id,
                activity_id,
                final_price,
                payment_plan,
                status
            )
            VALUES

                (
                    1,
                    1,
                    180.00,
                    'installments',
                    'confirmed'
                ),

                (
                    2,
                    1,
                    150.00,
                    'full',
                    'confirmed'
                ),

                (
                    3,
                    5,
                    350.00,
                    'full',
                    'confirmed'
                ),

                (
                    5,
                    2,
                    200.00,
                    'installments',
                    'confirmed'
                ),

                (
                    6,
                    3,
                    300.00,
                    'full',
                    'confirmed'
                );


  INSERT INTO payments (
                registration_id,
                installment_number,
                amount,
                due_date,
                paid_at,
                status
            )
            VALUES

                (1,1,60.00,'2025-09-15',NOW(),'paid'),
                (1,2,60.00,'2025-10-15',NULL,'pending'),

                (1,3,60.00,'2025-11-15',NULL,'pending'),

                (2,1,150.00,'2025-09-15',NOW(),'paid'),

                (3,1,350.00,'2025-09-20',NOW(),'paid'),

                (4,1,100.00,'2025-09-15',NOW(),'paid'),

                (4,2,100.00,'2025-10-15',NULL,'pending'),

                (5,1,300.00,'2025-09-20',NOW(),'paid');
 INSERT INTO waiting_list (
                activity_id,
                member_id,
                priority_score,
                status,
                deadline_confirmation
            )
            VALUES

                (
                    1,
                    4,
                    0,
                    'waiting',
                    NULL
                ),

                (
                    2,
                    6,
                    10,
                    'waiting',
                    NULL
                ),

                (
                    3,
                    4,
                    0,
                    'promoted_pending',
                    NOW() + INTERVAL '48 hours'
                );

