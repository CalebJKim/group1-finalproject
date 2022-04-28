import './Home.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className = "wholepage">
            <div className="container">
                <div className="header">Welcome to Cal Dining!</div>
                <div className="subheader">Where will you eat today?</div>
            </div>
            <div className = "diningcards">
                    
                        <div className = "card1">
                            <Link to={"/crossroads"} style={{ textDecoration: 'none' }} >
                            <div className = "captionback">
                                <div className = "cardcaption">
                                    Crossroads
                                </div>
                            </div>
                            </Link>
                        </div>
                    
                    <div className = "card2">
                        <Link to={"/cafe3"} style={{ textDecoration: 'none' }} >
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Café 3
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className = "card3">
                        <Link to={"/clarkkerr"} style={{ textDecoration: 'none' }} >
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Clark Kerr
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className = "card4">
                        <Link to={"/foothill"} style={{ textDecoration: 'none' }} >
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Foothill
                            </div>
                        </div>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default Home;