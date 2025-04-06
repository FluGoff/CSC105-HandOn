import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FavoritesPages() {
  const navigate = useNavigate();
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');
  const [size, setSize] = useState('');
  const [numberError, setNumberError] = useState('');
  const [queryError, setQueryError] = useState('');
  const [sizeError, setSizeError] = useState('');

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    setNumberError('');
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
    setQueryError('');
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
    setSizeError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (!number || isNaN(number) || parseInt(number) < 1 || parseInt(number) > 100) {
      setNumberError('Please enter a number between 1 and 100.');
      isValid = false;
    }

    if (!query) {
      setQueryError('Please select either "love" or "like".');
      isValid = false;
    }

    if (!size) {
      setSizeError('Please select a valid size.');
      isValid = false;
    }

    if (isValid) {
      navigate(`/fav/${number}?q=${query}&size=${size}`);
    }
  };

  return (
    <div>
      <h2>Favourites</h2>
      <p>This is the Favourites Page.</p>

      <h3>Add to Favourites Detail</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number">Number (1-100):</label>
          <input
            type="number"
            id="number"
            value={number}
            onChange={handleNumberChange}
            min="1"
            max="100"
          />
          {numberError && <p style={{ color: 'red', fontSize: '0.8em' }}>{numberError}</p>}
        </div>

        <div>
          <label>Query Parameter (q):</label>
          <div>
            <label>
              <input
                type="radio"
                name="query"
                value="love"
                checked={query === 'love'}
                onChange={handleQueryChange}
              />
              love
            </label>
            <label>
              <input
                type="radio"
                name="query"
                value="like"
                checked={query === 'like'}
                onChange={handleQueryChange}
              />
              like
            </label>
          </div>
          {queryError && <p style={{ color: 'red', fontSize: '0.8em' }}>{queryError}</p>}
        </div>

        <div>
          <label>Size Parameter (size):</label>
          <div>
            <label>
              <input
                type="radio"
                name="size"
                value="small"
                checked={size === 'small'}
                onChange={handleSizeChange}
              />
              small
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="medium"
                checked={size === 'medium'}
                onChange={handleSizeChange}
              />
              medium
            </label>
            <label>
              <input
                type="radio"
                name="size"
                value="large"
                checked={size === 'large'}
                onChange={handleSizeChange}
              />
              large
            </label>
          </div>
          {sizeError && <p style={{ color: 'red', fontSize: '0.8em' }}>{sizeError}</p>}
        </div>

        <button type="submit">Go to Favorite Detail</button>
      </form>
    </div>
  );
}

export default FavoritesPages;