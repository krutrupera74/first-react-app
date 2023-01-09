import { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Save } from '@material-ui/icons';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';

function CustomerForm(props) {
    const [formData, setNewFormData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: ''
    });

    const [errors, setErrors] = useState('');

    const schema = {
        id: '',
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required()
    }

    const saveCustomer = () => {
        const customer = { ...formData };
        props.addCustomer(customer);
    }

    const validateProperty = (event) => {
        const { name, value } = event.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
    }

    const validate = () => {
        const result = Joi.validate(formData, schema, { abortEarly: false });
        if (!result.error) {
            return null;
        }
        else {
            const errorData = {};
            for (let item of result.error.details) {
                errorData[item.path[0]] = item.message;
            }
            setErrors(errorData);
            return errorData;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default behavior of submit button
        const errors = validate();
        if (!errors) {
            saveCustomer();
        } else {
            toast.error('Please fill valid details!!', {
                position: toast.POSITION.TOP_RIGHT,
                theme: 'dark',
                hideProgressBar: false,
                autoClose: 5000,
                closeOnClick: true
            });
        }
    }

    const handleChange = (evt) => {
        // accessing target's name and value
        const { name, value } = evt.target;

        let errorData = { ...errors }; // taking clone of errors in state

        const errorMessage = validateProperty(evt); // checking for errors

        // If error message is there, store it otherwise delete existing message
        if (errorMessage) {
            errorData[name] = errorMessage;
        } else {
            delete errorData[name];
        }

        // copying the existing formData using ES 6 spread operator
        let customerData = { ...formData };

        // Updating the current value with the user entered value
        customerData[name] = value;

        // setting the new value in the form data
        setNewFormData(customerData);

        // updating errors
        setErrors(errorData);
    }

    return (
        <div>
            <h3>Add Customer</h3>
            <hr />
            <form className='ui form' onSubmit={(event) => handleSubmit(event)}>
                <div className='form-group'>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        name='firstName'
                        label='First Name'
                        defaultValue={formData.firstName}
                        autoFocus
                        margin='normal'
                        fullWidth
                        onChange={(event) => handleChange(event)}
                    />
                    {errors.firstName && <div className='alert alert-danger'>
                        {errors.firstName}
                    </div>}
                </div>

                <div className='form-group'>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        name='lastName'
                        label='Last Name'
                        defaultValue={formData.lastName}
                        margin='normal'
                        fullWidth
                        onChange={(event) => handleChange(event)}
                    />
                    {errors.lastName && <div className='alert alert-danger'>
                        {errors.lastName}
                    </div>}
                </div>

                <div className='form-group'>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        name='email'
                        label='Email'
                        defaultValue={formData.email}
                        margin='normal'
                        fullWidth
                        onChange={(event) => handleChange(event)}
                    />
                    {errors.email && <div className='alert alert-danger'>
                        {errors.email}
                    </div>}
                </div>

                <Button
                    type='submit'
                    startIcon={<Save />}
                    variant='contained'
                    color='primary'
                    style={{
                        fontSize: 20
                    }}>
                    Submit
                </Button>
            </form>
        </div>
    )


}

export default CustomerForm;