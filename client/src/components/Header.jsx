import { Link } from "react-router-dom";
import { useState } from 'react';

import Auth from '../utils/auth';

const styles = {
    header: {
        color: "#1a1a1a",
        marginBottom: "1.375rem",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        display: "flex",
        alignItems: "center",
        borderStyle: "solid",
        border: "#000000"
    },
    div: {
        width: "85%",
        maxWidth: "1200px",
        marginLeft: "auto",
        marginTight: "auto",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
  };
const Header = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <header style={ styles.header }>
            <div style={ styles.div }>
                <Link style={{  color: "#1a1a1a" }} to="/">
                    <h1 style={{  margin: "0", fontSize: "3rem" }}>
                        Home
                    </h1>
                </Link>
                <p style={{  margin: "0", fontSize: "1.75rem", fontWeight: "700" }}>
                    Test address location
                </p>
                {Auth.loggedIn() ? (
                <>
                  <Link onClick={Auth.logout}>Logout</Link>
                </>
              ) : (
                <Link onClick={() => setShowModal(true)}>Login/Sign Up</Link>
              )}
            </div>
        </header>
    );
};

export default Header;
