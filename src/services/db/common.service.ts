export const fetch = async (collection: FirebaseFirestore.CollectionReference, docRef: string) => {
    return await collection.doc(docRef).get();
}

export const remove = async (collection: FirebaseFirestore.CollectionReference, docRef: string) => {
    return await collection.doc(docRef).delete();
}

export const update = async (collection: FirebaseFirestore.CollectionReference, docRef: string, data: object) => {
    return await collection.doc(docRef).update(data);
}