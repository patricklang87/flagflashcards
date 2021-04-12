import { useSelector, useDispatch } from 'react-redux';
import { toggleMemorization } from '../redux/cardFlip';
import RegionSelector from './regionSelector';
import SearchBar from './searchBar';

const KnownFlags = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.flipCard.deck);
    const searchTerm = useSelector(state => state.flipCard.searchTerm);
    const currentRegion = useSelector(state => state.flipCard.region);

    let currentDeckByRegion = cards;
    if (currentRegion !== "All Regions") {
        currentDeckByRegion = cards.filter((card) => {
            return (card.region === currentRegion)
        });
    }
    const currentDeck = currentDeckByRegion.filter((card) => {
        return (card.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    const unmemorizedCards = currentDeck.filter((card) => {
        return !card.isMemorized;
    }).map((card) => {
        return (
            <div className="unmemorizedFlag" onClick={() => dispatch(toggleMemorization(card.name))} >
                <img src={card.flag} alt={card.name} />
                <h4>{card.name}</h4>
            </div>
        );
    });

    const memorizedCards = currentDeck.filter((card) => {
        return card.isMemorized;
    }).map((card) => {
        return (
            <div className="memorizedFlag" onClick={() => dispatch(toggleMemorization(card.name))} >
                <img src={card.flag} alt={card.name} />
                <h4>{card.name}</h4>
            </div>
        );
    });

    return (
        <div>
            <h1>Manage Flags</h1>
            <RegionSelector />
            <SearchBar />
            <div className="knownAndUnknownFlags">
                <div>
                    <h2>Unmemorized</h2>
                    <div className="memFlagList">
                        {unmemorizedCards}
                    </div>     
                </div>
                <div>
                    <h2>Memorized</h2>
                    <div className="memFlagList">
                        {memorizedCards}
                    </div>  
                </div>
            </div>
        </div>
        
    );
}

export default KnownFlags;