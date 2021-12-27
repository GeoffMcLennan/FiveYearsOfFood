import { createTheme, Container, ThemeProvider } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Header, ScrollToTop } from './components';
import { HomePage } from './components/homePage';
import { RecipePageDataWrapper } from './components/recipePage/recipePageDataWrapper';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa'
    },
    secondary: {
      main: '#b2dfdb'
    }
  },
  typography: {
    fontFamily: '"HelveticaNeue-Light"'
  }
});

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <ThemeProvider theme={theme} >
          <Header />
          <Container maxWidth='md' sx={containerCss}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='recipes/:recipeName' element={<RecipePageDataWrapper />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

const containerCss = {
  marginTop: '10px',
  textAlign: 'left',
}

export default App;
