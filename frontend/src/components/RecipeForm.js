import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [nutritionalInfo, setNutritionalInfo] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [dietType, setDietType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipe = { name, ingredients: ingredients.split(','), instructions, nutritionalInfo, cuisine, dietType };
    try {
      await axios.post('http://localhost:5000/api/recipes', recipe);
      alert('Recipe added successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Ingredients (comma-separated):</label>
        <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      </div>
      <div>
        <label>Instructions:</label>
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
      </div>
      <div>
        <label>Nutritional Info:</label>
        <input type="text" value={nutritionalInfo} onChange={(e) => setNutritionalInfo(e.target.value)} />
      </div>
      <div>
        <label>Cuisine:</label>
        <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
      </div>
      <div>
        <label>Diet Type:</label>
        <input type="text" value={dietType} onChange={(e) => setDietType(e.target.value)} />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
