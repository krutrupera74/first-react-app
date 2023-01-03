function CustomerDetails(props) {
    const customerData = props.customer;

    return (
        <div className="container">
            <h>Customer Details</h>
            <hr />
            <p>Id: {customerData.id}</p>
            <p>First Name: {customerData.name}</p>
            <p>Account Type: {customerData.accountType}</p>
            <p>Email: {customerData.email}</p>
            <p>Contact: {customerData.phone}</p>
        </div>
    )
}

export default CustomerDetails;