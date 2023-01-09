function CustomerDetails(props) {
    const customerData = props.customer;

    return (
        <div className="container">
            <h1>Customer Details</h1>
            <hr />
            <p>Id: {customerData.id}</p>
            <p>First Name: {customerData.firstName}</p>
            <p>Last Name: {customerData.lastName}</p>
            {/* <p>Account Type: {customerData.accountType}</p> */}
            <p>Email: {customerData.email}</p>
            {/* <p>Contact: {customerData.phone}</p> */}
        </div>
    )
}

export default CustomerDetails;