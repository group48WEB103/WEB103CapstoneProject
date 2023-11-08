-- Queries to create tables
CREATE TABLE stadium (
    id SERIAL PRIMARY KEY,
    location TEXT,
    title TEXT,
    description TEXT,
    capacity INTEGER,
    image TEXT,
    gallery TEXT[]
);



CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    stadium_id INT REFERENCES stadium(id),    -- one-to-many
    title TEXT,
    description TEXT,
    performer TEXT,
    image TEXT
);



CREATE TABLE ticket (                         -- ticket table is join table for stadium and event, making a many-to-many relationship
    id SERIAL PRIMARY KEY,
    event_id INT REFERENCES event(id),        -- many-to-many
    title TEXT,
    seat_numbers INTEGER[],
    description TEXT,
    image TEXT,
    stadium_id INT REFERENCES stadium(id),    -- one-to-many, many-to-many
    price INTEGER
);



CREATE TABLE customer (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT,
    tickets INT[]
);



-- Queries to insert data, all tickets and customers are user generated
INSERT INTO stadium (
    location, title, description, capacity, image, gallery
) VALUES (
    'New York', 
    'Madison Square Garden', 
    'Madison Square Garden, colloquially known as the Garden or by its initials MSG, is a multi-purpose indoor arena in New York City. It is located in Midtown Manhattan between Seventh and Eighth Avenues from 31st to 33rd Street above Pennsylvania Station.', 
    60, 
    '', 
    ['','']
), (
    '', 
    '', 
    '', 
    0, 
    '', 
    ['','']
), (
    '', 
    '', 
    '', 
    0, 
    '', 
    ['','']
), (
    '', 
    '', 
    '', 
    0, 
    '', 
    ['','']
), (
    '', 
    '', 
    '', 
    0, 
    '', 
    ['','']
), (
    '', 
    '', 
    '', 
    0, 
    '', 
    ['','']
);