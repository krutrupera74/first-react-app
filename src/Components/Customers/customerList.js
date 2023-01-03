import data from './customers.json';
import { useState } from 'react';
import CustomerDetails from './customerDetails';
import { toast } from 'react-toastify';
import CustomerForm from './customerForm';

function CustomersList() {
    const [customers, setNewCustomer] = useState(data);
    const [selectedCustomer, setNewSelectedCustomer] = useState(null);

    const onCustomerSelect = (e, customer) => {
        setNewSelectedCustomer(customer);
    }

    const tabRows = customers.map((customer, index) => {
        <tr onClick={(event) => onCustomerSelect(event, customer)}
            key={index}>
            <td>{customer.id}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
        </tr>
    })

    const addNewCustomer = (newCustomer) => {
        const totalCustomers = customers.length;
        newCustomer.id = totalCustomers + 1;
        let newList = [...customers];
        newList.push(newCustomer);
        setNewCustomer(newList);

        toast.success('Customer added Successfully', {
            position: toast.POSITION.TOP_RIGHT,
            theme: 'dark',
            hideProgressBar: false,
            autoClose: 5000,
            closeOnClick: true
        });
    }

    return (
        <div>
            <table className='table table-hover table-bordered table-sm'>
                <thead className='thead-light'>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tabRows}
                </tbody>
            </table>
            <br />
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <CustomerForm addCustomer={addNewCustomer} />
                </div>
                <div className='col-md-4'>
                    {selectedCustomer ? <CustomerDetails customer={selectedCustomer} /> : null}
                </div>
            </div>
        </div>
    )
}

export default CustomersList;