CREATE TABLE stadium (
    id SERIAL PRIMARY KEY,
    location TEXT,
    title TEXT,
    description TEXT,
    capacity INTEGER,
    image TEXT
);

CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    location_id INT REFERENCES stadium(id),
    title TEXT,
    description TEXT,
    performer TEXT,
    image TEXT
);

CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES event(id),
    title TEXT,
    -- Make sure seat number is within capacity in Controller
    seat_number INTEGER,
    description TEXT,
    performer TEXT REFERENCES event(performer),
    image TEXT,
    -- one-to-many
    stadium_id INT REFERENCES stadium(id)
);


CREATE TABLE bundle (
    id SERIAL PRIMARY KEY,
    ticket_id INT[] REFERENCES ticket(id),
    title TEXT,
    image TEXT
);

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name TEXT,
    ticket_id INT REFERENCES ticket(id),
    bundle_id INT REFERENCES bundle(id)
);

-- Run ' DROP TABLE ticket; ' query and then run following query because of typo

CREATE TABLE ticket (
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES event(id),
    title TEXT,
    -- Make sure seat number is within capacity in Controller
    seat_numbers INTEGER[],
    description TEXT,
    performer TEXT REFERENCES event(performer),
    image TEXT,
    -- one-to-many
    stadium_id INT REFERENCES stadium(id),
    price INTEGER
);

-- Run ' DROP TABLE event; ' query and then run following query because of typo

CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    stadium_id INT REFERENCES stadium(id),
    title TEXT,
    description TEXT,
    performer TEXT,
    image TEXT
);

-- Run ' DROP TABLE bundle; ' query because we can go with stadium's one-to-many
-- Run ' DROP TABLE customer; ' query to revamp customer table

CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    ticket_id INT REFERENCES ticket(id),
    bundle_id INT REFERENCES bundle(id)
);

-- Run ' DROP TABLE stadium; ' query to revamp customer table

CREATE TABLE stadium (
    id SERIAL PRIMARY KEY,
    location TEXT,
    title TEXT,
    description TEXT,
    capacity INTEGER,
    image TEXT,
    gallery TEXT[]
);