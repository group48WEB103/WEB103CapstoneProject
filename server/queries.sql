-- Queries to create tables
CREATE TABLE stadium (
    id SERIAL PRIMARY KEY,
    location TEXT,
    title TEXT,
    address TEXT,
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
    seat_numbers INTEGER[],
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
    location, title, address, description, capacity, image, gallery
) VALUES (
    'New York', 
    'Madison Square Garden', 
    '4 Pennsylvania Plaza, New York, NY 10001',
    'Madison Square Garden, colloquially known as the Garden or by its initials MSG, is a multi-purpose indoor arena in New York City. It is located in Midtown Manhattan between Seventh and Eighth Avenues from 31st to 33rd Street above Pennsylvania Station.', 
    60, 
    'https://i0.wp.com/stadiumbase.com/wp-content/uploads/2020/05/shutterstock_1428782831.jpg?fit=1000%2C616&ssl=1', 
    ARRAY['https://upload.wikimedia.org/wikipedia/commons/4/4b/Madison_Square_Garden_%28MSG%29_-_Full_%2848124330357%29.jpg', 'https://a.cdn-hotels.com/gdcs/production33/d531/d71c7959-817a-41bb-a352-54f201969244.jpg?impolicy=fcrop&w=800&h=533&q=medium', 'https://img.msg.com/wp-content/uploads/2021/02/BillyJoel_071818_1902_RT-1.jpg', 'https://media.cnn.com/api/v1/images/stellar/prod/210621112430-02-foo-fighters-madison-square-garden-0620-restricted.jpg?q=w_2926,h_1948,x_0,y_0,c_fill', 'https://www.hollywoodreporter.com/wp-content/uploads/2021/03/GettyImages-1286738801_EA-H-2021-1617146947.jpg?w=1296']
), (
    'San Francisco', 
    'Chase Center', 
    '1 Warriors Way, San Francisco, CA 94158',
    'Chase Center is an indoor arena in the Mission Bay neighborhood of San Francisco, California. The building is the home venue for the Golden State Warriors of the National Basketball Association.', 
    90, 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Chase_Center_-_July_2019_%287605%29.jpg/6000px-Mapcarta.jpg', 
    ARRAY['https://www.mortenson.com/-/media/project/mortenson/site/images/projects/chase-center/banner-image.jpg', 'https://www.sftravel.com/sites/default/files/styles/hero/public/2022-12/LoL_Worlds_ChaseCenter2022_1105_193757-2640_SAG%20%281%29.jpg.webp?itok=lRDF_ZuJ', 'https://images.prismic.io/bounce/2d0fc066-31c1-4880-bdda-72fae13c1a40_corleone-brown-OHTUqvFkFxk-unsplash.jpg?auto=compress,format', 'https://s.hdnux.com/photos/33/53/11/7254632/36/rawImage.jpg']
), (
    'Dallas', 
    'American Airlines Center', 
    '2500 Victory Ave, Dallas, TX 75219',
    'The American Airlines Center is a multi-purpose indoor arena located in the Victory Park neighborhood in downtown Dallas, Texas. The arena serves as the home of the Dallas Stars of the National Hockey League and Dallas Mavericks of the National Basketball Association.', 
    120, 
    'https://upload.wikimedia.org/wikipedia/commons/3/3d/American_Airlines_Center_%286246886325%29_cropped.jpg', 
    ARRAY['https://cdn.vox-cdn.com/thumbor/3hAeMF-Ow2gD6SOY-WCbDdV3MQ0=/0x254:4928x3026/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/54629967/usa_today_9638443.0.jpg', 'https://www.hksinc.com/wp-content/uploads/2018/10/american_airlines_center_B-3.jpg', 'https://photo.kidzworld.com/images/20161028/9d9d32b7-33df-4cda-acbb-781c5082c7ae/american-airlines-center-mavericks.jpg', 'https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/fortworth/KELY1142p2HDR-J_a0de6311-5056-a348-3a574c325ecc6f17.jpg']
), (
    'Toronto', 
    'Ontario Place', 
    'Ontario Place, 955 Lake Shore Blvd W, Toronto',
    'Ontario Place is an entertainment venue, event venue, and park in Toronto, Ontario, Canada. The venue is located on three artificial landscaped islands just off-shore in Lake Ontario, south of Exhibition Place, and southwest of Downtown Toronto.', 
    150, 
    'https://www.todocanada.ca/wp-content/uploads/Ontario-PLace-1.jpg', 
    ARRAY['https://media.blogto.com/articles/20220426-rolling-loud.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70', 'https://audibletreats.com/wp-content/uploads/2022/09/rlto22.jpeg', 'https://www.todocanada.ca/wp-content/uploads/Rolling-Loud.jpg', 'https://torontoguardian.com/wp-content/uploads/2022/09/Cover-Photo.jpg']
), (
    'Baltimore', 
    'M&T Bank Stadium', 
    '1101 Russell St, Baltimore, MD 21230',
    'M&T Bank Stadium is a multi-purpose football stadium located in Baltimore, Maryland. It is the home of the Baltimore Ravens of the National Football League. The stadium is immediately adjacent to Oriole Park at Camden Yards, the home of the Baltimore Orioles.', 
    90, 
    'https://thebusinessdownload.com/wp-content/uploads/2023/04/iepxbpX9jstfq3BVQcclseJ0ogcmqphMba5q4fN7JJ0TOJVAO7whDgb7zPqUlDPG_9z7OCq8m-N_qDvkYoLjzfYD2RNzCPBbHy98LDgxGGarpN0o_Cj8zrzwLR-Wmr6N4sD-axF5.png', 
    ARRAY['https://www.sportsbusinessjournal.com/-/media/Images/Daily/2023/04/20/cb-MT-Bank-Stadium.ashx', 'https://loraxllc.com/wp-content/uploads/2022/01/MT-Bank-Stadium.jpg', 'https://russellstreetreport.com/wp-content/uploads/2022/04/MT-Bank-Stadium-Night.jpeg', 'https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/mtbank16_top.jpg']
);



