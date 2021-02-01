import React from "react";
import "./App.css";
import NasaPOD from './components/NasaPOD'
import theme from './theme/index'
import {ThemeProvider} from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NasaPOD />
      </div>
    </ThemeProvider>
  );
}

export default App;