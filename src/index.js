import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Day from "./pages/Day";
import Trading from "./pages/Trading";
import { ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import createPurpleSmoothieTheme from "./theme/purpleSmoothieTheme";
import "./index.css";

import NewGame from "./pages/NewGame";

const theme = createPurpleSmoothieTheme();

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ThemeProvider theme={theme}>
          <Stack spacing={6} alignItems="center" justifyContent="space-evenly">
            <h1>Smoothie Wars</h1>
            <Routes>
              <Route path="/" element={<NewGame />} />
              <Route path="Day" element={<Day />} />
              <Route path="Trading" element={<Trading />}></Route>
            </Routes>
          </Stack>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
