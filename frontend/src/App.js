import React from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div>
      <h1>Health Recipe App</h1>
      <RecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;
