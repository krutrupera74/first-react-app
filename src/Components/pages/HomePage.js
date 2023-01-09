export default function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Home page from TopGuns Bank</h1>
            <p className="lead">A simple customer management app</p>
            <hr />
            <p>Using Admin section, you can</p>
            <ul>
                <li>
                    View the list of Customers
                </li>
                <li>
                    Create / Update Customers
                </li>
                <li>
                    View customer's account information
                </li>
            </ul>
        </div>
    )
}