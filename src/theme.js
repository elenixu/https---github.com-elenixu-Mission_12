import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#ffffff', contrastText: '#0c0c0d' },
    secondary: { main: '#991f2b' },
    background: { default: '#0c0c0d', paper: '#171719' },
    text: { primary: '#ffffff', secondary: '#a5a5aa' },
  },
  typography: {
    fontFamily: 'Raleway, Arial, sans-serif',
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { minWidth: 320, backgroundColor: '#0c0c0d' },
        '*, *::before, *::after': { boxSizing: 'border-box' },
        html: { scrollBehavior: 'smooth' },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 22, minHeight: 42 },
      },
    },
  },
})

export default theme
