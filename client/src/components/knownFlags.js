import { useSelector, useDispatch } from 'react-redux';
import RegionSelector from './regionSelector';
import SearchBar from './searchBar';
import { addFlag, removeFlag } from '../utils/memorized';
import { addMemorizedFlag, removeMemorizedFlag } from '../redux/userRedux';

const KnownFlags = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.user);
    const cards = useSelector(state => state.flipCard.deck);
    const searchTerm = useSelector(state => state.flipCard.searchTerm);
    const currentRegion = useSelector(state => state.flipCard.region);
    const memorized = useSelector(state => state.user.memorizedFlags);

    let currentDeckByRegion = cards;
    if (currentRegion !== "All Regions") {
        currentDeckByRegion = cards.filter((card) => {
            return (card.region === currentRegion)
        });
    }
    const currentDeck = currentDeckByRegion.filter((card) => {
        return (card.name.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    //handle clicks on cards
    const handleMemorize = (name) => {
        dispatch(addMemorizedFlag(name));
        if (currentUser) addFlag(name);
    }

    const handleForget = (name) => {
        dispatch(removeMemorizedFlag(name));
        if (currentUser) removeFlag(name);
    }

    // memorized and unmemorized cards
    const unmemorizedCards = currentDeck.filter((card) => {
        return !memorized.includes(card.name);
    }).map((card) => {
        return (
            <div key={card.name + 'unmem'} className="unmemorizedFlag" onClick={() => handleMemorize(card.name)} >
                <img src={card.flags.png} alt={card.name} />
                <h4>{card.name}</h4>
            </div>
        );
    });

    const memorizedCards = currentDeck.filter((card) => {
        return memorized.includes(card.name);
    }).map((card) => {
        return (
            <div key={card.name + "unmem"} className="memorizedFlag" onClick={() => handleForget(card.name)} >
                <img src={card.flags.png} alt={card.name} />
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
                    <div style={{textAlign: 'center'}}>
                        <h2>Unmemorized</h2>
                    </div>
                    <div className="memFlagList">
                        {unmemorizedCards}
                    </div>     
                </div>
                <div>
                    <div style={{textAlign: 'center'}}>
                    <h2>Memorized</h2>
                    </div>
                    <div className="memFlagList">
                        {memorizedCards}
                    </div>  
                </div>
            </div>
        </div>
        
    );
}

export default KnownFlags;