import { FieldValue } from "@google-cloud/firestore";
import passport from "passport";
import { Profile } from "../../typings/user";
import { usersRef } from "./collections.service";
import { fetch as FetchUser, remove as RemoveUser, update as UpdateUser } from "./common.service";

export const create = async (profile: Profile) => {
    const { provider, id } = profile;
    return await usersRef.add({
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

export const getUser = async (id: string) => {
    return await FetchUser(usersRef, id);
}

export const remove = async (id: string) => {
    return await RemoveUser(usersRef, id);
}

export const update = async (id: string, data: object) => {
    return await UpdateUser(usersRef, id, data);
}