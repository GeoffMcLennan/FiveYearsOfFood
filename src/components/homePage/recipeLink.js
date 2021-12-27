import { Card, Grid } from "@mui/material"
import { Link } from "react-router-dom"

export const RecipeLink = (props) => {
  return (
    <Grid item xs={12} md={4}>
      <Link to={`/recipes/${props.path}`}>
        <Card className='recipe-link-card' sx={{backgroundImage: `url("${props.imageUrl}")`}}>
          <h2 className={`img-header ${props.titleClasses ? props.titleClasses : ''}`}>{props.title}</h2>
        </Card>
      </Link>
    </Grid>
  )
}

/*
{
  path: string;
  imageUrl: string;
  titleClasses?: string;
  title: string;
}
*/