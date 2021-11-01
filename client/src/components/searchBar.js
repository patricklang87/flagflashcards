import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm, deleteSearchTerm } from '../redux/cardFlip';

const SearchBar = () => {
    let dispatch = useDispatch();

    const onChange = (e) => {
        let newSearchTerm = e.target.value;
        dispatch(updateSearchTerm(newSearchTerm));
    }

    const onClick = () => {
        dispatch(deleteSearchTerm());
    }

    return (
        <div>
            <label for="searchBar">Search: </label>
            <input onChange={onChange} name="searchBar" type="text" />
             <button onClick={onClick} >X</button>
        </div>
        
    );
}

export default SearchBar;