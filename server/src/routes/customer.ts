export class CustomerRoutes {

    static readonly getCustomerByCredentials = '/customer/auth/:email/:password';

    static readonly getCustomerByEmail = '/customer/exist/:email';
    
    static readonly createNewCustomer = '/customer/new';

    static readonly updateCustomer = '/customer/update/:id';

    static readonly deleteCustomer = '/customer/delete/:id';

};