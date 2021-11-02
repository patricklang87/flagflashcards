import { useSelector } from 'react-redux';
import Auth from '../auth/Auth';
import './home.css';

const Home = () => {
    const flags = useSelector(state => state.flipCard.deck);

    let flagsPrepped = flags.map((country) => {
        return (
            <img key={country.name + 'home'} src={country.flags.png} alt={country.name} />
        );
    });

    return (
        <div className="homeScreen">  
            <div className="landingBox">
                <div className="titleBox">
                    <h1>Learn Your Flags</h1>
                    <h2>Learn to recognize the flags of countries and territories around the world.</h2>
                </div>
                <div className="authBox">
                    <Auth />
                </div>
            </div>  
            <div>
                <div className = "flagBanner">
                    {flagsPrepped}
                </div>
            </div>
        </div>
    );
}

export default Home;