create table stadium(
    -- Capitalize all blue except description image
    id SERIAL PRIMARY KEY,
    location TEXT,
    title TEXT,
    description TEXT,
    capacity INTEGER,
    image TEXT
)

create table event(
     id SERIAL PRIMARY KEY,
    location_id INT REFERENCES stadium(id),
    title TEXT,
    description TEXT,
    performer TEXT,
    image TEXT
)

create table ticket(
     id SERIAL PRIMARY KEY,
    event_id INT REFERENCES event(id),
    title TEXT,
    -- Make sure seat number is within capacity in Controller
    seat_number INTEGER,
    description TEXT,
    performer TEXT REFERENCES event(performer),
    image TEXT
    -- one-to-many
    staidum_id INT REFERENCES stadium(id)
)


create table bundle(
    id SERIAL PRIMARY KEY,
    ticket_id INT[] REFERENCES ticket(id),
    title TEXT,
    image TEXT
)

create table customer(
    id SERIAL PRIMARY KEY,
    name TEXT,
    ticket_id INT REFERENCES ticket(id),
    bundle_id INT REFERENCES bundle(id)
)









