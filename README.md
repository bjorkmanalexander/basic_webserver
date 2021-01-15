# Work in progress
## Good to know
* ServiceAccountKey.json is to be located in the project root folder
* Build before run
    * npm install
    * npm run build
    * npm run dev
* Might want to include typings:
```
declare namespace NodeJS {
    export interface ProcessEnv {
        FIRESTORE_PROJECT_ID: string;
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        GOOGLE_CALLBACK_URL: string;
        NODE_ENV: string;
        SERVER_PORT: string;
        SERVER_SECRET: string;
    }
}

export interface Profile extends passport.Profile, Express.User {
    id: string
}
```


## Things to implement:
* Protected Routes
    * OAuth2 (Google, Facebook, GitHub, other providers)
    * Database CRUD

* HTML Markup
    * Navbar
    * Header
    * Main page
    * Blog page
    * Profile Page (protected)
    * CMS (protected)
    * Footer

* JS Functionality

* Dockerfile