import { Card, Grid } from "@mui/material";
import { pluralizeUnit } from "../../utils/measurementUtils"

export const IngredientList = (props) => {
  const gridItems = props.ingredients.map((section, i) => (
    <Grid item xs={12} md={6} key={i}>
      <Card>
        {section.sectionName && <h4>{section.sectionName}</h4>}
        <ul>
          {section.ingredientList.map(ingredient => (
            <li key={ingredient.ingredient}>
              {formatIngredient(ingredient)}
            </li>
          ))}
        </ul>
      </Card>
    </Grid>
  ))
  return gridItems;
  // return (
  //   <div>
  //     <h4>Ingredients:</h4>
  //       {props.ingredients.map((section, i) => (
  //         <div key={i}>
  //           {section.sectionName && <h5>{section.sectionName}</h5>}
  //           <ul>
  //             {section.ingredientList.map(ingredient => (
  //               <li key={ingredient.ingredient}>
  //                 {formatIngredient(ingredient)}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ))}
  //   </div>
  // );
}

const formatIngredient = (ingredient) => {
  const unitString = pluralizeUnit(ingredient.quantity, ingredient.unit);
  return `${ingredient.quantity} ${unitString.length ? unitString + ' ' : ''}- ${ingredient.ingredient}`;
}