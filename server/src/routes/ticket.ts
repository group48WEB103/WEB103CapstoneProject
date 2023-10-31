export class TicketRoutes {
    static readonly getAllTickets = '/tickets'
    static readonly getTicketByID = '/ticket/:id'
    static readonly getTicketByCustomer = '/ticket/customer/:id'
    static readonly createNewTicket = '/new/ticket'
    static readonly updateTicket = '/update/ticket'
    static readonly deleteTicket = '/delete/ticket'
}