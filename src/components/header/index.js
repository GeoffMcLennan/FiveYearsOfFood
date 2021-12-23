import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = (props) => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h3' component='div'>
          Five Years of Food
        </Typography>
      </Toolbar>
    </AppBar>
  )
}