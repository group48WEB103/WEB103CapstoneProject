import express, { Request, Response } from 'express';
import cors from 'cors';
import { CustomerRoutes } from './src/routes/customer.js';
import { EventRoutes } from './src/routes/event.js';
import { StadiumRoutes } from './src/routes/stadium.js';
import { TicketRoutes } from './src/routes/ticket.js';
import { CustomerQueries } from './src/controllers/customer.js';
import { EventQueries } from './src/controllers/event.js';
import { StadiumQueries } from './src/controllers/stadium.js';
import { TicketQueries } from './src/controllers/ticket.js';
import dotenv from 'dotenv';
dotenv.config();



// Cors doesn't allow http requests that are not made from our ticketeller domain or search bar(!origin)
    
const corsOptions = {
    origin: (origin: any, callback: any) => {
        const allowedOrigins = ["https://tickteller.vercel.app", "http://localhost:3000"];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        } 
    }
};
  


const port = process.env.SERVER_PORT;
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

const customerController = new CustomerQueries();
const eventController = new EventQueries();
const stadiumController = new StadiumQueries();
const ticketController = new TicketQueries();



// Root Route

app.get("/", (req: Request, res: Response) => {
    res.json("Ticketeller API");
});



// Customer Requests

app.get(CustomerRoutes.getCustomerByCredentials, (req: Request, res: Response) => {
    const email = String(req.params.email);
    const password = String(req.params.password);
    customerController.getCustomerByCredentials(req, res, email, password);
});

app.get(CustomerRoutes.getCustomerByEmail, (req: Request, res: Response) => {
    const email = String(req.params.email);
    customerController.getCustomerByEmail(req, res, email);
});

app.post(CustomerRoutes.createNewCustomer, (req: Request, res: Response) => {
    const data = req.body
    customerController.createNewCustomer(req, res, data);
});

app.put(CustomerRoutes.updateCustomer, (req: Request, res: Response) => {
    const data = req.body
    const id = String(req.params.id);
    customerController.updateCustomer(req, res, id, data);
});

app.delete(CustomerRoutes.deleteCustomer, (req: Request, res: Response) => {
    const id = String(req.params.id);
    customerController.deleteCustomer(req, res, id);
});



// Event Requests

app.get(EventRoutes.getAllEvents, (req: Request, res: Response) => {
    eventController.getAllEvents(req, res);
});

app.get(EventRoutes.getEventByID, (req: Request, res: Response) => {
    const id = String(req.params.id);
    eventController.getEventByID(req, res, id);
});



// Stadium Requests

app.get(StadiumRoutes.getAllStadiums, (req: Request, res: Response) => {
    stadiumController.getAllStadiums(req, res);
});

app.get(StadiumRoutes.getStadiumByID, (req: Request, res: Response) => {
    const id = String(req.params.id);
    stadiumController.getStadiumByID(req, res, id);
});



// Ticket Requests

app.get(TicketRoutes.getAllTickets, (req: Request, res: Response,) => {
    ticketController.getAllTickets(req, res);
});

app.post(TicketRoutes.createNewTicket, (req: Request, res: Response) => {
    const data = req.body
    ticketController.createNewticket(req, res, data);
});



// Catch all other routes and return 404 Not Found

app.get('*', (req: Request, res: Response) => {
    res.status(404).json('404 Not Found');
});



// Define port for express server

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});