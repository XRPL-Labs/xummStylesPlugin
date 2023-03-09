## How to use this plugin

import styles from the plugin in your tailwind.config.js

```const styles = require("@kevinkoobs/xummstyleplugin")```

Add `const styles` to the plugins part of the config

```
module.exports = {
  /** All your other config here **/
  plugins: [styles],
}
```

Dont' forget to add the typekit stylesheet for the font:

```<link type="stylesheet" href="https://use.typekit.net/vtt7ckl.css" type="text/css"```