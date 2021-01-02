import { FieldValue } from "@google-cloud/firestore";
import passport from "passport";
import { usersRef } from "./collections.service";

export const create = async (profile: passport.Profile) => {
    const { provider, id } = profile;
    return await usersRef.add({
        created: FieldValue.serverTimestamp(),
        lastSeen: FieldValue.serverTimestamp(),
        [provider]: id
    });
}

export const exists = async (profile: passport.Profile) => {
    const { provider, id } = profile;
    return await usersRef.where(provider, "==", id).get().then(snapshot => {
        if(!snapshot.empty){
            return {
                id: snapshot.docs[0].id,
                data: snapshot.docs[0].data()
            }
        }
    })
}