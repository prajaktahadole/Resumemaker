import './App.css';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./components/Navbar/TopBar";
import Sidebar from "./components/Navbar/SideBar";
import AppRoutes from './AppRoutes';

function App() {
  const [theme, colorMode] = useMode();
  return (
      <ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Sidebar />
					<AppRoutes></AppRoutes>
					<Topbar />	
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
  );
}

export default App;
