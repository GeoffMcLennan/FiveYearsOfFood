export const Unit = {
  CUP: 'CUP',
  LITRE: 'LITRE',
  GRAM: 'GRAM',
  OZ: 'OZ',
  LB: 'LB',
  TEASPOON: 'TEASPOON',
  TABLESPOON: 'TABLESPOON'
}

export const pluralizeUnit = (quantity, unit) => {
  switch (unit) {
    case Unit.CUP:
      return quantity === 1 ? 'cup' : 'cups';
    case Unit.LITRE:
      return quantity === 1 ? 'litre' : 'litres';
    case Unit.GRAM:
      return quantity === 1 ? 'gram' : 'grams';
    case Unit.OZ:
      return 'oz';
    case Unit.LB:
      return quantity === 1 ? 'lb' : 'lbs';
    case Unit.TEASPOON:
      return quantity === 1 ? 'teaspoon' : 'teaspoons';
    case Unit.TABLESPOON:
      return quantity === 1 ? 'tablespoon' : 'tablespoons';
  }
  return unit;
}