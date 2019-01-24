import React from 'react';
import AddCocktail from './AddCocktail';
import { connect } from 'react-redux';

class AddCocktailContainer extends React.Component {
  addCocktail = cocktail => {
    this.props.dispatch({
      type: 'ADD_COCKTAIL',
      payload: {
        id: Math.ceil(Math.random() * 10000).toString(),
        ...cocktail
      }
    });
  };

  render() {
    return (
      <div>
        <AddCocktail addCocktail={this.addCocktail} />
      </div>
    );
  }
}

export default connect()(AddCocktailContainer);
