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