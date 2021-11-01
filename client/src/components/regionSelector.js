import { useSelector, useDispatch } from 'react-redux';
import { changeRegion } from '../redux/cardFlip';

const RegionSelector = () => {
    let deck = useSelector(state => state.flipCard.deck);
    let dispatch = useDispatch();

    const allRegions = deck.map(country => country.region);
    const uniqueRegions = [...new Set(allRegions)];
    let regionList = uniqueRegions.map((region) => {
        return <option value={region} key={region}>{region}</option>;
    });

    const onChange = (e) => {
        let selectedRegion = e.target.value;
        dispatch(changeRegion(selectedRegion));
    }

    return (
        <>
        <label for="regionSelector">Select a region: </label>
        <select name="regionSelector" onChange={onChange} >
            <option value="All Regions" key="allRegions">All Regions</option>
            {regionList}
        </select>
        </>
    );
}


export default RegionSelector;
