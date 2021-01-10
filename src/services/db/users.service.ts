import { FieldValue } from "@google-cloud/firestore";
import passport from "passport";
import { usersRef } from "./collections.service";
import { remove as RemoveUser, update as UpdateUser } from "./common.service";

export const create = async (profile: passport.Profile) => {
    const { provider, id } = profile;
    return await usersRef.add({
        created: FieldValue.serverTimestamp(),
        lastSeen: FieldValue.serverTimestamp(),
        roles: [ "reader" ],
        [provider]: id
    });
}

export const remove = async (id: string) => {
    return await RemoveUser(usersRef, id);
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
    });
}

export const update = async (id: string, data: object) => {
    return await UpdateUser(usersRef, id, data);
}