-- Keep a log of any SQL queries you execute as you solve the mystery.

.tables

.schema crime_scene_reports

SELECT description FROM crime_scene_reports
WHERE day = 28 AND month = 7 AND street = 'Humphrey Street';


.schema interviews

SELECT name, transcript FROM interviews
WHERE month = 7 AND day = 28

.schema atm_transactions

.schema bank_accounts


SELECT month, day, bank_accounts.account_number, name, transaction_type, amount
FROM atm_transactions
JOIN bank_accounts ON atm_transactions.account_number = bank_accounts.account_number
JOIN people ON bank_accounts.person_id = people.id
WHERE month = 7 AND day = 28 AND atm_location = 'Leggett Street' AND transaction_type = 'withdraw';


.schema flights

SELECT flights.id, full_name, city, month, day, hour, minute
FROM flights
JOIN airports ON flights.destination_airport_id = airports.id
WHERE month = 7 AND day = 29 ORDER BY hour;


.schema passengers

SELECT passengers.passport_number,name, seat name
FROM passengers
JOIN people ON passengers.passport_number = people.passport_number
WHERE flight_id = 36;


SELECT name FROM atm_transactions
JOIN bank_accounts ON atm_transactions.account_number = bank_accounts.account_number
JOIN people ON bank_accounts.person_id = people.id
WHERE month = 7 AND day = 28 AND atm_location = 'Leggett Street' AND transaction_type = 'withdraw' AND name IN
    (SELECT name FROM passengers
     JOIN people ON passengers.passport_number = people.passport_number
     WHERE flight_id = 36);

.schema bakery_security_logs

SELECT * FROM bakery_security_logs


SELECT month, day, hour, minute, activity, bakery_security_logs.license_plate, name FROM bakery_security_logs
JOIN people ON bakery_security_logs.license_plate = people.license_plate
WHERE month = 7 AND day = 28 AND hour = 10 AND (minute >= 15 AND  minute <= 25);



SELECT name  FROM atm_transactions
JOIN bank_accounts ON atm_transactions.account_number = bank_accounts.account_number
JOIN people ON bank_accounts.person_id = people.id
WHERE month = 7 AND day = 28 AND atm_location = 'Leggett Street' AND transaction_type = 'withdraw' AND name IN
    (SELECT name  FROM passengers
    JOIN people ON passengers.passport_number = people.passport_number
    WHERE flight_id = 36) AND name IN
        (SELECT name FROM bakery_security_logs
        JOIN people ON bakery_security_logs.license_plate = people.license_plate
        WHERE month = 7 AND day = 28 AND hour = 10 AND (minute >= 15 AND  minute <= 25));



