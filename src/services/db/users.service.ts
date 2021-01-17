import { FieldValue } from "@google-cloud/firestore";
import { Profile } from "../../typings/user";
import { usersRef } from "./collections.service";
import { create, fetch, remove, update } from "./common.service";

export const createUser = async (profile: Profile) => {
    const { provider, id } = profile;
    return await create(usersRef, {
        created: FieldValue.serverTimestamp(),
        lastSeen: FieldValue.serverTimestamp(),
        roles: [ "reader" ],
        [provider]: id
    });
}

export const exists = async (profile: Profile) => {
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

export const getUser = async (profile: Profile) => {
    const { id } = profile;
    return await fetch(usersRef, id);
}

export const removeUser = async (profile: Profile) => {
    const { id } = profile;
    return await remove(usersRef, id);
}

export const updateUser = async (profile: Profile, data: object) => {
    const { id } = profile;
    return await update(usersRef, id, data);
}