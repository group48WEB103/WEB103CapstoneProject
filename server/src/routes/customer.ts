export class CustomerRoutes {

    static readonly getCustomerByCredentials = '/customer/auth/:email/:password';

    static readonly getCustomerByEmail = '/customer/exist/:email';
    
    static readonly createNewCustomer = '/new/customer';

    static readonly updateCustomer = '/customer/update/:id';

    static readonly deleteCustomer = '/delete/customer';

};