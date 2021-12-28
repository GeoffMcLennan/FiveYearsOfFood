import { Unit } from '../utils/measurementUtils'

export const sweetPotatoAppleHash = {
  recipeName: 'Sweet Potato and Apple Hash',
  story: 'A one pan hash that is perfect for when you want to get fancy with your breakfast while camping. You could easily swap out the meat for whatever is at hand, as the star of the show is really the sweet-savouriness of the sweet potato and apple. Pairs wonderfully with Salt-Spring cider and gorgeous views.',
  info: {
    prepTime: '30 minutes',
    cookTime: '30 minutes'
  },
  images: [
    'https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/001F6EFF-889C-43A6-986A-FF7AD699F7A0_1_105_c.cropped.jpeg'
  ],
  ingredients: [{
    sectionName: 'Hash',
    ingredientList: [{
      quantity: 2,
      unit: Unit.LB,
      ingredient: 'Sweet potatoes'
    }, {
      quantity: 3, 
      ingredient: 'Apples'
    }, {
      quantity: 1,
      ingredient: 'Large sweet onion'
    }, {
      quantity: 200,
      unit: Unit.GRAM,
      ingredient: 'Bacon, pancetta, or prosciutto'
    }, {
      quantity: 1,
      unit: Unit.TABLESPOON,
      ingredient: 'Butter or vegetable oil'
    }, {
      quantity: 4,
      ingredient: 'Eggs'
    }, {
      quantity: 1,
      unit: Unit.CUP,
      ingredient: 'Arugula'
    }, {
      quantity: 1,
      unit: Unit.TEASPOON,
      ingredient: 'Smoked paprika'
    }, {
      unit: 'To taste',
      ingredient: 'Salt and pepper'
    }]
  }],
  instructions: [
    'Dice the sweet potato, apple, onion, and meat into bite-size chunks.',
    'On a cast-iron pan over medium heat, add some of the butter or oil and add the meat. Cook until it is slightly crispy and has released most of its fat.',
    'Remove the meat from the pan. Add the diced sweet potato and saute until it starts getting some crispy edges and is cooked most of the way through, up to 10 minutes.',
    'Reserve some paprika for plating. Season with the remaining smoked paprika, salt, and pepper.',
    'Remove the sweet potato from the pan, and add more butter or oil as needed. Add the onion to the pan and saute until it starts to soften.',
    'Add the apple to the pan, and continue to saute until the apple and onions start getting some colour.',
    'Add the meat and sweet potato and stir so everything is fully incorporated. Spread it so that it is evenly distributed across the pan.',
    'Using a spatula, make four small indentations on the surface of the hash. Carefully crack the eggs into these indentations.',
    'Cover with a lid or another pan and reduce the heat, letting the steam cook the eggs. Steam until the egg whites are mostly firm, 2-3 minutes',
    'Sprinkle the remaining paprika, and salt and pepper to taste.',
    'Top with the arugula and serve!'
  ]
}