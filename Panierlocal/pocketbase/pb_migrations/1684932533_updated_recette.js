migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r3sjb7nf",
    "name": "ingredients",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 49,
      "values": [
        "carottes",
        "ail",
        "persil",
        "huile d'olive",
        "sel",
        "poivre",
        "citron",
        "pâtes",
        "salade",
        "sucre",
        "farine",
        "beurre",
        "huile",
        "paprika",
        "curry",
        "lait",
        "basilic",
        "ciboulette",
        "yaourt",
        "poulet",
        "boeuf",
        "veau",
        "porc",
        "riz",
        "semoule",
        "tomate",
        "courgette",
        "pomme de terre",
        "œuf",
        "concombre",
        "avocat",
        "vinaigre",
        "herbes de Provence",
        "poisson",
        "crevettes",
        "moules",
        "pomme",
        "poire",
        "fraise",
        "pêche",
        "abricot",
        "lentilles",
        "saumon",
        "thon",
        "jambon cru",
        "jambon blanc",
        "olives",
        "saucisson",
        "chorizo"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r3sjb7nf",
    "name": "ingredients",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "carottes",
        "ail",
        "persil",
        "huile d'olive",
        "sel",
        "poivre",
        "citron",
        "pâtes",
        "salade",
        "sucre",
        "farine",
        "beurre",
        "huile",
        "paprika",
        "curry",
        "lait",
        "basilic",
        "ciboulette",
        "yaourt",
        "poulet",
        "boeuf",
        "veau",
        "porc",
        "riz",
        "semoule",
        "tomate",
        "courgette",
        "pomme de terre",
        "œuf",
        "concombre",
        "avocat",
        "vinaigre",
        "herbes de Provence",
        "poisson",
        "crevettes",
        "moules",
        "pomme",
        "poire",
        "fraise",
        "pêche",
        "abricot",
        "lentilles",
        "saumon",
        "thon",
        "jambon cru",
        "jambon blanc",
        "olives",
        "saucisson",
        "chorizo"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
