migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8aqx8cf6",
    "name": "nbr_personnes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "covtduye",
    "name": "etape_1",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0nao7fbq",
    "name": "etape_2",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gixv6zwk",
    "name": "etape_3",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxhrvgtz",
    "name": "etape_4",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // remove
  collection.schema.removeField("8aqx8cf6")

  // remove
  collection.schema.removeField("r3sjb7nf")

  // remove
  collection.schema.removeField("covtduye")

  // remove
  collection.schema.removeField("0nao7fbq")

  // remove
  collection.schema.removeField("gixv6zwk")

  // remove
  collection.schema.removeField("rxhrvgtz")

  return dao.saveCollection(collection)
})
