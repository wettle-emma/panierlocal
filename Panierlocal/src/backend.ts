import PocketBase from "pocketbase";
export const pb = new PocketBase("http://127.0.0.1:8090");

try {
    const Recetterecords = await pb.collection('recette').getFullList();
    console.table(Recetterecords);
    console.log(JSON.stringify(Recetterecords, null,2))
} catch (e) {
    console.error(e);
}

export async function Recetterecords() {}

try {
    const Produitrecords = await pb.collection('produit').getFullList();
    console.table(Produitrecords);
    console.log(JSON.stringify(Produitrecords, null,2))
} catch (e) {
    console.error(e);
}

export async function Produitrecords() {}

try {
    const Astucerecords = await pb.collection('astuce').getFullList();
    console.table(Astucerecords);
    console.log(JSON.stringify(Astucerecords, null,2))
} catch (e) {
    console.error(e);
}

export async function Astucerecords() {}

try {
    const Usersrecords = await pb.collection('users').getFullList();
    console.table(Usersrecords);
    console.log(JSON.stringify(Usersrecords, null,2))
} catch (e) {
    console.error(e);
}

export async function Usersrecords() {}
 