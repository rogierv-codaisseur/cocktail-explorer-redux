import React from 'react';
import { Link } from 'react-router-dom';

class AddCocktail extends React.Component {
  submitHandler = event => {
    event.preventDefault();

    this.props.addCocktail({
      drink: event.target.name.value,
      category: event.target.category.value,
      alcoholic: event.target.alcoholic.value,
      glass: event.target.glass.value,
      instructions: event.target.instructions.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <p>
            <label htmlFor='name'>
              Name: <input id='name' name='name' />
            </label>
          </p>
          <p>
            <label htmlFor='category'>
              Category: <input id='category' name='category' />
            </label>
          </p>
          <p>
            <label htmlFor='alcoholic'>
              Alcoholic: <input id='alcoholic' name='alcoholic' />
            </label>
          </p>
          <p>
            <label htmlFor='glass'>
              Glass: <input id='glass' name='glass' />
            </label>
          </p>
          <p>
            <label htmlFor='instructions'>
              Instructions: <input id='instructions' name='instructions' />
            </label>
          </p>
          <button type='Submit' value='Submit'>
            Submit
          </button>
        </form>
        <Link to='/'>Cocktail overview</Link>
      </div>
    );
  }
}

export default AddCocktail;
