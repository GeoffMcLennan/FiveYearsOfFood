import { Unit } from '../utils/measurementUtils'

export default {
  pastaallanelson: {
    recipeName: 'Pasta alla Nelson',
    story: 'This pasta is perfect for camping trips! Easily made in one pot, and you can add whatever vegetables/meats you can find to the sauce (in the case of Nelson\'s ballin\' grocer, this was olives and pancetta). This pairs well with a growler fill from the nearest brewery, and with a campsite nestled into the city of Nelson.',
    info: {
      prepTime: '15 minutes',
      cookTime: '20 minutes'
    },
    images: [
      'https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/847D2F61-B154-4649-B19E-A64D542DD013_1_105_c.cropped.jpeg'
    ],
    ingredients: [{
      sectionName: 'Pasta sauce',
      ingredientList: [{
        quantity: 1,
        unit: Unit.TABLESPOON,
        ingredient: 'Olive oil'
      }, {
        quantity: 3,
        unit: '',
        ingredient: 'Roma tomatoes'
      }, {
        quantity: 1,
        unit: '',
        ingredient: 'Red onion'
      }, {
        quantity: 4,
        unit: 'cloves',
        ingredient: 'Garlic'
      }, {
        quantity: 250,
        unit: Unit.GRAM,
        ingredient: 'Diced pancetta'
      }, {
        quantity: 250,
        unit: Unit.GRAM,
        ingredient: 'Pitted kalamata olives'
      }]
    }, {
      sectionName: 'Pasta',
      ingredientList: [{
        quantity: 1,
        unit: 'package',
        ingredient: 'Fettucine or linguini (or whatever is at the local grocer)'
      }]
    }, {
      sectionName: 'Plating',
      ingredientList: [{
        quantity: 100,
        unit: Unit.GRAM,
        ingredient: 'Grated parmesan cheese'
      }, {
        quantity: 0.5,
        unit: Unit.CUP,
        ingredient: 'Fresh basil'
      }]
    }],
    instructions: [
      'Light your butane camping stove, fill a pot with water, and set it to boil.',
      'Once boiling, add the pasta and cook according to the package instructions.',
      'Dice the tomatoes, onion and garlic. Give the olives a rough chop.',
      'Reserve some of the pasta water into a mug, drain the pasta into a bowl, and add a small amount of olive oil.',
      'Put the pot back on the stove set to medium, and add half the remaining olive oil.',
      'Add the pancetta and cook until the fat is mostly rendered and slightly crispy.',
      'Dump out the pancetta into the bowl with the pasta, reserving as much of the oil as possible.',
      'Add the onions, garlic and olives and cook until the onions start to soften.',
      'Add the tomatoes and stir them while cooking until the are broken up and create a sauce.',
      'Add the cooked pasta and pancetta back into the pot with the sauce, and add some of the pasta water.',
      'If the sauce is too thick add more of the pasta water.',
      'Portion the pasta into two (or more) bowls.',
      'Sprinkle parmesan cheese to taste on top of each bowl.',
      'Rough chop or tear the basil and add on top of each bowl.'
    ]
  }
}