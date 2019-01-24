import React from 'react';
import { Link } from 'react-router-dom';

const Cocktails = props => {
  const cocktails = props.cocktails;
  return (
    <div>
      <h1>Cocktail Explorer</h1>
      <ul>
        {cocktails.map(cocktail => (
          <li key={cocktail.id}>
            <Link to={`/cocktail/${cocktail.id}`}>{cocktail.drink}</Link>
          </li>
        ))}
      </ul>
      <Link to={'/new'}>Add new cocktail</Link>
    </div>
  );
};

export default Cocktails;
