migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "axigjf58",
    "name": "price",
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
    "id": "f2ohtxas",
    "name": "adresse",
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
    "id": "ckccb5vn",
    "name": "publier",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obi4vwrfiw2sarq")

  // remove
  collection.schema.removeField("axigjf58")

  // remove
  collection.schema.removeField("f2ohtxas")

  // remove
  collection.schema.removeField("ckccb5vn")

  return dao.saveCollection(collection)
})
