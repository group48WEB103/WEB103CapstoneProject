import { Request, Response } from "express";
import pgp from "pg-promise";
import { Hotel } from "../models/hotels";
import dotenv from "dotenv";
dotenv.config();

const connection = {
  host: process.env.HOST,
  port: Number(process.env.PORT),
  database: process.env.DB,
  user: process.env.USER,
  password: process.env.PASSWORD,
  ssl: true,
};

const db = pgp()(connection);

export class HotelQueries {
  async getAllHotels(req: Request, res: Response) {
    try {
      const allHotels = await db.manyOrNone("SELECT * FROM hotel");
      return res.json(allHotels);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotels." });
    }
  }

  async getHotelByID(req: Request, res: Response, id: string) {
    try {
      const hotel = await db.one("SELECT * FROM hotel WHERE id = $1", [id]);
      return res.json(hotel);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotel." });
    }
  }

  async getHotelsByLocation(req: Request, res: Response, location: string) {
    try {
      const hotelsByLocation = await db.manyOrNone("SELECT * FROM hotel WHERE location = $1", [location]);
      return res.json(hotelsByLocation);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while fetching hotels." });
    }
  }

  async createHotel(req: Request, res: Response, data: any) {
    try {
      const hotel: Hotel = data;
      const createdHotel = await db.one("INSERT INTO hotel (title, description, location, address, rating, price, img) VALUES ($1, $2, $3, $4, $5, $6, $7)", [hotel.title, hotel.description, hotel.location, hotel.address, hotel.rating, hotel.price, hotel.img]);
      return res.json(createdHotel);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while creating the new hotel." });
    }
  }

  async updateHotel(req: Request, res: Response, data: any) {
    try {
      const id = data.id;
      const hotel: Hotel = data;
      const updatedHotel = await db.one("UPDATE hotel SET title = $1, description = $2, location = $3, address = $4, rating = $5, price = $6, img = $7 WHERE id = $8", [hotel.title, hotel.description, hotel.location, hotel.address, hotel.rating, hotel.price, hotel.img, id]);
      return res.json(updatedHotel);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while updating the hotel." });
    }
  }

  async deleteHotel(req: Request, res: Response, id: string) {
    try {
      const deletedHotel = await db.one("DELETE FROM hotel WHERE id = $1", [id]);
      return res.json(deletedHotel);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred while deleting the hotel." });
    }
  }
}