INSERT INTO event (
    stadium_id, title, description, performer, image
) VALUES (
    4,
    'Rolling Loud 2022',
    'Largest hip-hop festival in the world is coming to Toronto in September!',
    'Rolling Loud',
    'https://i0.wp.com/theimpatienttourist.com/wp-content/uploads/2022/04/Screenshot-2022-04-26-233218.jpg?fit=547%2C228&ssl=1'
), (
   3,
   'Dallas Mavericks vs Los Angeles Clippers',
   'Both teams will attempt to lengthen their five game winning streaks as the Dallas Mavericks (11-5) take on the Los Angeles Clippers (12-5) at American Airlines Center. The game starts at 8:30 p.m. ET on Tuesday, November 26, 2019, and will air on NBATV.',
   'NBA Game', 
   'https://ats.io/wp-content/uploads/2019/11/Los-Angeles-Clippers-at-Dallas-Mavericks.png'
), (
   5,
   'Baltimore Ravens vs San Francisco 49ers',
   'Relive the epic finish the Super Bowl XLVII as Ray Lewis and the Baltimore Ravens defeat the San Francisco 49ers 34-31 to claim their second super bowl title.',
   'NFL Game', 
   'https://statmilk.bleacherreport.com/api/image/mashup/logo?team1=baltimore-ravens&team2=san-francisco-49ers'
), (
   1,
   'New York Knicks vs Atlanta Hawks',
   'While the Hawks win over the Knicks in the first round of the 2021 playoffs stands out the most, Young put on a show in New York during a 117-111 victory in March as well by posting 45 points behind 7-of-15 shooting from deep to go with eight assists.',
   'NBA Game', 
   'https://statmilk.bleacherreport.com/api/image/mashup/logo?team1=new-york-knicks&team2=atlanta-hawks'
), (
   2,
   'Golden State Warriors vs Cleveland Cavaliers',
   'The 2016 NBA Finals was the championship series of the National Basketball Association''s (NBA) 2015–16 season and conclusion of the 2016 playoffs. The Eastern Conference champion Cleveland Cavaliers defeated the defending NBA champion and Western Conference champion Golden State Warriors four games to three in a rematch of the previous year''s Finals.',
   'NBA Game', 
   'https://statmilk.bleacherreport.com/api/image/mashup/logo?team1=golden-state-warriors&team2=cleveland-cavaliers'
);



UPDATE event SET description = 'Largest hip-hop festival in the world is coming to Toronto in September!' WHERE id = 1;