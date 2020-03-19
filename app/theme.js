/**
 *
 * Material UI Theme
 *
 * Here is where the theme can be customized.
 * more info: https://material-ui.com/customization/theming/
 *
 */
import { createMuiTheme } from '@material-ui/core/styles';

const switchableTheme = darkMode =>
  createMuiTheme({
    // Modifications to default MUI theme
    // https://material-ui.com/customization/default-theme/#default-theme
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: darkMode ? { main: '#212121' } : { main: '#fdd835' },
      secondary: darkMode ? { main: '#fdd835' } : { main: '#212121' },
    },
    typography: {
      fontFamily: '"Roboto Slab", "Times New Roman", serif',
    },

    // Custom-use values
    // int values are to be passed to theme.spacing, or used in Box spacing props
    // i.e. `theme.spacing(theme.headerHeight)` or <Box p={theme.surfacePadding} />
    headerHeight: 8,
    footerHeight: 2,
    drawerWidth: 50,
    surfacePadding: 2,
    itemSpacing: 1,
  });

export default switchableTheme;
