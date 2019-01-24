import React, { Component } from 'react';
import './App.css';
import CocktailsContainer from './components/CocktailsContainer';
import CocktailDetailsContainer from './components/CocktailDetailsContainer';
import AddCocktailContainer from './components/AddCocktailContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={CocktailsContainer} />
        <Route exact path='/new' component={AddCocktailContainer} />
        <Route
          path='/cocktail/:cocktailId'
          component={CocktailDetailsContainer}
        />
      </div>
    );
  }
}

export default App;
