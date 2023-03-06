const plugin = require('tailwindcss/plugin');
const styles = plugin(
    function ({ addUtilities, theme, e }: any) {
        addUtilities({
            '.test': {
                fontSize: '13rem'
            }
        })
    }
)

module.exports = styles;