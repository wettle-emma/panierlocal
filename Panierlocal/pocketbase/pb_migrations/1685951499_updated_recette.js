migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mm7fdrss",
    "name": "nameRecette",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xl9xhogo",
    "name": "imageRecette",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r3sjb7nf",
    "name": "ingredientscette",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "covtduye",
    "name": "etape1recette",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0nao7fbq",
    "name": "etape2recette",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gixv6zwk",
    "name": "etape3recette",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rxhrvgtz",
    "name": "etape4recette",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pidcddwz",
    "name": "lienrecette",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hy9obtpq6gj8ilj")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mm7fdrss",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xl9xhogo",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

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

  // update
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

  // update
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

  // update
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

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pidcddwz",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
