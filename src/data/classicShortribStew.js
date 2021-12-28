import { Unit } from '../utils/measurementUtils'

export const classicShortribStew = {
  recipeName: 'Classic Shortrib Stew',
  story: 'A time-tested stew that is super easy to throw in the pressure cooker but never fails to impress. The perfect meal to impress guests with, as long as you don\'t tell them that it took practically no time to whip up!',
  info: {
    prepTime: '15 minutes',
    cookTime: '1 hour'
  },
  images: [
    'https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/C37D6C5A-1092-4C0B-A630-DF6665365BDB_1_105_c.cropped.jpeg'
  ],
  ingredients: [{
    sectionName: 'Shortribs',
    ingredientList: [{
      quantity: 4,
      unit: Unit.LB,
      ingredient: 'Shortribs'
    }, {
      quantity: 2,
      ingredient: 'Carrots'
    }, {
      quantity: 2,
      unit: 'ribs',
      ingredient: 'Celery'
    }, {
      quantity: 2,
      ingredient: 'Shallots'
    }, {
      quantity: 3,
      unit: 'cloves',
      ingredient: 'Garlic'
    }, {
      quantity: 1,
      unit: Unit.CUP,
      ingredient: 'Red wine'
    }, {
      quantity: 1,
      unit: Unit.LITRE,
      ingredient: 'Beef broth'
    }, {
      quantity: 1,
      unit: 'sprig',
      ingredient: 'Rosemary'
    }, {
      quantity: 1,
      unit: 'bunch',
      ingredient: 'Thyme'
    }, {
      quantity: 1,
      unit: Unit.TABLESPOON,
      ingredient: 'Olive oil'
    }, {
      unit: 'To taste',
      ingredient: 'Salt and pepper'
    }]
  }, {
    sectionName: 'Mashed potatoes',
    ingredientList: [{
      quantity: 2,
      unit: Unit.LB,
      ingredient: 'Potatoes'
    }, {
      quantity: 0.25,
      unit: Unit.CUP,
      ingredient: 'Butter'
    }, {
      quantity: 0.25,
      unit: Unit.CUP,
      ingredient: 'Milk or cream'
    }, {
      unit: 'To taste',
      ingredient: 'Salt and pepper'
    }]
  }, {
    sectionName: 'Broccolini',
    ingredientList: [{
      quantity: 1,
      unit: 'bunch',
      ingredient: 'Broccolini'
    }, {
      quantity: 1,
      unit: Unit.TABLESPOON,
      ingredient: 'Olive oil'
    }, {
      quantity: 2,
      unit: Unit.TEASPOON,
      ingredient: 'Chili flakes'
    }]
  }],
  instructions: [
    'Set the instant pot to saute mode and let it warm up.',
    'Pat the shortribs dry, and season to taste with salt and pepper.',
    'Add the shortribs to the pot in batches to avoid crowding the pan. Sear them on all sides, 1-2 minutes per side.',
    'Peel the carrots, and give them a rough chop along with the celery. Dice the shallots and garlic.',
    'Once all of the shortribs have been seared, set them aside.',
    'Add the shallots and garlic and saute until the shallots start to soften. Season with salt and pepper. Add the carrots and celery.',
    'Deglaze the pot with the red wine, scraping the fond from the bottom of the pan.',
    'Add the shortribs back to the pan and add the beef broth. The shortribs should be mostly covered, but if needed add some water.',
    'Tie the rosemary and thyme with some kitchen twine and submerge it in the broth.',
    'Close the instant pot and set it to pressure cook. Set a timer for 1 hour.',
    'In a medium pot over high heat, add enough water to cover potatoes and season generously with salt.',
    'Peel and dice the potatoes and add them to the boiling water. Let them boil until fork tender.',
    'Drain the potatoes and put them back in the pot. Add the butter and cream and mash thoroughly.',
    'Pre-heat the oven to 400\u00b0F.',
    'Add the broccolini to a roasting pan. Drizzle olive oil over the broccolini.',
    'Season with the chili flakes, salt and pepper',
    'Roast the broccolini until seared and tender.',
    'To plate, add a portion of mashed potatoes to a wide bowl. Place 1-2 pieces of shortribs on top, and pour gravy over top.',
    'Add a portion of broccolini on top of the shortribs, and serve!'
  ]
}