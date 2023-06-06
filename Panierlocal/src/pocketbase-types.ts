/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Astuces = "astuces",
	Evenements = "evenements",
	Produits = "produits",
	Recettes = "recettes",
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

export enum AstucesProduitsOptions {
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
export type AstucesRecord = {
	nameAstuce?: string
	imageAstuce?: string
	nbr_usages?: number
	produits?: AstucesProduitsOptions[]
	etape1astuce?: string
	etape2astuce?: string
	etape3astuce?: string
	etape4astuce?: string
	lienastuce?: RecordIdString
	photoAstuce?: string
}

export type EvenementsRecord = {
	imageEvent?: string
	nameEvent?: string
	dateEvent?: string
	heure?: string
	adresseEvent?: string
	tel?: string
}

export type ProduitsRecord = {
	nameProduit?: string
	imageProduit?: string
	price?: number
	adresse?: string
	datePublication?: IsoDateString
	lienproduit?: RecordIdString
	photoProduit?: string
}

export enum RecettesIngredientscetteOptions {
	"lait" = "lait",
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
	"crème" = "crème",
	"vinaigrette" = "vinaigrette",
}
export type RecettesRecord = {
	nameRecette?: string
	imageRecette?: string
	nbr_personnes?: number
	ingredientscette?: RecettesIngredientscetteOptions[]
	etape1recette?: string
	etape2recette?: string
	etape3recette?: string
	etape4recette?: string
	lienrecette?: RecordIdString
	photoRecette?: string
}

export type UsersRecord = never

// Response types include system fields and match responses from the PocketBase API
export type AstucesResponse<Texpand = unknown> = Required<AstucesRecord> & BaseSystemFields<Texpand>
export type EvenementsResponse = Required<EvenementsRecord> & BaseSystemFields
export type ProduitsResponse<Texpand = unknown> = Required<ProduitsRecord> & BaseSystemFields<Texpand>
export type RecettesResponse<Texpand = unknown> = Required<RecettesRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	astuces: AstucesRecord
	evenements: EvenementsRecord
	produits: ProduitsRecord
	recettes: RecettesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	astuces: AstucesResponse
	evenements: EvenementsResponse
	produits: ProduitsResponse
	recettes: RecettesResponse
	users: UsersResponse
}