import { useParams } from 'react-router-dom';
import { RecipePage } from '.';
import { NotFound } from './notFound';
import { Unit } from '../../utils/measurementUtils';
import data from '../../data';

export const RecipePageDataWrapper = (props) => {
  const params = useParams();
  const rawRecipeName = params.recipeName;
  console.log(rawRecipeName);
  const recipeName = unencodeRecipeName(rawRecipeName)
  console.log(recipeName)
  const recipe = data[recipeName]
  console.log(recipe)
  console.log(data)
  return recipe ? <RecipePage {...recipe} /> : <NotFound />;
}

const unencodeRecipeName = (rawRecipeName) => {
  return rawRecipeName.replaceAll('+', '');
}

const testRecipe = {
  recipeName: 'Foo Bar',
  story: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  info: {
    prepTime: '15 minutes',
    cookTime: '1 hour'
  },
  ingredients: [
    {
      sectionName: 'Section 1',
      ingredientList: [{
        quantity: 1,
        unit: Unit.CUP,
        ingredient: 'foo'
      }]
    },
    {
      sectionName: 'Section 2',
      ingredientList: [{
        quantity: 3,
        unit: Unit.TABLESPOON,
        ingredient: 'bar'
      }]
    }
  ],
  instructions: [
    'Foo the bar',
    'Baz for 15 minutes'
  ]
}