import './Search.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Search = ({ handleSearch }) => {
    
    const [ query, setQuery ] = useState('');

    const onSearch = (e) => {
        e.preventDefault();
        handleSearch(query);
    }
    

    return (
        <div className='search-bar'>
            <form onSubmit= { onSearch }>
                <input type="text" 
                       onChange={ (e) => setQuery(e.target.value) } />
                <button>search</button>
            </form>
        </div>
    );
};

Search.propTypes = {
    handleSearch: PropTypes.func.isRequired,
};


export default Search;