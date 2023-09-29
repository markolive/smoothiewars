import { createTheme } from '@mui/material';
import { purple, lime } from '@mui/material/colors';

const createPurpleSmoothieTheme = () => createTheme(
    {
      spacing: 8,
      palette: {
        primary: purple,
        secondary: lime,
      },
    }
  );

  export default createPurpleSmoothieTheme;