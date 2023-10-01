CREATE TABLE "location" (
    id INTEGER PRIMARY KEY,
    title TEXT,
    description TEXT,
    location TEXT,
    address TEXT,
    rating TEXT,
    price INTEGER,
    img TEXT
); 



INSERT INTO "location" (
    id, title, description, location, address, rating, price, img
) VALUES (
    1,
    'Park Hyatt Tokyo', 
    'If you’re looking for a luxury hotel in Nishishinjuku, look no further than Park Hyatt Tokyo. As your “home away from home,” the hotel rooms offer a flat screen TV, a refrigerator, and a minibar, and getting online is easy, with free wifi available. Guests have access to a concierge and room service while staying at Shinjuku Hyatt. In addition, Hyatt Tokyo offers a pool and breakfast, which will help make your Nishishinjuku trip additionally gratifying. And, as an added convenience, there is parking available to guests. While in Nishishinjuku be sure to experience local okonomiyaki & takoyaki favorites at Hiroshimaokonomiyaki Buchiumaya or Kobe Rokko-Michi Gyunta Shinjuku Lumine 1.',
    'Tokyo', 
    '3-7-1-2 Nishi Shinjuku, Nishishinjuku, Shinjuku 163-1055 Tokyo Prefecture',
    '4.5',
    922,
    'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2017/04/10/1223/Park-Hyatt-Tokyo-P021-Kozue.jpg/Park-Hyatt-Tokyo-P021-Kozue.4x3.jpg'
); 



INSERT INTO "location" (
    id, title, description, location, address, rating, price, img
) VALUES (
    2,
    'Cat Cafe Temari no Ouchi', 
    'The tagline says it all: a strange cat forest. Tucked away on a quiet side street in Kichioji, Temari no Ouchi truly is a bit of a different world. Once you walk up the stairs to the third floor, even the doors indicate that this isn’t your average cat café. The entire decor looks like you’ve just stepped into an old children’s picture book, except this time there are tons of cats roaming around. The cats have ample space, and if they feel overwhelmed they can easily run to the back, where there’s a staff-only section. No cages in sight, either.',
    'Tokyo', 
    '2-13-14 Kichijoji Honcho 3f, Musashino 180-0004 Tokyo Prefecture',
    '4',
    15,
    'https://media.timeout.com/images/102852927/image.jpg'
); 



UPDATE "location" SET img = 'https://media.timeout.com/images/102852927/image.jpg' WHERE id = 2;

INSERT INTO "location" (
    id, title, description, location, address, rating, price, img
) VALUES (
    3,
    'W Osaka', 
    'Situated in Osaka, 200 metres from Namba Shrine, W Osaka features accommodation with a fitness centre, private parking, a terrace and a restaurant. This 5-star hotel offers room service, a 24-hour front desk and free WiFi. The property is 1.8 km from the city centre and less than 1 km from Kokoni Sunaba Ariki Monument.',
    'Osaka', 
    '542-0081 Osaka Prefecture, Osaka, Chuo-ku Minami Semba 4-1-3, Japan',
    '4.25',
    435,
    'https://cf.bstatic.com/xdata/images/hotel/max1280x900/446545772.jpg?k=274e85926910a935126dbfe2df0c61055487df1feb5b0667079052bba8f09982&o=&hp=1'
);



INSERT INTO "location" (
    id, title, description, location, address, rating, price, img
) VALUES (
    4,
    'InterContinental Yokohama Pier 8, an IHG Hotel', 
    'Well set in the centre of Yokohama, InterContinental Yokohama Pier 8, an IHG Hotel provides air-conditioned rooms, a garden, free WiFi and a terrace. Featuring room service, this property also provides guests with a restaurant. Private parking is available on site.',
    'Yokohama', 
    '231-0001 Kanagawa, Yokohama, 2-14-1 Naka-ku Shinko, Japan',
    '4.5',
    304,
    'https://img.travel.rakuten.co.jp/share/image_up/177505/LARGE/83671e34c6b72c84ded95bf15861bb488a144afc.47.9.26.3.jpg'
);



SELECT * FROM "location";