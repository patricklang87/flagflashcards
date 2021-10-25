import { useSelector } from 'react-redux';

const Home = () => {
    const flags = useSelector(state => state.flipCard.deck);

    let flagsPrepped = flags.map((country) => {
        return (
            <img src={country.flags.png} alt={country.name} />
        );
    });

    return (
        <>
            <h1>Learn Your Flags</h1>
            <h2>Test yourself on the flags of countries and territories around the world.</h2>
            {/* {(flags.length === 0) && <p style={{color: 'red'}}>There was an error communicating with the Restcountries API. Please try again soon.</p>} */}
            <div className = "flagBanner">
                {flagsPrepped}
            </div>
        </>
    );
}

export default Home;