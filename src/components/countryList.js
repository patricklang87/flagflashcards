import { useSelector } from 'react-redux';
import RegionSelector from './regionSelector';
import SearchBar from './searchBar';

const CountryList = () => {
    let deck = useSelector(state => state.flipCard.deck);
    let currentRegion = useSelector(state => state.flipCard.region);
    let searchTerm = useSelector(state => state.flipCard.searchTerm);

    let currentDeckByRegion = deck;
    if (currentRegion !== "All Regions") {
        currentDeckByRegion = deck.filter((card) => {
            return (card.region === currentRegion)
        });
    }

    let filteredDeck = currentDeckByRegion.filter((card) => {
        return card.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    let displayDeck = filteredDeck.map((country) => {
        let alt = `The flag of ${country.name}`;
        
        return (
        <div className="nameFlagDisplay">
            <div className="countryInfo">
                <h2>{country.name}</h2>
                <h3>Capital City: {country.capital}</h3>
                <h3>Estimated Population: {country.population}</h3>
                <h3>Subregion: {country.subregion}, Region: {country.region}</h3>     
            </div>
            <img className="flagImage" src={country.flag} alt={alt} />
        </div>);
    });

    const noResults = <h3>This search term returned no results. Please try a different term or region.</h3>

    return (
        <>
            <h1>Country and Territory Info: {currentRegion}</h1>
            <RegionSelector />
            <SearchBar />
            <div className="flagDisplay">
                {(displayDeck.length > 0) ? displayDeck : noResults}
            </div>
        </>
    );
}

export default CountryList;