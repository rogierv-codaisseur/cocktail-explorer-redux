import React from 'react';
import CocktailDetails from './CocktailDetails';
import { connect } from 'react-redux';

class CocktailDetailsContainer extends React.Component {
  render() {
    const cocktailId = this.props.match.params.cocktailId;
    const cocktail = this.props.cocktails.find(
      cocktail => cocktail.id === cocktailId
    );
    return (
      <div>
        <CocktailDetails cocktail={cocktail} />
        <p />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cocktails: state.cocktails };
};

export default connect(mapStateToProps)(CocktailDetailsContainer);
