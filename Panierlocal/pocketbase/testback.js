import { allProduits, allAstuces, allRecettes, allUsers } from "./backend.mjs";

try {
    const produitRecords = await allProduits();
    console.log(JSON.stringify(produitRecords, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const astuceRecords = await allAstuces();
    console.log(JSON.stringify(astuceRecords, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const recetteRecords = await allRecettes();
    console.log(JSON.stringify(recetteRecords, null, 2));
} catch (e) {
    console.error(e);
}

try {
    const UsersRecords = await allUsers();
    console.log(JSON.stringify(UsersRecords, null, 2));
} catch (e) {
    console.error(e);
}