import React from 'react';
import './CocktailDetails.css';

const CocktailDetails = props => {
  const cocktailDetail = props.cocktail;
  return (
    <div>
      <h1>{cocktailDetail.drink}</h1>
      <img src={cocktailDetail.thumbnail} alt={cocktailDetail.drink} />
      <table>
        <tbody>
          <tr>
            <td>Category:</td>
            <td>{cocktailDetail.category}</td>
          </tr>
          <tr>
            <td>Alcoholic:</td>
            <td>{cocktailDetail.alcoholic}</td>
          </tr>
          <tr>
            <td>Glass:</td>
            <td>{cocktailDetail.glass}</td>
          </tr>
          <tr>
            <td>Instructions:</td>
            <td>{cocktailDetail.instructions}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CocktailDetails;
