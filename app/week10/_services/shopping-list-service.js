import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const querySnapshot = await getDocs(itemsCollection);
    const items = [];

    querySnapshot.forEach((doc) => {
        items.push({
        id: doc.id,
        data: doc.data(),
        });
    });

    return items;
}

export async function addItem(userId, item) {
    const itemsCollection = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
}