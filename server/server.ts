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
        const allowedOrigins = process.env.CLIENT_URL || '';
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

const CustomerController = new CustomerQueries();
const EventController = new EventQueries();
const StadiumController = new StadiumQueries();
const TicketController = new TicketQueries();



// Root Route

app.get("/", (req: Request, res: Response) => {
    res.json("Ticketeller API");
});



// Customer Requests

app.get(CustomerRoutes.getCustomerByCredentials, (req: Request, res: Response) => {
    const email = String(req.params.email);
    const password = String(req.params.password);
    CustomerController.getCustomerByCredentials(req, res, email, password);
});

app.post(CustomerRoutes.createNewCustomer, (req: Request, res: Response) => {
    const data = req.body
    CustomerController.createNewCustomer(req, res, data);
});

app.put(CustomerRoutes.updateCustomer, (req: Request, res: Response) => {
    const data = req.body
    const id = String(req.params.id);
    const password = String(req.params.password);
    CustomerController.updateCustomer(req, res, id, data, password);
});

app.delete(CustomerRoutes.deleteCustomer, (req: Request, res: Response) => {
    const id = String(req.params.id);
    const password = String(req.params.password);
    CustomerController.deleteCustomer(req, res, id, password);
});



// Event Requests

app.get(EventRoutes.getAllEvents, (req: Request, res: Response) => {
    EventController.getAllEvents(req, res);
});

app.get(EventRoutes.getEventByID, (req: Request, res: Response) => {
    const id = String(req.params.id);
    EventController.getEventByID(req, res, id);
});



// Stadium Requests

app.get(StadiumRoutes.getAllStadiums, (req: Request, res: Response) => {
    StadiumController.getAllStadiums(req, res);
});

app.get(StadiumRoutes.getStadiumByID, (req: Request, res: Response) => {
    const id = String(req.params.id);
    StadiumController.getStadiumByID(req, res, id);
});



// Ticket Requests

app.post(TicketRoutes.createNewTicket, (req: Request, res: Response) => {
    const data = req.body
    TicketController.createNewticket(req, res, data);
});



// Catch all other routes and return 404 Not Found

app.get('*', (req: Request, res: Response) => {
    res.status(404).json('404 Not Found');
});



// Define port for express server

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});