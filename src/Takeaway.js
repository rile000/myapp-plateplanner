import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Takeaway.css';
import logo from './logo transparent.png';
import img1 from './img1.png';
import img3 from './img3.png';
import img18 from './img18.jpg';
import img19 from './img19.jpg';
import img20 from './img20.jpg';

function Takeaway() {
  const [searchText, setSearchText] = useState(''); // statevariable to track search input
  const [suggestions, setSuggestions] = useState([]);// state variable to track suggested 
// food type array
  const foodTypes = ['pizza', 'burger', 'sushi', 'tacos', 'vegies','chicken','fastfood','fries','drinks','halal','indian'];
// takeaway array
  const [takeaways, setTakeaways] = useState([
    {
      id: 1,
      name: 'McDonalds',
      description: 'American fast food',
      deliveryFee: '£3.99',
      image: img3,
      keywords: ['burger', 'fries', 'fastfood','chicken'],
      link: 'https://www.just-eat.co.uk/restaurants-mcdonalds-hullcottinghamroad/menu'
    },
    {
      id: 2,
      name: 'Pizza Hot',
      description: 'Pizza, wings, sides',
      deliveryFee: '£4.99',
      image: img18,
      keywords: ['pizza', 'wings', 'sides','drinks'],
      link:'https://www.just-eat.co.uk/restaurants-pizzahothu5/menu'
    },
    {
      id: 3,
      name: 'Subway',
      description: 'Sandwiches',
      deliveryFee: '£2.99',
      image: img19,
      keywords: ['sub', 'sandwich', 'bread'],
      link:'https://www.just-eat.co.uk/restaurants-subwaycottinghamroad-hull/menu'
    },
    {
      id: 4,
      name: 'KFC',
      description: 'Fried chicken',
      deliveryFee: '£5.99',
      image: img1,
      keywords: ['fried chicken', 'chicken','fastfood'],
      link:'https://www.just-eat.co.uk/restaurants-kfc-hulbeverley-road-hull/menu'
    },
    {
      id: 5,
      name: 'Alachi',
      description: 'Vegeterian,Halal,Indian',
      deliveryFee: '£5.99',
      image: img20,
      keywords: ['vegatarian', 'salad','veggie','halal','indian'],
      link:'https://www.just-eat.co.uk/restaurants-alachi-hull/menu'
    },
  ]);
// useeffect hook, updates takeaway list and suggestion list on search
  useEffect(() => {
    if (searchText !== '') {//check if empty 
      const regex = new RegExp(`^${searchText}`, 'i');//match string with whats typed
      // filter array to match search text, set array as suggestion
      setSuggestions(foodTypes.filter(foodType => regex.test(foodType)));
      // filter takeaways array to match search and keywords, set array as takeaway
      setTakeaways(takeaways.filter(takeaway => {
        const keywords = takeaway.keywords || []; // handle case where keywords are not defined
        return regex.test(takeaway.name) || keywords.some(keyword => regex.test(keyword));
      }));
    } else {
      // reset suggestions and takeaways to original on search bar empty
      setSuggestions([]);
      setTakeaways(takeaways); // reset the takeaways state to its initial value when the search text is empty
    }
  }, [searchText]);
//useeffect hook to update suggestion list on search input
  useEffect(() => {
    if (searchText !== '') {//run when empty
      const regex = new RegExp(`^${searchText}`, 'i');
      setSuggestions(foodTypes.filter(foodType => regex.test(foodType)));
    } else {
      setSuggestions([]);
    }
  }, [searchText]);//when searchtext changes trigger
//search input change
  const handleSearchChange = e => {
    const keyword = e.target.value.toLowerCase();//new varaible is whats searched
    setSearchText(keyword);//update search text state with keyword
    if (keyword !== '') {//check if empty
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
          image: img3,
          keywords: ['burger', 'fries', 'fastfood','chicken'],
          link: 'https://www.just-eat.co.uk/restaurants-mcdonalds-hullcottinghamroad/menu'
        },
        {
          id: 2,
          name: 'Pizza Hot',
          description: 'Pizza, wings, sides',
          deliveryFee: '£4.99',
          image: img18,
          keywords: ['pizza', 'wings', 'sides','drinks'],
          link:'https://www.just-eat.co.uk/restaurants-pizzahothu5/menu'
        },
        {
          id: 3,
          name: 'Subway',
          description: 'Sandwiches',
          deliveryFee: '£2.99',
          image: img19,
          keywords: ['sub', 'sandwich', 'bread'],
          link:'https://www.just-eat.co.uk/restaurants-subwaycottinghamroad-hull/menu'
        },
        {
          id: 4,
          name: 'KFC',
          description: 'Fried chicken',
          deliveryFee: '£5.99',
          image: img1,
          keywords: ['fried chicken', 'chicken','fastfood'],
          link:'https://www.just-eat.co.uk/restaurants-kfc-hulbeverley-road-hull/menu'
        },
        {
          id: 5,
          name: 'Alachi',
          description: 'Vegeterian,Halal,Indian',
          deliveryFee: '£5.99',
          image: img20,
          keywords: ['vegatarian', 'salad','veggie','halal','indian'],
          link:'https://www.just-eat.co.uk/restaurants-alachi-hull/menu'
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
      <Link to="/mainpage" className="return-button">Return</Link>
      <img src={logo} alt="logo transparent" className="logo transparent" />
      <h1>Takeaway Page</h1>
      <div className="search-container">
      <Link to="/mainpage" className="return-button">Return</Link>
        <Input
          type="text"
          placeholder="Food, drink..."
          value={searchText}
          onChange={handleSearchChange}
          endAdornment={
            <InputAdornment position="end">   
              <SearchIcon />
            </InputAdornment> 
            //aniluom (2022) React mui input adornment API, GeeksforGeeks. 
            //Available at: https://www.geeksforgeeks.org/react-mui-inputadornment-api/.  
            //[online] [Accessed: April 20, 2023].
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
          <div key={takeaway.id} className="takeaway-card" onClick={() => window.open(takeaway.link, "_blank")}>
            <img src={takeaway.image} alt={takeaway.name} />
            <div className="takeaway-info">
              <h2>{takeaway.name}</h2>
              <p>{takeaway.description}</p>
              <p>Delivery Fee: {takeaway.deliveryFee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Takeaway;
