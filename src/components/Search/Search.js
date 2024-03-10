import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';

const Search = ({ existingSearchText, closeModal, searchProduct }) => {
  const [textToSearch, setTextToSearch] = useState(existingSearchText);

  const searchText = (event) => {
    event.preventDefault();
    searchProduct(textToSearch);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setTextToSearch(event.target.value);
  };

  return (
    <div className='search-container'>
      <div className='close-modal-header'>
        <div className='close-modal' onClick={() => closeModal()}>
          <span className='close-bar close-bar-1'></span>
          <span className='close-bar close-bar-2'></span>
          <span className='close-bar close-bar-3'></span>
        </div>
      </div>
      <div className='search-box'>
        <div className='search-form'>
          <form onSubmit={searchText}>
            <input
              type='text'
              placeholder='Type to search'
              value={textToSearch}
              onChange={handleChange}
              className='search-input'
            ></input>
            <button type='submit' value='submit' className='search-button'>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
