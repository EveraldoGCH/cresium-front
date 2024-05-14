import { createTheme, ThemeOptions } from '@mui/material/styles';
import { colorsVars } from '../colorsVars';
import { BorderColor } from '@mui/icons-material';

const defaultTheme = createTheme();

declare module '@mui/material/styles' {
    interface Palette {
        tertiary: Palette['primary'];
        disabled: Palette['primary'];
    }

    interface PaletteOptions {
        tertiary?: PaletteOptions['primary'];
        disabled?: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
}

const customThemeOptions: ThemeOptions = createTheme({
    components: {
        MuiChip:{
            styleOverrides:{
                root:{
                    "& svg":{
                        width:"14px",
                        height:"14px"
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // minWidth: '110px',
                    borderRadius: "8px",
                    fontWeight: 600,
                    textTransform: 'initial',
                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    padding: '12px 20px',
                    transition: "1s ease",
                    '&:hover': {
                        transform: 'scale(1.03)',
                    },
                },
                outlined: {
                    border: `1px solid ${colorsVars.grey300}`,
                    color:"black",
                    '&:hover': {
                        borderColor: colorsVars.primary500
                    },
                },
                text: {
                    borderRadius: 0,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        transform: 'none',
                    },
                },
                contained: ({ theme }) => ({
                    fill: theme.palette.primary.contrastText,
                    padding: '12px 20px',
                    boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                    '&:hover': {
                        backgroundColor: theme.palette.primary.main,
                    },
                    '&.Mui-disabled': {
                        background: 'rgba(73, 60, 121, 0.2)',
                        color: 'white',
                    },
                }),
                sizeSmall: {
                    fontSize: defaultTheme.typography.pxToRem(14),
                    lineHeight: defaultTheme.typography.pxToRem(21),
                },
                sizeMedium: {
                    fontSize: defaultTheme.typography.pxToRem(16),
                    lineHeight: defaultTheme.typography.pxToRem(22),
                },
                sizeLarge: {
                    fontSize: defaultTheme.typography.pxToRem(16),
                    lineHeight: defaultTheme.typography.pxToRem(22),
                    padding: '12px 20px',
                    [defaultTheme.breakpoints.up('lg')]: {
                        minWidth: '173px',
                    },
                },
                startIcon: {
                    '& svg': {
                        width: 24,
                        height: 24,
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: colorsVars.grey500,
                    fontSize: defaultTheme.typography.pxToRem(14),
                    fontWeight: 500,
                    lineHeight: defaultTheme.typography.pxToRem(22),
                    textTransform: "none"
                },
                selected: {
                    color: "white"
                },



            }
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                separator: {
                    color: colorsVars.grey300
                },
                li: {
                    color: colorsVars.grey500
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: `1px solid ${colorsVars.divider}`,
                    background: "white",
                    input: {
                        padding: 0,
                        height: "24px"
                    }
                }
            }
        }

    },
    typography: {
        fontFamily: "Inter",
        h1: {
            fontSize: defaultTheme.typography.pxToRem(42),
            fontWeight: 500,
            lineHeight: defaultTheme.typography.pxToRem(46),
            color: '#353535',
        },
        h2: {
            fontSize: defaultTheme.typography.pxToRem(30),
            fontWeight: 500,
            color: '#353535',
        },
        h3: {
            fontSize: defaultTheme.typography.pxToRem(32),
            lineHeight: defaultTheme.typography.pxToRem(36),
            fontWeight: 500,
            color: '#353535',
            [defaultTheme.breakpoints.up('md')]: {
                fontSize: defaultTheme.typography.pxToRem(24),
            },
        },
        h4: {
            fontSize: defaultTheme.typography.pxToRem(28),
            lineHeight: defaultTheme.typography.pxToRem(32),
            fontWeight: 500,
            color: '#353535',
        },
        h5: {
            fontSize: defaultTheme.typography.pxToRem(26),
            fontWeight: 500,
            color: '#353535',
        },
        h6: {
            fontWeight: 500,
            fontSize: defaultTheme.typography.pxToRem(18)
        },
        subtitle1: {
            fontSize: defaultTheme.typography.pxToRem(16),
            lineHeight: defaultTheme.typography.pxToRem(24),
            fontWeight: 500,
            color: '#353535',
        },
        subtitle2: {
            fontSize: defaultTheme.typography.pxToRem(16),
            lineHeight: defaultTheme.typography.pxToRem(21),
            fontWeight: 500,
            color: colorsVars.grey900,
        },
        body1: {
            fontSize: defaultTheme.typography.pxToRem(14),
            lineHeight: defaultTheme.typography.pxToRem(20),
            fontWeight: 500
        },
        body2: {
            fontSize: defaultTheme.typography.pxToRem(16),
            lineHeight: defaultTheme.typography.pxToRem(22),
            fontWeight: 400
        },
        button: {
            fontWeight: 600,
            fontSize: defaultTheme.typography.pxToRem(16),
            lineHeight: defaultTheme.typography.pxToRem(24),

        },
    },
    palette: {
        primary: {
            main: colorsVars.indigo600,
            dark: '#6C29E0',
            darker: '#3D1DAC',
            // dark: '#4112E4',
            light: 'rgba(61, 29, 172, 0.25)',
            contrastText: 'white',
        },
        secondary: {//CAMBIAR A COLOR SECUNDARIO DE CRESIUM
            main: 'rgba(74, 33, 217, 0.38)',
        },
        tertiary: {//CAMBIAR A COLOR DE CRESIUM
            main: 'rgba(44, 171, 199, 1)',
        },
        disabled: {
            main: 'rgba(151, 151, 151, 1)',
            light: '#A7A7A7',
            dark: '#979797',
        },
        text: {//CAMBIAR A COLOR DE CRESIUM
            primary: '#363537',
            secondary: '#353535',
            disabled: '#979797',
        },//CAMBIAR A COLOR DE CRESIUM
        warning: {
            main: 'rgb(255, 196, 0, 1)',
        },
    },
});

export default customThemeOptions;
