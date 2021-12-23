import { Card, Grid } from "@mui/material";
import { IngredientList } from "./ingredientList";
import { InstructionList } from "./instructionList";
import { Story } from "./story";

export const RecipePage = (props) => {
  return (
    <Grid container spacing={1} >
      <Grid item xs={12} >
        {!props.story && <Card>
          <h3>
            {props.recipeName}
          </h3>
        </Card>}
        {props.story && <Story recipeName={props.recipeName} story={props.story} />}
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{['textAlign']: 'center'}}>
          <h4>Prep time: {props.info.prepTime}</h4>
          <h4>Cook time: {props.info.cookTime}</h4>
        </Card>
      </Grid>
      <IngredientList ingredients={props.ingredients} />
      <Grid item xs={12}>
        <Card>
          <InstructionList instructions={props.instructions} />
        </Card>
      </Grid>
    </Grid>
  );
}

/*

interface Recipe {
  recipeName: string;
  story?: string;
  info: {
    prepTime: string;
    cookTime: string;
  }
  ingredients: [{
    sectionName?: string,
    ingredientList: [{
      quantity: number;
      unit: Unit;
      ingredient: string;
    }]
  }];
  instructions: [string];
}

enum Unit {
  CUP,
  LITRE,
  GRAM,
  OZ
  LB,
  TEASPOON,
  TABLESPOON,
}

*/