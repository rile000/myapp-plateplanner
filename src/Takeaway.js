import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Takeaway.css';

function Takeaway() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const foodTypes = ['pizza', 'burger', 'sushi', 'tacos', 'curry'];

  const [takeaways, setTakeaways] = useState([
    {
      id: 1,
      name: 'McDonalds',
      description: 'American fast food',
      deliveryFee: '£3.99',
      image: 'placeholder',
      keywords: ['burger', 'fries', 'fast food'],
    },
    {
      id: 2,
      name: 'Pizza Hut',
      description: 'Pizza, wings, sides',
      deliveryFee: '£4.99',
      image: 'placeholder',
      keywords: ['pizza', 'wings', 'sides'],
    },
    {
      id: 3,
      name: 'Subway',
      description: 'Sandwiches',
      deliveryFee: '£2.99',
      image: 'placeholder',
      keywords: ['sub', 'sandwich', 'bread'],
    },
    {
      id: 4,
      name: 'KFC',
      description: 'Fried chicken',
      deliveryFee: '£5.99',
      image: 'placeholder',
      keywords: ['fried chicken', 'chicken'],
    },
    {
      id: 5,
      name: 'TEST',
      description: 'Veg',
      deliveryFee: '£5.99',
      image: 'placeholder',
      keywords: ['vegatarian', 'salad'],
    },
  ]);

  useEffect(() => {
    if (searchText !== '') {
      const regex = new RegExp(`^${searchText}`, 'i');
      setSuggestions(foodTypes.filter(foodType => regex.test(foodType)));
      setTakeaways(takeaways.filter(takeaway => {
        const keywords = takeaway.keywords || []; // handle case where keywords are not defined
        return regex.test(takeaway.name) || keywords.some(keyword => regex.test(keyword));
      }));
    } else {
      setSuggestions([]);
      setTakeaways(takeaways); // reset the takeaways state to its initial value when the search text is empty
    }
  }, [searchText]);

  useEffect(() => {
    if (searchText !== '') {
      const regex = new RegExp(`^${searchText}`, 'i');
      setSuggestions(foodTypes.filter(foodType => regex.test(foodType)));
    } else {
      setSuggestions([]);
    }
  }, [searchText]);

  const handleSearchChange = e => {
    const keyword = e.target.value.toLowerCase();
    setSearchText(keyword);
    if (keyword !== '') {
      setTakeaways(
        takeaways.filter(takeaway =>
          takeaway.keywords.some(
            kw => kw.toLowerCase().indexOf(keyword) !== -1
          )
        )
      );
    } else {
      setTakeaways([
        {
          id: 1,
          name: 'McDonalds',
          description: 'American fast food',
          deliveryFee: '£3.99',
          image: 'https://via.placeholder.com/150',
          keywords: ['burger', 'fries', 'fast food'],
        },
        {
          id: 2,
          name: 'Pizza Hut',
          description: 'Pizza, wings, sides',
          deliveryFee: '£4.99',
          image: 'https://via.placeholder.com/150',
          keywords: ['pizza', 'wings', 'sides'],
        },
        {
          id: 3,
          name: 'Subway',
          description: 'Sandwiches',
          deliveryFee: '£2.99',
          image: 'https://via.placeholder.com/150',
          keywords: ['sub', 'sandwich', 'bread'],
        },
        {
          id: 4,
          name: 'KFC',
          description: 'Fried chicken',
          deliveryFee: '£5.99',
          image: 'https://via.placeholder.com/150',
          keywords: ['fried chicken', 'chicken'],
        },
        {
          id: 5,
          name: 'TEST',
          description: 'Veg',
          deliveryFee: '£5.99',
          image: 'https://via.placeholder.com/150',
          keywords: ['vegatarian', 'salad'],
        },
      ]);
    }
  };
  
  const handleSuggestionClick = suggestion => {
    setSearchText(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="takeaway-container">
      <Link to="/" className="return-button">Return</Link>
      <h1>Takeaway Page</h1>
      <div className="search-container">
        <Input
          type="text"
          placeholder="Food, drink..."
          value={searchText}
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map(suggestion => (
              <li key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="takeaway-list">
        {takeaways.map(takeaway => (
          <div key={takeaway.id} className="takeaway-card">
            <img src={takeaway.image} alt={takeaway.name} />
            <div className="takeaway-info">
              <h2>{takeaway.name}</h2>
              <p>{takeaway.description}</p>
              <p>Delivery fee: {takeaway.deliveryFee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Takeaway;
