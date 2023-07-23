import illustrationHero from '../assets/illustration-hero.svg';
import musicIcon from '../assets/icon-music.svg';

export default function OrderSummary() {
    return(
        <div className="card">
            <img className="media" src={illustrationHero}/>
            <div className="content">
                <h2 className="title">Order Summary</h2>
                <p className="description">You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!</p>
                <div className="plan">
                    <div className="container">
                        <img className="icon" src={musicIcon}/>
                        <div className="info">
                            <div className="name">Annual Plan</div>
                            <div className="price">$59.99/year</div>
                        </div>
                    </div>
                    <a href='#' className="change">Change</a>
                </div>
                <button className="btn btn-primary">Proceed to Payment</button>
                <button className="btn btn-secondary">Cancel Order</button>
            </div>
        </div>
    )
}