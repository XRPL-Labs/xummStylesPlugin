const plugin = require('tailwindcss/plugin');
const styles = plugin(
    function ({ addUtilities, addBase, e }: any) {
        addUtilities({
            '.light': {
                '--themeTextColorPrimary': 'var(--colorBlack)',
                '--themeColorBackgroundPrimary': 'rgb(var(--colorWhite))',
                '--themeColorBackgroundTint': 'var(--colorLight)',
                '--themeColorPrimary': 'var(--colorBlue)',
            },
            '.dark': {
                '--themeTextColorPrimary': 'var(--colorWhite)',
                '--themeColorBackgroundPrimary': 'rgb(var(--colorBlack))',
                '--themeColorBackgroundTint': 'rgba(var(--colorGrey), 0.25)',
                '--themeColorPrimary': 'var(--colorBlue)',
            },
            '.royal': {

            },
            '.moonlight': {

            }
        }),
            addBase({
                ':root': {
                    '--colorWhite': '255, 255, 255',
                    '--colorBlack': '0, 0, 0',
                    '--colorGrey': '96, 104, 133',
                    '--colorGray': 'var(--colorGrey)',
                    '--colorSilver': '#ACB1C1',
                    '--colorLight': '#F8FAFD',
                    '--colorBlue': '#0030CF',
                    '--colorOrange': '#F8BF4C',
                    '--colorGreen': '#3BDC96',
                    '--colorRed': '#FF5B5B'
                },
                'body': {
                    fontFamily: 'Arial',
                    color: 'var(--themeTextColorPrimary)',
                    background: 'var(--themeColorBackgroundTint)'
                }
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
                        secondary: 'black'
                    }
                },
            }
        }
    }
)

module.exports = styles;