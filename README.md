# Work in progress
## Good to know
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