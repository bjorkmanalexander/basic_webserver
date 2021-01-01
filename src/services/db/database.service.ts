import { Firestore } from "@google-cloud/firestore";
import { join } from "path";
const {
    FIRESTORE_PROJECT_ID
} = process.env;
export const db = new Firestore({
    projectId: FIRESTORE_PROJECT_ID,
    keyFilename: join(__dirname, "..", "..", "ServiceAccountKey.json")
});