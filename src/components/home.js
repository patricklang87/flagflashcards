import { useSelector } from 'react-redux';

const Home = () => {
    const flags = useSelector(state => state.flipCard.deck);

    let flagsPrepped = flags.map((country) => {
        return (
            <img src={country.flag} alt={country.name} />
        );
    });

    return (
        <>
            <h1>Countries and Territories</h1>
            <h2>Test yourself on the flags of countries and territories around the world.</h2>
            <div className = "flagBanner">
                {flagsPrepped}
            </div>
        </>
    );
}

export default Home;