import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

export async function allProduits() {
    const produitRecords = await pb.collection('produit').getFullList();
    return produitRecords; 
}

export async function allAstuces() {
    const astuceRecords = await pb.collection('astuce').getFullList();
    return astuceRecords;
}

export async function allRecettes() {
    const recetteRecords = await pb.collection('recette').getFullList();
    return recetteRecords; 
}

export async function allUsers() {
    const usersRecords = await pb.collection('users').getFullList();
    return usersRecords;
}

