import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day from "./pages/Day";
import Trading from "./pages/Trading";
import WeatherManual from "./pages/WeatherManual";
import LeaderBoard from "./pages/LeaderBoard";
import { ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import createPurpleSmoothieTheme from "./theme/purpleSmoothieTheme";
import "./index.css";
import logo from './theme/logo2.svg';
import NewGame from "./pages/NewGame";

const theme = createPurpleSmoothieTheme();

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
            <img src={logo} alt="smoothie logo" width="600" height="150"/>
            <Routes>
              <Route path="/" element={<NewGame />} />
              <Route path="Trading/:dayNo/:playerNo" element={<Trading />}></Route>
              <Route path="Day/:dayNo" element={<Day />} />
              <Route path="Weather/:dayNo" element={<WeatherManual />} />
              <Route path = "/LeaderBoard/:dayNo" element = {<LeaderBoard />} />
            </Routes>
          </Stack>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
