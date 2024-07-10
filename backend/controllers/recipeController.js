const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRecipe = async (req, res) => {
  const { name, ingredients, instructions, nutritionalInfo, cuisine, dietType } = req.body;

  const recipe = new Recipe({
    name,
    ingredients,
    instructions,
    nutritionalInfo,
    cuisine,
    dietType
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
