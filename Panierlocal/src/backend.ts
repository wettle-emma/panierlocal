import PocketBase from "pocketbase";
import type { ProduitsResponse, RecettesResponse, AstucesResponse } from "./pocketbase-types";
export const pb = new PocketBase("http://127.0.0.1:8090");

export async function allProduits() {
    const produitRecords = await pb.collection('produits').getFullList();
    return produitRecords; 
}

export async function allAstuces() {
    const astuceRecords = await pb.collection('astuces').getFullList<AstucesResponse>({'$autoCancel':false,});
    return astuceRecords;
}

export async function allRecettes() {
    const recetteRecords = await pb.collection('recettes').getFullList();
    return recetteRecords; 
}

export async function allUsers() {
    const usersRecords = await pb.collection('users').getFullList();
    return usersRecords;
}

export async function oneProduit(id: string) {
    return await pb.collection('produits').getOne<ProduitsResponse>(id);
};

export async function oneRecette(id: string) {
    return await pb.collection('recettes').getOne<RecettesResponse>(id);
};

export async function oneAstuce(id: string) {
    return await pb.collection('astuces').getOne<AstucesResponse>(id, {'$autoCancel':false,});
};


