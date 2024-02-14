import Slider from '@mui/material/Slider';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

function valueLabelFormat(value) {
console.log("valueLabelFormat = ", value);
  return "$"+value;
}

const PrettoSlider = styled(Slider)(({ theme }) =>({
    color: theme.palette.primary.main,
    height: 16,
    minWidth: 300,

    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-thumb': {
      height: 48,
      width: 48,
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
      fontSize: 24,
      fontWeight: 'bold',
      background: 'unset',
      padding: 0,
      width: 48,
      height: 48,
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

  var price = 1;

  export function getSmoothiePrice() {
    console.log("getSmoothiePrice = ", price);
    return price;
  }


export const SmoothiePrice = () => {
  //const [smoothiePrice,setSmoothiePrice] = useState(1);

  function setValue(val) {
      console.log("SmoothiePrice = ", val);
      price = val;
  }

    return (
        <Container maxWidth="sm">
            <h2>Price per Smoothie?</h2>
            <PrettoSlider
                onChangeCommitted={(_, v) => setValue(v)}
                aria-label="Price per Smoothie"
                size="large"
                defaultValue={1}
                valueLabelDisplay="on"
                valueLabelFormat={valueLabelFormat}
                step={1}
                marks
                min={1}
                max={3} />
        </Container>
    );
}
