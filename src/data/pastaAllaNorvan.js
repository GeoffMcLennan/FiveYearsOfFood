import { Unit } from '../utils/measurementUtils'

export const pastaAllaNorvan = {
  recipeName: 'Pasta alla Norvan',
  story: 'Pasta for when you have a bit more space to prep, and access to an oven! This baked pasta will give you delicious crispy edges, melty mozzarella, and stuffed pasta in a savoury sauce, but can still be packed with whatever meat and veggies you prefer! This pasta pairs well with weed gummies and the unfounded fear of your in-laws walking in.',
  info: {
    prepTime: '20 minutes',
    cookTime: '40 minutes'
  },
  images: [
    'https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/AF872CFF-7FCB-4290-9C71-40ACA3EEEBBF_1_105_c.cropped.jpeg'
  ],
  ingredients: [{
    sectionName: 'Pasta sauce',
    ingredientList: [{
      quantity: 1,
      unit: Unit.TABLESPOON,
      ingredient: 'Olive oil'
    }, {
      quantity: 1,
      unit: 'can',
      ingredient: 'Crushed tomatoes'
    }, {
      quantity: 1,
      unit: '',
      ingredient: 'Yellow onion'
    }, {
      quantity: 4,
      unit: 'cloves',
      ingredient: 'Garlic'
    }, {
      quantity: 1,
      unit: Unit.TABLESPOON,
      ingredient: 'Dried oregano'
    }]
  }, {
    sectionName: 'Pasta',
    ingredientList: [{
      quantity: 1,
      unit: 'package',
      ingredient: 'Your favourite tortellini or ravioli'
    }]
  }, {
    sectionName: 'Baking',
    ingredientList: [{
      quantity: 1,
      unit: 'ball',
      ingredient: 'Fresh mozzarella'
    }, {
      quantity: 100,
      unit: Unit.GRAM,
      ingredient: 'Grated parmesan cheese'
    }]
  }],
  instructions: [
    'Fill a large pot with water, salt it generously, and set it to boil while prepping the rest of the ingredients.',
    'Preheat the oven to 450F.',
    'Dice the onion and peel and rough chop the garlic.',
    'Put an oven-safe pan over medium heat, and add enough olive oil to coat the bottom of the pan.',
    'Saute the onions until they soften, about 2-3 minutes. Add the garlic and saute further for another 2 minutes.',
    'Add salt and pepper to taste.',
    'Add the can of crushed tomatoes, and reduce the heat to medium-low to bring the sauce to a simmer.',
    'Stir in the dried oregano and any other spices to taste. If any more salt or pepper are required, add it now.',
    'Once the water is boiling, add the pasta and cook according to the packages instructions.',
    'Reserve some of the pasta water, then drain the pasta. Stir the pasta into the pan with the sauce.',
    'If the sauce is too thick, add some of the pasta water until it loosens but still clings to the pasta.',
    'Slice the mozzarella and shingle it over the pan. Sprinkle the parmesan cheese over top as well.',
    'Place the pan in the oven, and bake until the cheese is melted and slightlly browned.',
    'Slice it like lasagna and serve! (Optionally with shredded basil)'
  ]
}