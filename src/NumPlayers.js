import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)(({ theme }) =>({
    color: theme.palette.primary.main,
    height: 16,
    minWidth: 600,

    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 36,
      width: 36,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&:before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 20,
      fontWeight: 'bold',
      background: 'unset',
      padding: 0,
      width: 36,
      height: 36,
      borderRadius: '50% 50% 50% 50%',
      backgroundColor: theme.palette.primary[900],
      transformOrigin: 'bottom left',
      transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
      '&:before': { display: 'none' },
      '&.MuiSlider-valueLabelOpen': {
        transform: 'translate(50%, -100%) rotate(-225deg) scale(1)',
      },
      '& > *': {
        transform: 'rotate(225deg)',
      },
    },
  }));

var numPlayers = 2;


export function getNumPlayers() {
    console.log("getNumPlayers = ", numPlayers);
    return numPlayers;
}


function setValue(val) {
    console.log("NumPlayers = ", val);
    numPlayers = val;
}

export const NumPlayers = () => {
    return (
        <Container maxWidth="sm">
            <h2>How many players?</h2>
            <PrettoSlider
                onChangeCommitted={(_, v) => setValue(v)}
                aria-label="No of Players"
                size="large"
                defaultValue={2}
                valueLabelDisplay="on"
                step={1}
                marks
                min={2}
                max={10} />
        </Container>
    );
}
