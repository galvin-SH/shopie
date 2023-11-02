const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <nav>
                <ul>
                    <a href="/account">Account Page </a>
                    <br></br>

                    <a href="/category">Category Page </a>
                    <br></br>

                    <a href="/error">Error Page </a>
                    <br></br>

                    <a href="/">Home Page </a>
                    <br></br>

                    <a href="/login">Login Page </a>
                    <br></br>

                    <a href="/product">Product Page </a>
                    <br></br>

                    <a href="/stripe">Stripe Page </a>
                    <br></br>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
