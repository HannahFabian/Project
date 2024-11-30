import React, { useState } from 'react';
import axios from 'axios';
import './UniversityList.css';

function UniversityList() {
  const [country, setCountry] = useState('');
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearched(true);
    setLoading(true);
    setError(null);

    const url = `http://universities.hipolabs.com/search?country=${country.trim()}`;
    console.log('Country:', country);
    console.log('URL:', url);

    try {
      const response = await axios.get(url);
      console.log('API data received', response.data);

      if (response.data && response.data.length > 0) {
        setUniversities(response.data);
      } else {
        setUniversities([]);
        setError('We dont have what you are looking for :(');
      }
    } catch (err) {
      console.error('Erro from the API:', err);
      setError('There was a problem loading the information.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="body-custom">
      <div className="container-box1">
        <h1 className="titleFair">Worldwide Career Fair</h1>

        {/* Formulario de búsqueda */}
        <form className="university-list-form" onSubmit={handleSearch}>
          <input
            className="university-list-form-input"
            type="text"
            placeholder="Look for a country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          {!searched && (
            <button
              className="university-list-form-button"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Search'}
            </button>
          )}
        </form>

        {/* Mensajes de error */}
        {searched && error && (
          <p className="university-list-error-message">{error}</p>
        )}

        {/* Resultados de búsqueda */}
        <ul className="university-list-results">
          {universities.length > 0 ? (
            universities.map((university, index) => (
              <li 
                key={index} 
                className="university-list-result-item"
              >
                {university.name}
              </li>
            ))
          ) : (
            searched && (
              <p className="university-list-no-results">
                Make sure you are typing a country name
              </p>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default UniversityList;


