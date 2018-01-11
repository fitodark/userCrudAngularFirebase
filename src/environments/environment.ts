// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAIgcc8-VOPeHev7kgQ2wf0uSH-KNa5wEI',
    authDomain: 'user-db-76d11.firebaseapp.com',
    databaseURL: 'https://user-db-76d11.firebaseio.com',
    projectId: 'user-db-76d11',
    storageBucket: 'user-db-76d11.appspot.com',
    messagingSenderId: '523603436429'
  }
};
