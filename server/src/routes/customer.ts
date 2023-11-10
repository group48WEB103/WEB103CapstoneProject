export class CustomerRoutes {

    static readonly getCustomerByCredentials = '/customer/auth/:email/:password';
    
    static readonly createNewCustomer = '/customer/new';

    static readonly updateCustomer = '/customer/update/:id/:password';

    static readonly deleteCustomer = '/customer/delete/:id/:password';

};