
import { useState } from "react";
import Circles from './Circles'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Navbar  from './screens/global/Navbar';
import { Routes, Route } from "react-router-dom";
// import Dashboard from '.screens/dashboard';
// import Form from './screens/form'
import Sidebar  from './screens/global/Sidebar';

const width = 960;
const height = 300;

function App() {

  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="content">
              <Navbar setIsSidebar={setIsSidebar}/>
              <Routes>
              <Route path="/" element={<Circles height={height} width={width} />} />
            
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
