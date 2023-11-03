export class CustomerRoutes {
    static readonly getCustomerByCredentials = '/customer/:email/:password'
    static readonly createNewCustomer = '/new/customer'
    static readonly updateCustomer = '/customer/update/:id'
    static readonly deleteCustomer = '/delete/customer'
}