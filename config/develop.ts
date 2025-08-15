import path from 'path';
import type { Config } from 'stackpress/types';
import unocss from 'unocss/vite';

const cwd = process.cwd();
const build = path.join(cwd, 'build');

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
      plugins: [unocss()]
    }
  },
  database: {
    //used to encrypt/decrypt data in the database
    seed: 'schema.idea',
    //where to store create and alter table migration files
    // - This is used in conjunction with `revisions`
    // - This doesn't update the database, it simply logs the changes
    migrations: path.join(build, 'migrations')
  },
  client: {
    //used by stackpress/client to import()
    //the generated client code to memory
    module: 'stackpress-client',
    //name of the client package used in package.json
    package: 'stackpress-client',
    //where to store serialized idea json files for historical 
    //purposes. Revisions are used in conjuction with push and 
    //migrate to determine the changes between each idea change.
    revisions: path.join(build, 'revisions'),
    //what tsconfig file to base the typescript compiler on
    tsconfig: path.join(cwd, 'tsconfig.json')
  }
};
//export configuration
export default config;