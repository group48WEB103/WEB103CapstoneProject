import express, {Request,Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {CustomerRoutes} from './src/routes/customer.js'
import  {EventRoutes} from './src/routes/event.js'
import {StadiumRoutes} from './src/routes/stadium.js'
import {TicketRoutes} from './src/routes/ticket.js'
import { CustomerQueries } from './src/controllers/customer.js'
import { EventQueries } from './src/controllers/event.js'
import { StadiumQueries } from './src/controllers/stadium.js'
import { TicketQueries } from './src/controllers/ticket.js'

const corsOptions = {
    //makes sure specifc http request are made from our website
    origin: (origin: any, callback: any) => {
      const allowedOrigins = "https://tickteller.vercel.app/";
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      } 
    },
  };
  

dotenv.config()
const port = process.env.PORT
const app = express()
app.use(cors(corsOptions));
app.use(express.json())

const customerController = new CustomerQueries()
const eventController = new EventQueries()
const stadiumController = new StadiumQueries()
const ticketController = new TicketQueries()

app.get("/", (req: Request,res: Response) => {
    res.json("ticketellerAPI")
})


// Customer Requests
app.post(CustomerRoutes.createNewCustomer, (req: Request,res: Response) => {
    const data = req.body
    customerController.createNewCustomer(req,res,data)
})

app.get(CustomerRoutes.getCustomerByCredentials, (req: Request,res: Response) => {
    const email = String(req.params.email)
    const password = String(req.params.password)
    customerController.getCustomerByCredentials(req,res,email,password)
})

app.put(CustomerRoutes.updateCustomer, (req: Request, res: Response) => {
    

    const data = req.body
    const id = String(req.params.id);
    customerController.updateCustomer(req,res,id,data)
})

app.delete(CustomerRoutes.deleteCustomer, (req: Request, res: Response) => {
    const id = String(req.params.id);
    customerController.deleteCustomer(req,res, id)
})


//Event Requests
app.get(EventRoutes.getAllEvents, (req: Request, res: Response) => {
    eventController.getAllEvents(req,res)
})

app.get(EventRoutes.getEventByID, (req: Request, res: Response) => {
    const id = String(req.params.id);
    eventController.getEventByID(req,res,id)
})

//Stadium Requests
app.get(StadiumRoutes.getAllStadiums, (req: Request, res: Response) => {
    stadiumController.getAllStadiums(req,res)
})

app.get(StadiumRoutes.getStadiumByID, (req: Request, res: Response) => {
    const id = String(req.params.id);
    stadiumController.getStadiumByID(req,res,id)
})

//Ticket Requests
app.post(TicketRoutes.createNewTicket, (req: Request,res: Response) => {
    const data = req.body
    ticketController.createNewticket(req,res,data)
})
app.get(TicketRoutes.getAllTickets, (req: Request, res: Response,) => {
    ticketController.getAllTickets(req,res)
})


app.get('*', (req, res) => {
    res.status(404).json('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});