import { Card, Grid } from "@mui/material"
import { Link } from "react-router-dom";
import { RecipeLink } from "./recipeLink";

export const HomePage = (props) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <p>
            In the 5 years we have been together, we've had many adventures and tried many different activities and hobbies, but the common thread in all of these has always been food.
            From our first camping trip in Sombrio, to first meals in our first apartment, to first meals in our first home, we have been cooking together all the way along.
            Not every recipe was a success, but we definitely have a pretty great track record of making delicious food! 
            Our home kitchen forever swells with new gadgets, but we've also proven we can make it work with a little grill on a fire on the Sunshine Coast, or with our portable campstove setup in the van while trucking through the Rockies.
          </p>
          <p>
            So why not keep track of our best recipes! I've compiled this list of some memorable meals we've cooked together in the past, so we can use it as the seed for our own little recipe book. 
            I am so excited to see where we find ourselves in the next 5 years, and I couldn't imagine cooking beside anyone else for the rest of my life.
          </p>
          <p>
            Thanks for being the best cooking partner (and life partner) I could ask for.
          </p>
          <p>
            I love you so much
          </p>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className='image-container'>
          <img className='inner-image' src='https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/IMG_1844.jpeg' />
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card className='image-container'>
          <img className='inner-image' src='https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/IMG_20190612_192006_Original.jpg' />
        </Card>
      </Grid>
      <RecipeLink 
          path='pasta+alla+nelson' 
          imageUrl='https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/847D2F61-B154-4649-B19E-A64D542DD013_1_105_c.cropped.jpeg'
          titleClasses='white bottom-left'
          title='Pasta alla Nelson' />
      <RecipeLink 
          path='a+very+spicy+salad'
          imageUrl='https://five-years-of-food-bucket.s3.us-west-2.amazonaws.com/A6A63D9D-7917-44C1-8F61-7C31A07A7B67_1_105_c.cropped.jpeg'
          title='A Very Spicy Salad'
          titleClasses='white top-right' />
    </Grid>
  );
}