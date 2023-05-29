/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Astuce = "astuce",
	Produit = "produit",
	Recette = "recette",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum AstuceProduitsOptions {
	"eau" = "eau",
	"citron" = "citron",
	"recipient" = "recipient",
	"eponge" = "eponge",
	"balai" = "balai",
	"torchon" = "torchon",
	"brosse" = "brosse",
	"savon" = "savon",
	"bicarbonate de soude" = "bicarbonate de soude",
	"vinaigre blanc" = "vinaigre blanc",
	"liquide vaisselle" = "liquide vaisselle",
}
export type AstuceRecord = {
	name?: string
	image?: string
	nbr_usages?: number
	produits?: AstuceProduitsOptions[]
	etape_1?: string
	etape_2?: string
	etape_3?: string
	etape_4?: string
}

export type ProduitRecord = {
	name?: string
	image?: string
	price?: number
	adresse?: string
	publier?: IsoDateString
}

export enum RecetteIngredientsOptions {
	"carottes" = "carottes",
	"ail" = "ail",
	"persil" = "persil",
	"huile d'olive" = "huile d'olive",
	"sel" = "sel",
	"poivre" = "poivre",
	"citron" = "citron",
	"pâtes" = "pâtes",
	"salade" = "salade",
	"sucre" = "sucre",
	"farine" = "farine",
	"beurre" = "beurre",
	"huile" = "huile",
	"paprika" = "paprika",
	"curry" = "curry",
	"lait" = "lait",
	"basilic" = "basilic",
	"ciboulette" = "ciboulette",
	"yaourt" = "yaourt",
	"poulet" = "poulet",
	"boeuf" = "boeuf",
	"veau" = "veau",
	"porc" = "porc",
	"riz" = "riz",
	"semoule" = "semoule",
	"tomate" = "tomate",
	"courgette" = "courgette",
	"pomme de terre" = "pomme de terre",
	"œuf" = "œuf",
	"concombre" = "concombre",
	"avocat" = "avocat",
	"vinaigre" = "vinaigre",
	"herbes de Provence" = "herbes de Provence",
	"poisson" = "poisson",
	"crevettes" = "crevettes",
	"moules" = "moules",
	"pomme" = "pomme",
	"poire" = "poire",
	"fraise" = "fraise",
	"pêche" = "pêche",
	"abricot" = "abricot",
	"lentilles" = "lentilles",
	"saumon" = "saumon",
	"thon" = "thon",
	"jambon cru" = "jambon cru",
	"jambon blanc" = "jambon blanc",
	"olives" = "olives",
	"saucisson" = "saucisson",
	"chorizo" = "chorizo",
}
export type RecetteRecord = {
	name?: string
	image?: string
	nbr_personnes?: number
	ingredients?: RecetteIngredientsOptions[]
	etape_1?: string
	etape_2?: string
	etape_3?: string
	etape_4?: string
}

export type UsersRecord = {
	mot_de_passe?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AstuceResponse = Required<AstuceRecord> & BaseSystemFields
export type ProduitResponse = Required<ProduitRecord> & BaseSystemFields
export type RecetteResponse = Required<RecetteRecord> & BaseSystemFields
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	astuce: AstuceRecord
	produit: ProduitRecord
	recette: RecetteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	astuce: AstuceResponse
	produit: ProduitResponse
	recette: RecetteResponse
	users: UsersResponse
}