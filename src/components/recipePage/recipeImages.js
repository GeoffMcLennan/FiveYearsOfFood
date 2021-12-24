import { Card, Grid } from "@mui/material";

export const RecipeImages = (props) => {
  return props.imageUrls.map((imageUrl, i) => {
    return <Grid item xs={12} md={6} key={i}>
      <Card className='image-container'>
        <img src={imageUrl} className='inner-image' />
      </Card>
    </Grid>
  });
}