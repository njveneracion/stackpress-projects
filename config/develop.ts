//config/develop.ts
import type { Config } from 'stackpress/types';
import unocss from 'unocss/vite';
//development configuration
const config: Config = {
  server: { 
    mode: 'development',
  },
  view: {
    engine: {
      //filepath to a global css files
      cssFiles: [ 
        //frui component styles
        'frui/frui.css', 
        //stackpress component styles
        'stackpress/stackpress.css', 
        //unocss atomic style engine
        'virtual:uno.css' 
      ],
      //vite plugins
      plugins: [ unocss() ]
    }
  }
};
//export configuration
export default config;