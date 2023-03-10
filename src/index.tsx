const plugin = require('tailwindcss/plugin');

function withOpacityValue(variable: string) {
    return ({ opacityValue }: any) => {
        if (opacityValue === undefined) {
            return `rgb(var(${variable})) !important`
        }
        return `rgba(var(${variable}), ${opacityValue}) !important`
    }
}

const styles = plugin(
    function ({ addUtilities, addBase, e, theme }: any) {
        addUtilities({
            '[class~="light"]': {
                '--themeTextColorPrimary': 'var(--colorBlack)',
                '--themeTextColorSecondary': 'var(--colorGrey)',
                '--themeColorBackgroundPrimary': 'var(--colorWhite)',
                '--themeColorTint': 'var(--colorLight)',
                '--themeColorTintOpacity': '1'
            },
            '[class~="dark"]': {
                '--themeTextColorPrimary': 'var(--colorWhite)',
                '--themeTextColorSecondary': 'var(--colorSilver)',
                '--themeColorBackgroundPrimary': 'var(--colorBlack)',
                '--themeColorTint': 'var(--colorGrey)',
                '--themeColorTintOpacity': '0.25'
            },
            '[class~="moonlight"]': {
                '--themeTextColorPrimary': 'var(--colorWhite)',
                '--themeTextColorSecondary': 'var(--colorSilver)',
                '--themeColorBackgroundPrimary': 'var(--colorMoonlight)',
                '--themeColorTint': 'var(--colorGrey)',
                '--themeColorTintOpacity': '0.19'
            },
            '[class~="royal"]': {
                '--themeTextColorPrimary': 'var(--colorWhite)',
                '--themeTextColorSecondary': 'var(--colorSilver)',
                '--themeColorBackgroundPrimary': 'var(--colorRoyal)',
                '--themeColorTint': 'var(--colorGrey)',
                '--themeColorTintOpacity': '0.22'
            },
            'body': {
                fontFamily: `'proxima-nova', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
                color: theme('textColor.primary'),
                backgroundColor: 'rgb(var(--themeColorBackgroundPrimary))'
            }
        }),
            addBase({
                ':root': {
                    '--colorWhite': '255, 255, 255',
                    '--colorBlack': '0, 0, 0',
                    '--colorGrey': '96, 104, 133',
                    '--colorGray': 'var(--colorGrey)',
                    '--colorSilver': '172, 177, 193',
                    '--colorLight': '248, 250, 253',
                    '--colorBlue': '0, 48, 207',
                    '--colorOrange': '248, 191, 76',
                    '--colorGreen': '59, 220, 150',
                    '--colorRed': '255, 91, 91',
                    '--colorMoonlight': '24, 26, 33',
                    '--colorRoyal': '3, 11, 54'
                },

            })
    },
    {
        theme: {
            extend: {
                colors: {
                    primary: 'var(--themeColorPrimary)',
                    secondary: 'var(--colorThemeSecondary)',
                    theme: {
                        primary: 'var(--themeColorPrimary)',
                        secondary: 'black',
                        tint: 'rgba(var(--themeColorTint), var(--themeColorTintOpacity))',
                    }
                },
                textColor: {
                    'primary': withOpacityValue('--themeTextColorPrimary'),
                    'secondary': withOpacityValue('--themeTextColorSecondary'),
                }
            }
        }
    }
)

module.exports = styles;