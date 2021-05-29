import './Search.css';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';

const Search = ({ handleSearch }) => {
    
    const [ query, setQuery ] = useState('');
    const queryInput = useRef(null);

    const onSearch = (e) => {
        e.preventDefault();
        handleSearch(query);
    }

    const handleClear = (e) => {
        e.preventDefault();
        setQuery('');
        queryInput.current.value = '';
        handleSearch(query);
    };
    

    return (
        <div className='search-bar'>
            <form onSubmit= { onSearch }>
                <input type="text" 
                       ref={ queryInput }
                       onChange={ (e) => setQuery(e.target.value) } />
                <button>search</button>
                <button onClick={ handleClear }>X</button>
            </form>
        </div>
    );
};

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};


export default Search;