import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import { ThemeProvider } from "@mui/material"
import theme from "./Theme"
function App() {
  return (
    <ThemeProvider theme={theme}>

      <Home>

      </Home>



    </ThemeProvider>

  );
}

export default App;
