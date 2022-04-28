import './Home.css';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="header">Welcome to Cal Dining!</div>
                <div className="subheader">Where will you eat today?</div>
            </div>
            <div className = "diningcards">
                    <div className = "card1">
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Crossroads
                            </div>
                        </div>
                    </div>

                    <div className = "card2">
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Café 3
                            </div>
                        </div>
                    </div>
                    <div className = "card3">
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Clark Kerr
                            </div>
                        </div>
                    </div>
                    <div className = "card4">
                        <div className = "captionback">
                            <div className = "cardcaption">
                                Foothill
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Home;