import { Unit } from '../utils/measurementUtils';

export const aVerySpicySalad = {
  recipeName: 'A Very Spicy Salad',
  story: 'A simple salad that probably could use a little less chile oil, but very tasty anyways! Fruit or veggies like cherry tomatoes, fennel, avocado, or apple can easily be included depending on what flavour profile you\'re looking for. Pairs very nicely with pasta and with making fun of your partner on social media',
  info: {
    prepTime: '5 minutes',
    cookTime: '5 minutes'
  },
  images: [
    'https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/A6A63D9D-7917-44C1-8F61-7C31A07A7B67_1_105_c.jpeg'
  ],
  ingredients: [{
    sectionName: 'Dressing',
    ingredientList: [{
      quantity: 0.25,
      unit: Unit.CUP,
      ingredient: 'Spicy chile oil'
    }, {
      quantity: 0.125,
      unit: Unit.CUP,
      ingredient: 'Balsamic or red wine vinegar'
    }, {
      quantity: 1,
      unit: 'lemon',
      ingredient: 'Zest and juice'
    }, {
      quantity: 1,
      unit: Unit.TABLESPOON,
      ingredient: 'Dijon mustard'
    }, {
      unit: 'To taste',
      ingredient: 'Salt and pepper'
    }]
  }, {
    sectionName: 'Salad',
    ingredientList: [{
      quantity: 2,
      unit: Unit.CUP,
      ingredient: 'Arugula'
    }, {
      quantity: 100,
      unit: Unit.GRAM,
      ingredient: 'Parmesan cheese'
    }, {
      unit: 'To taste',
      ingredient: 'Dressing'
    }]
  }],
  instructions: [
    'Mix together all dressing ingredients. Substitute a portion of the chile oil with some nice olive oil if you don\'t want to hear complaints from your partner.',
    'In a large bowl, mix together the arugula with as much dressing as is preferred.',
    'Using a vegetable peeler, peel slices of parmesan into the mixing bowl or directly onto the plate after plating.',
    'Optionally finish with some extra fresh-cracked pepper or flaky salt.'
  ]
}