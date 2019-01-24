import React from 'react';
import Cocktails from './Cocktails';
import { connect } from 'react-redux';

class CocktailsContainer extends React.Component {
  render() {
    return (
      <div>
        <Cocktails cocktails={this.props.cocktails} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { cocktails: state.cocktails };
};

export default connect(mapStateToProps)(CocktailsContainer);
