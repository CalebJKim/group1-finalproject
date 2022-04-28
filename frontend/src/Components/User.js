import './User.css';
import {useState} from "react";
import {Link} from "react-router-dom";

function User() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    return (
        <div className="container">
            <div className="header">Cal Dining</div>
            <input type="email" placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value)}} />
            <input type="password" placeholder="Password" onChange={(event) => {setLoginPassword(event.target.value)}} />
            <button>
                <Link to={"/home"} style={{ textDecoration: 'none'}} >
                <div>SIGN IN</div>
                </Link>
            </button>
            <button>
                <Link to={"/home"} style={{ textDecoration: 'none' }} >
                <div>SIGN UP</div>
                </Link>
            </button>
        </div>
    )
}

export default User;